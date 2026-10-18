import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../../core/scroll.service';
import { I18nService } from '../../../core/i18n.service';
import { contactDetails, footerServices } from '../../../data/contacto';
import { legalNavigation, primaryNavigation } from '../../../data/navegacao';
import { Icon } from '../../ui/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon, RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly i18n = inject(I18nService);
  private readonly scroll = inject(ScrollService);
  readonly copy = {
    description: this.i18n.t('actions.footerDescription'),
    navigation: this.i18n.t('actions.footerNavigation'),
    services: this.i18n.t('actions.footerServices'),
    contact: this.i18n.t('actions.footerContact'),
    address: this.i18n.t('actions.address'),
    phone: this.i18n.t('actions.phone'),
    email: this.i18n.t('actions.email'),
    map: this.i18n.t('actions.openMap'),
    legal: this.i18n.t('actions.legalInformation'),
    backToTop: this.i18n.t('actions.backToTop'),
  };
  readonly navigation = primaryNavigation.map((item) => ({
    href: item.href,
    label: this.i18n.t(item.label),
  }));
  readonly legal = legalNavigation.map((item) => ({
    href: item.href,
    label: this.i18n.t(item.label),
  }));
  readonly services = footerServices;
  readonly contact = contactDetails;

  backToTop(): void {
    this.scroll.scrollTo(0, { duration: 0.7 });
  }
}
