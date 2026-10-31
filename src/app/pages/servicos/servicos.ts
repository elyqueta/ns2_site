import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { homeContent } from '../../data/home';
import { servicesPageContent, servicos } from '../../data/servicos';
import { HomeCarousel } from '../../shared/directives/home-carousel.directive';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { ServicoVidroCard } from '../../shared/ui/servico-vidro-card/servico-vidro-card';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

const paleta: readonly string[] = [
  '63 111 181',
  '84 94 214',
  '36 140 156',
  '120 82 200',
  '46 125 168',
];

@Component({
  selector: 'app-servicos',
  imports: [CtaBand, HomeCarousel, Icon, LocalizedPipe, PageHero, SectionHeading, ServicoVidroCard],
  templateUrl: './servicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Servicos {
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  readonly copy = servicesPageContent;
  readonly services = servicos.map((service, index) => {
    const base = `/images/servicos/${service.imagem.ficheiroEsperado.pt!.split('/').pop()!.replace('.webp', '')}`;
    const card = {
      tintRgb: paleta[index % paleta.length],
      titulo: service.titulo,
      resumo: service.resumo,
      icone: service.icone,
      href: service.href,
      imagemSrc: `${base}.webp`,
      imagemAlt: service.imagem.alt,
      imagemSrcset: `${base}-480.webp 480w, ${base}-800.webp 800w, ${base}.webp 1200w`,
      imagemSizes: '(max-width: 1024px) 100vw, 25vw',
      ctaLabel: servicesPageContent.detailLink,
    };
    return {
      ...service,
      imagemSrc: `${base}.webp`,
      tintRgb: paleta[index % paleta.length],
      ctaLabel: servicesPageContent.detailLink,
      card,
    };
  });
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
  ]);
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(homeContent.cta.whatsappMessage)),
  );

  readonly activeIndex = signal(0);

  preventPointerFocus(event: MouseEvent): void {
    event.preventDefault();
  }

  activateCard(index: number): void {
    this.activeIndex.set(index);
  }

  previous(event?: Event): void {
    event?.preventDefault();
    this.activeIndex.update((index) => Math.max(index - 1, 0));
  }

  next(event?: Event): void {
    event?.preventDefault();
    this.activeIndex.update((index) => Math.min(index + 1, this.services.length - 1));
  }

  private readonly seoEffect = effect(() =>
    this.seo.setPage(this.i18n.t('pages.services'), this.i18n.t('seo.services')),
  );
}
