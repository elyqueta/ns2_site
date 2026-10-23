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
import { I18nService } from '../../core/i18n.service';
import { SITE_ORIGIN } from '../../core/site-origin';
import { WhatsappService } from '../../core/whatsapp.service';
import { Noticia, newsPageContent, noticias } from '../../data/noticias';
import { pt } from '../../i18n/pt';
import { DataPtPipe } from '../../shared/pipes/data-pt.pipe';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';
import { Icon } from '../../shared/ui/icon/icon';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';

@Component({
  selector: 'app-noticia-detalhe',
  imports: [CtaBand, DataPtPipe, Icon, LocalizedPipe, MediaSlot, PageHero, RouterLink],
  templateUrl: './noticia-detalhe.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiaDetalhe {
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
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
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
    { label: this.i18n.text(this.copy.title), href: '/noticias' },
  ]);
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
        alt:
          this.i18n.lang() === 'en'
            ? `${this.i18n.text(item.titulo)} — cover image`
            : `${this.i18n.text(item.titulo)} — imagem de capa`,
        expectedFile: `public/images/${item.imagem}`,
      },
    })),
  );
  readonly shareStatus = signal('');
  readonly image = computed(() => {
    const article = this.article();
    return article
      ? {
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
    return this.whatsapp.createWhatsappUrl(`${this.i18n.text(article.titulo)} ${url}`);
  });
  readonly ctaWhatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(this.copy.quoteMessage)),
  );
  readonly notFoundTitle = computed(() => this.i18n.text(this.copy.notFoundTitle));
  readonly notFoundDescription = computed(() => this.i18n.text(this.copy.notFoundDescription));
  readonly readLabels = computed(() => ({ notFound: this.i18n.text(this.copy.allNewsLabel) }));
  private readonly seoEffect = effect(() => {
    const article = this.article();
    if (!article) {
      this.seo.setPage(this.i18n.t('pages.notFound'), this.i18n.t('seo.notFound'));
      this.seo.clearJsonLd('article-json-ld');
      return;
    }

    this.seo.setPage(
      `${this.i18n.text(article.titulo)} | NS2 Innovation`,
      this.i18n.text(article.resumo),
      {
        type: 'article',
        breadcrumbs: [
          { name: this.i18n.text(this.copy.homeLabel), url: `${SITE_ORIGIN}/` },
          { name: this.i18n.text(this.copy.title), url: `${SITE_ORIGIN}/noticias` },
          { name: this.i18n.text(article.titulo), url: `${SITE_ORIGIN}${article.href}` },
        ],
      },
    );
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
      this.shareStatus.set(this.i18n.text(this.copy.copyError));
      return;
    }

    try {
      await clipboard.writeText(view.location.href);
      this.shareStatus.set(this.i18n.text(this.copy.copySuccess));
    } catch {
      this.shareStatus.set(this.i18n.text(this.copy.copyError));
    }
  }

  private articleStructuredData(article: Noticia): Readonly<Record<string, unknown>> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.i18n.text(article.titulo),
      description: this.i18n.text(article.resumo),
      articleSection: this.i18n.text(article.categoria),
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
