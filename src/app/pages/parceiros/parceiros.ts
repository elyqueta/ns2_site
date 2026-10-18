import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { homeContent } from '../../data/home';
import { partnersPageContent, parceiros } from '../../data/parceiros';
import { pt } from '../../i18n/pt';
import { PartnerCard } from '../../shared/ui/partner-card/partner-card';
import { Marquee } from '../../shared/ui/marquee/marquee';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';

@Component({
  selector: 'app-parceiros',
  imports: [CtaBand, Marquee, PageHero, PartnerCard, SectionHeading],
  templateUrl: './parceiros.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Parceiros {
  private readonly seo = inject(SeoService);

  readonly copy = partnersPageContent;
  readonly partners = parceiros.map((partner) => ({
    type: 'partner' as const,
    title: partner.nome,
    description: partner.resumo.pt,
    label: partner.categoria.pt,
    href: partner.href,
  }));
  readonly brands = parceiros.map((partner) => partner.nome);
  readonly breadcrumbs = [{ label: this.copy.homeLabel.pt, href: '/' }] as const;
  readonly whatsappUrl = inject(WhatsappService).createWhatsappUrl(
    homeContent.cta.whatsappMessage.pt,
  );

  constructor() {
    this.seo.setPage(pt.pages.partners, pt.seo.partners);
  }
}
