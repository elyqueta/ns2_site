import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeContent } from '../../../data/home';
import { servicos } from '../../../data/servicos';
import { HomeServicesPin } from '../../../shared/directives/home-services-pin.directive';
import { HomeCarousel } from '../../../shared/directives/home-carousel.directive';
import { Icon } from '../../../shared/ui/icon/icon';
import { ServicoVidroCard } from '../../../shared/ui/servico-vidro-card/servico-vidro-card';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { LocalizedText } from '../../../i18n/types';

const paleta: readonly string[] = [
  '63 111 181',
  '84 94 214',
  '36 140 156',
  '120 82 200',
  '46 125 168',
];

const titulosCurtos: readonly LocalizedText[] = [
  { pt: 'Redes e servidores', en: 'Network and servers' },
  { pt: 'Suporte remoto', en: 'Remote support' },
  { pt: 'Suporte on site', en: 'On-site support' },
  { pt: 'Manutenção de equipamentos', en: 'Equipment maintenance' },
  { pt: 'Contratos de TI', en: 'IT support contracts' },
  { pt: 'Consultoria', en: 'Consulting' },
  { pt: 'Sistemas e software', en: 'Systems and software' },
  { pt: 'Locação de equipamentos', en: 'IT equipment rental' },
  { pt: 'Websites e sistemas web', en: 'Websites and web systems' },
];

@Component({
  selector: 'app-home-services-preview',
  imports: [
    HomeServicesPin,
    HomeCarousel,
    ServicoVidroCard,
    Icon,
    LocalizedPipe,
    RouterLink,
    SectionHeading,
  ],
  templateUrl: './services-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeServicesPreview {
  readonly copy = homeContent.services;
  readonly activeIndex = signal(0);
  readonly ctaLabel = homeContent.services.cardLinkLabel;
  readonly servicosVidro = computed(() => {
    return servicos.map((service, index) => ({
      tintRgb: paleta[index % paleta.length],
      titulo: titulosCurtos[index] ?? service.titulo,
      resumo: service.resumo,
      icone: service.icone,
      href: service.href,
      imagemSrc: service.imagem.ficheiroEsperado.pt.replace('public/', '/'),
      imagemAlt: service.imagem.alt,
      ctaLabel: homeContent.services.cardLinkLabel,
      badge: false,
    }));
  });

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
    this.activeIndex.update((index) => Math.min(index + 1, this.servicosVidro().length - 1));
  }
}
