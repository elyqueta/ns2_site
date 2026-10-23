import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AnimationService } from '../../core/animation.service';
import { ScrollService } from '../../core/scroll.service';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { productsPageContent, produtos } from '../../data/produtos';
import { HeaderOffset } from '../../shared/directives/header-offset.directive';
import { RevealChildren } from '../../shared/directives/reveal-children.directive';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { Marquee } from '../../shared/ui/marquee/marquee';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-produtos',
  imports: [
    CtaBand,
    HeaderOffset,
    Icon,
    LocalizedPipe,
    Marquee,
    MediaSlot,
    PageHero,
    RevealChildren,
  ],
  templateUrl: './produtos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Produtos {
  private readonly animation = inject(AnimationService);
  private readonly document = inject(DOCUMENT);
  private readonly location = inject(Location);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly scroll = inject(ScrollService);
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);

  readonly catalog = viewChild<ElementRef<HTMLElement>>('catalog');
  readonly copy = productsPageContent;
  readonly categories = computed(() =>
    produtos.map((category) => ({
      ...category,
      ordemLabel: category.ordem.toString().padStart(2, '0'),
      whatsappUrl: this.whatsapp.createWhatsappUrl(this.i18n.text(category.mensagemWhatsApp)),
      imagemSrc: `/images/produtos/${category.imagem.ficheiroEsperado.pt.split('/').pop()}`,
      destaques: category.destaques.map((item) => ({
        ...item,
        whatsappUrl: this.whatsapp.createWhatsappUrl(this.i18n.text(item.mensagemWhatsApp)),
      })),
    })),
  );
  readonly activeCategory = signal(produtos[0].slug);
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
  ]);
  readonly brands = productsPageContent.brands;
  readonly generalWhatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(this.copy.whatsappMessage)),
  );
  private readonly scrollTriggers: import('gsap/ScrollTrigger').ScrollTrigger[] = [];
  private stopScrollSpy: (() => void) | null = null;
  private fragmentScrollFrame: number | undefined;
  private fragmentSubscription: Subscription | null = null;

  private readonly renderCallback = afterNextRender(() => {
    const catalog = this.catalog()?.nativeElement;
    const view = this.document.defaultView;
    if (!catalog || !view) {
      return;
    }

    this.scheduleFragmentScroll(view.location.hash.slice(1));
    this.fragmentSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const fragment = this.router.parseUrl(event.urlAfterRedirects).fragment;
        if (fragment) {
          this.scheduleFragmentScroll(fragment);
        }
      });

    this.stopScrollSpy = this.animation.whenReady((runtime) => {
      for (const category of this.categories()) {
        const section = catalog.querySelector<HTMLElement>(`#${category.slug}`);
        if (!section) {
          continue;
        }

        this.scrollTriggers.push(
          runtime.ScrollTrigger.create({
            trigger: section,
            start: 'top 35%',
            end: 'bottom 35%',
            onEnter: () => this.activeCategory.set(category.slug),
            onEnterBack: () => this.activeCategory.set(category.slug),
          }),
        );
      }
      this.animation.refresh();
    });
  });

  private readonly destroyCallback = this.destroyRef.onDestroy(() => {
    this.stopScrollSpy?.();
    this.fragmentSubscription?.unsubscribe();
    if (this.fragmentScrollFrame !== undefined) {
      this.document.defaultView?.cancelAnimationFrame(this.fragmentScrollFrame);
    }
    for (const trigger of this.scrollTriggers) {
      trigger.kill();
    }
  });

  private readonly seoEffect = effect(() =>
    this.seo.setPage(this.i18n.t('pages.products'), this.i18n.t('seo.products')),
  );

  scrollToCategory(event: MouseEvent, slug: string): void {
    event.preventDefault();
    this.activeCategory.set(slug);
    this.location.go(`/produtos#${slug}`);
    this.scroll.scrollTo(`#${slug}`, { offset: -152, duration: 1 });
  }

  private scheduleFragmentScroll(fragment: string): void {
    if (!this.categories().some((category) => category.slug === fragment)) {
      return;
    }

    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    this.activeCategory.set(fragment);
    if (this.fragmentScrollFrame !== undefined) {
      view.cancelAnimationFrame(this.fragmentScrollFrame);
    }
    this.fragmentScrollFrame = view.requestAnimationFrame(() => {
      this.fragmentScrollFrame = undefined;
      this.scroll.scrollTo(`#${fragment}`, { offset: -152, duration: 1 });
    });
  }
}
