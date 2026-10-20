import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  signal,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SeoService } from '../../core/seo.service';
import { SITE_ORIGIN } from '../../core/site-origin';
import { WhatsappService } from '../../core/whatsapp.service';
import { Noticia, newsPageContent, noticias } from '../../data/noticias';
import { pt } from '../../i18n/pt';
import { DataPtPipe } from '../../shared/pipes/data-pt.pipe';
import { Icon } from '../../shared/ui/icon/icon';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';

@Component({
  selector: 'app-noticia-detalhe',
  imports: [CtaBand, DataPtPipe, Icon, MediaSlot, PageHero, RouterLink],
  templateUrl: './noticia-detalhe.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiaDetalhe {
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly copy = newsPageContent;
  readonly article = computed(() => {
    const slug = this.params().get('slug');
    return noticias.find((item) => item.slug === slug) ?? null;
  });
  readonly breadcrumbs = [
    { label: this.copy.homeLabel.pt, href: '/' },
    { label: this.copy.title.pt, href: '/noticias' },
  ] as const;
  readonly relatedArticles = computed(() => {
    const current = this.article();
    if (!current) {
      return [];
    }
    const sameCategory = noticias.filter(
      (item) => item.slug !== current.slug && item.categoria.pt === current.categoria.pt,
    );
    const otherCategories = noticias.filter(
      (item) => item.slug !== current.slug && item.categoria.pt !== current.categoria.pt,
    );
    return [...sameCategory, ...otherCategories].slice(0, 2);
  });
  readonly relatedArticleViews = computed(() =>
    this.relatedArticles().map((item) => ({
      ...item,
      image: {
        alt: `${item.titulo.pt} — imagem de capa`,
        expectedFile: `public/images/${item.imagem}`,
      },
    })),
  );
  readonly shareStatus = signal('');
  readonly image = computed(() => {
    const article = this.article();
    return article
      ? {
          alt: `${article.titulo.pt} — imagem de capa`,
          expectedFile: `public/images/${article.imagem}`,
        }
      : null;
  });
  readonly whatsappShareUrl = computed(() => {
    const article = this.article();
    if (!article) {
      return '';
    }
    const url = `${SITE_ORIGIN}${article.href}`;
    return this.whatsapp.createWhatsappUrl(`${article.titulo.pt} ${url}`);
  });
  readonly ctaWhatsappUrl = this.whatsapp.createWhatsappUrl(this.copy.quoteMessage.pt);
  readonly notFoundTitle = this.copy.notFoundTitle.pt;
  readonly notFoundDescription = this.copy.notFoundDescription.pt;
  readonly readLabels = {
    notFound: this.copy.allNewsLabel.pt,
  };
  private readonly seoEffect = effect(() => {
    const article = this.article();
    if (!article) {
      this.seo.setPage(pt.pages.notFound, pt.seo.notFound);
      this.seo.clearJsonLd('article-json-ld');
      return;
    }

    this.seo.setPage(`${article.titulo.pt} | NS2 Innovation`, article.resumo.pt, {
      type: 'article',
      breadcrumbs: [
        { name: this.copy.homeLabel.pt, url: `${SITE_ORIGIN}/` },
        { name: this.copy.title.pt, url: `${SITE_ORIGIN}/noticias` },
        { name: article.titulo.pt, url: `${SITE_ORIGIN}${article.href}` },
      ],
    });
    this.seo.setJsonLd('article-json-ld', this.articleStructuredData(article));
  });
  private readonly cleanup = this.destroyRef.onDestroy(() =>
    this.seo.clearJsonLd('article-json-ld'),
  );

  async copyArticleLink(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const view = this.document.defaultView;
    const clipboard = view?.navigator.clipboard;
    if (!view || !clipboard) {
      this.shareStatus.set(this.copy.copyError.pt);
      return;
    }

    try {
      await clipboard.writeText(view.location.href);
      this.shareStatus.set(this.copy.copySuccess.pt);
    } catch {
      this.shareStatus.set(this.copy.copyError.pt);
    }
  }

  private articleStructuredData(article: Noticia): Readonly<Record<string, unknown>> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.titulo.pt,
      description: article.resumo.pt,
      articleSection: article.categoria.pt,
      datePublished: article.data,
      author: {
        '@type': 'Organization',
        name: 'NS2 Innovation',
      },
      publisher: {
        '@type': 'Organization',
        name: 'NS2 Innovation',
      },
      mainEntityOfPage: `${SITE_ORIGIN}${article.href}`,
    };
  }
}
