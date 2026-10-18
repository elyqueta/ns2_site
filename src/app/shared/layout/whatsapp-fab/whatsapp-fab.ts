import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../../core/i18n.service';
import { WhatsappService } from '../../../core/whatsapp.service';
import { Icon } from '../../ui/icon/icon';

@Component({
  selector: 'app-whatsapp-fab',
  imports: [Icon],
  templateUrl: './whatsapp-fab.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappFab {
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  readonly label = this.i18n.t('actions.whatsappContact');
  readonly url = this.whatsapp.createWhatsappUrl(
    'Olá! Vim pelo site da NS2 Innovation e gostaria de mais informações.',
  );
}
