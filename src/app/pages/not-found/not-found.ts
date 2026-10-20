import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RESPONSE_INIT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { notFoundContent } from '../../data/legais';
import { homeContent } from '../../data/home';
import { pt } from '../../i18n/pt';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';

@Component({
  selector: 'app-not-found',
  imports: [Icon, PageHero, RouterLink],
  templateUrl: './not-found.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);
  private readonly responseInit = inject(RESPONSE_INIT, { optional: true });
  readonly copy = notFoundContent;
  readonly whatsappUrl = this.whatsapp.createWhatsappUrl(homeContent.cta.whatsappMessage.pt);
  readonly pageTitle = pt.pages.notFound;
  readonly pageDescription = pt.seo.notFound;

  constructor() {
    this.seo.setPage(this.pageTitle, this.pageDescription, { robots: 'noindex, nofollow' });
    if (this.responseInit) {
      this.responseInit.status = 404;
    }
  }
}
