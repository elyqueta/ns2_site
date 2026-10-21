import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RESPONSE_INIT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { notFoundContent } from '../../data/legais';
import { homeContent } from '../../data/home';
import { pt } from '../../i18n/pt';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-not-found',
  imports: [Icon, LocalizedPipe, PageHero, RouterLink],
  templateUrl: './not-found.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  private readonly responseInit = inject(RESPONSE_INIT, { optional: true });
  readonly copy = notFoundContent;
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(homeContent.cta.whatsappMessage)),
  );
  readonly pageTitle = computed(() => this.i18n.t('pages.notFound'));
  readonly pageDescription = computed(() => this.i18n.text(this.copy.lead));
  private readonly seoEffect = effect(() => {
    this.seo.setPage(this.pageTitle(), this.pageDescription(), { robots: 'noindex, nofollow' });
  });

  constructor() {
    if (this.responseInit) {
      this.responseInit.status = 404;
    }
  }
}
