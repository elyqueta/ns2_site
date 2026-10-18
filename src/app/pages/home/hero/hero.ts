import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { homeContent } from '../../../data/home';
import { WhatsappService } from '../../../core/whatsapp.service';
import { SplitTextReveal } from '../../../shared/directives/split-text.directive';
import { Button } from '../../../shared/ui/button/button';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'app-home-hero',
  imports: [Button, Icon, SplitTextReveal],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHero {
  readonly copy = homeContent.hero;
  readonly whatsappUrl = inject(WhatsappService).createWhatsappUrl(this.copy.whatsappMessage.pt);
}
