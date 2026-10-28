import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { aboutPageContent } from '../../data/sobre';
import { pt } from '../../i18n/pt';
import { Reveal } from '../../shared/directives/reveal.directive';
import { RevealChildren } from '../../shared/directives/reveal-children.directive';
import { ProcessProgress } from '../../shared/directives/process-progress.directive';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-sobre',
  imports: [
    CtaBand,
    Icon,
    LocalizedPipe,
    MediaSlot,
    PageHero,
    ProcessProgress,
    Reveal,
    RevealChildren,
    RouterLink,
    SectionHeading,
  ],
  templateUrl: './sobre.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sobre {
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  readonly copy = aboutPageContent;
  readonly differentiators = aboutPageContent.differentiators.items.map((item, index) => ({
    ...item,
    imageSrc: [
      '/images/servicos/infraestrutura-redes-servidores.webp',
      '/images/servicos/suporte-remoto.webp',
      '/images/servicos/suporte-on-site.webp',
      '/images/produtos/notebooks.webp',
      '/images/servicos/websites-sistemas-web.webp',
    ][index],
    tintRgb: ['63 111 181', '84 94 214', '36 140 156', '120 82 200', '46 125 168'][index],
  }));
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(this.copy.cta.whatsappMessage)),
  );
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.hero.homeLabel), href: '/' },
  ]);

  private readonly seoEffect = effect(() =>
    this.seo.setPage(this.i18n.t('pages.about'), this.i18n.t('seo.about')),
  );
}
