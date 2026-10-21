import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { homeContent } from '../../data/home';
import { partnersPageContent, parceiros } from '../../data/parceiros';
import { pt } from '../../i18n/pt';
import { PartnerCard } from '../../shared/ui/partner-card/partner-card';
import { Marquee } from '../../shared/ui/marquee/marquee';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-parceiros',
  imports: [CtaBand, LocalizedPipe, Marquee, PageHero, PartnerCard, SectionHeading],
  templateUrl: './parceiros.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Parceiros {
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);

  readonly copy = partnersPageContent;
  readonly partners = computed(() =>
    parceiros.map((partner) => ({
      type: 'partner' as const,
      title: partner.nome,
      description: this.i18n.text(partner.resumo),
      label: this.i18n.text(partner.categoria),
      href: partner.href,
    })),
  );
  readonly brands = parceiros.map((partner) => partner.nome);
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
  ]);
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(homeContent.cta.whatsappMessage)),
  );

  private readonly seoEffect = effect(() =>
    this.seo.setPage(this.i18n.t('pages.partners'), this.i18n.t('seo.partners')),
  );
}
