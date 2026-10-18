import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { homeContent } from '../../data/home';
import { servicesPageContent, servicos } from '../../data/servicos';
import { pt } from '../../i18n/pt';
import { RevealChildren } from '../../shared/directives/reveal-children.directive';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-servicos',
  imports: [CtaBand, Icon, PageHero, RevealChildren, RouterLink, SectionHeading],
  templateUrl: './servicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Servicos {
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);
  readonly copy = servicesPageContent;
  readonly services = servicos.map((service) => ({
    ...service,
    ordemLabel: service.ordem.toString().padStart(2, '0'),
  }));
  readonly breadcrumbs = [{ label: this.copy.homeLabel.pt, href: '/' }] as const;
  readonly whatsappUrl = this.whatsapp.createWhatsappUrl(homeContent.cta.whatsappMessage.pt);

  constructor() {
    this.seo.setPage(pt.pages.services, pt.seo.services);
  }
}
