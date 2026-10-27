import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { pt } from '../../i18n/pt';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { homeContent } from '../../data/home';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { HomeAboutPreview } from './about-preview/about-preview';
import { HomeBrandStrip } from './brand-strip/brand-strip';
import { HomeHero } from './hero/hero';
import { HomeNewsPreview } from './news-preview/news-preview';
import { HomeProcessPreview } from './process-preview/process-preview';
import { HomeProductsPreview } from './products-preview/products-preview';
import { HomeServicesPreview } from './services-preview/services-preview';
import { HomeValuesPreview } from './values-preview/values-preview';
import { HomeWebPreview } from './web-preview/web-preview';
import { HomeProjectsPreview } from './projects-preview/projects-preview';
import { HomeMetricsPreview } from './metrics-preview/metrics-preview';
import { HomeTestimonialsPreview } from './testimonials-preview/testimonials-preview';

@Component({
  selector: 'app-home',
  imports: [
    CtaBand,
    HomeAboutPreview,
    HomeBrandStrip,
    HomeHero,
    HomeNewsPreview,
    HomeProcessPreview,
    HomeProductsPreview,
    HomeServicesPreview,
    HomeValuesPreview,
    HomeWebPreview,
    HomeProjectsPreview,
    LocalizedPipe,
    HomeMetricsPreview,
    HomeTestimonialsPreview,
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  readonly cta = homeContent.cta;
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(this.cta.whatsappMessage)),
  );
  private readonly seoEffect = effect(() =>
    this.seo.setPage(this.i18n.t('seo.homeTitle'), this.i18n.t('seo.home')),
  );
}
