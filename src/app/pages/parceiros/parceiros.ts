import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { homeContent } from '../../data/home';
import { partnersPageContent, parceiros } from '../../data/parceiros';
import { pt } from '../../i18n/pt';
import { Marquee } from '../../shared/ui/marquee/marquee';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';
import { ProductCategoryCard } from '../../shared/ui/product-category-card/product-category-card';

@Component({
  selector: 'app-parceiros',
  imports: [CtaBand, LocalizedPipe, Marquee, PageHero, ProductCategoryCard, SectionHeading],
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
      title: { pt: partner.nome, en: partner.nome },
      description: partner.resumo,
      imageSrc: partner.logo ?? '',
      imageAlt: { pt: partner.nome, en: partner.nome },
      imageSrcset: partner.logo ? `${partner.logo} 1200w` : '',
      imageSizes: '(max-width: 768px) 100vw, 25vw',
      href: partner.href,
      actionLabel: this.copy.contactPageLabel,
    })),
  );
  readonly brands = parceiros.map((partner) => ({
    type: 'image' as const,
    src: partner.logo,
    alt: partner.nome,
  }));
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
