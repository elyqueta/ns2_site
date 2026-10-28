import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { homeContent } from '../../data/home';
import { servicesPageContent, servicos } from '../../data/servicos';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
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
  imports: [CtaBand, LocalizedPipe, PageHero, SectionHeading, ServicoVidroCard],
  templateUrl: './servicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Servicos {
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  readonly copy = servicesPageContent;
  readonly services = servicos.map((service, index) => ({
    ...service,
    imagemSrc: `/images/servicos/${service.imagem.ficheiroEsperado.pt.split('/').pop()}`,
    tintRgb: paleta[index % paleta.length],
    ctaLabel: servicesPageContent.detailLink,
    card: {
      tintRgb: paleta[index % paleta.length],
      titulo: service.titulo,
      resumo: service.resumo,
      icone: service.icone,
      href: service.href,
      imagemSrc: `/images/servicos/${service.imagem.ficheiroEsperado.pt.split('/').pop()}`,
      imagemAlt: service.imagem.alt,
      ctaLabel: servicesPageContent.detailLink,
    },
  }));
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
  ]);
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(homeContent.cta.whatsappMessage)),
  );

  private readonly seoEffect = effect(() =>
    this.seo.setPage(this.i18n.t('pages.services'), this.i18n.t('seo.services')),
  );
}
