import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { homeContent } from '../../data/home';
import { servicesPageContent, servicos } from '../../data/servicos';
import { pt } from '../../i18n/pt';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-servicos',
  imports: [CtaBand, Icon, LocalizedPipe, MediaSlot, PageHero, RouterLink, SectionHeading],
  templateUrl: './servicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Servicos {
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  readonly copy = servicesPageContent;
  readonly services = servicos.map((service) => ({
    ...service,
    imagemSrc: `/images/servicos/${service.imagem.ficheiroEsperado.pt.split('/').pop()}`,
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
