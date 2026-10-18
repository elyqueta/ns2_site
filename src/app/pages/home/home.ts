import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { pt } from '../../i18n/pt';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { homeContent } from '../../data/home';
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
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);
  readonly cta = homeContent.cta;
  readonly whatsappUrl = this.whatsapp.createWhatsappUrl(this.cta.whatsappMessage.pt);

  constructor() {
    this.seo.setPage(pt.seo.homeTitle, pt.seo.home);
  }
}
