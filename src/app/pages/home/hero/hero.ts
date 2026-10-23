import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../../core/i18n.service';
import { ScrollService } from '../../../core/scroll.service';
import { homeContent } from '../../../data/home';
import { WhatsappService } from '../../../core/whatsapp.service';
import { SplitTextReveal } from '../../../shared/directives/split-text.directive';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { Button } from '../../../shared/ui/button/button';
import { Icon } from '../../../shared/ui/icon/icon';
import { HomeHeroSlider } from './hero-slider';

@Component({
  selector: 'app-home-hero',
  imports: [Button, Icon, LocalizedPipe, SplitTextReveal, HomeHeroSlider],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHero {
  readonly copy = homeContent.hero;
  readonly languageKey = computed(() => [this.i18n.lang()] as const);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(this.copy.whatsappMessage)),
  );
  private readonly scroll = inject(ScrollService);

  scrollToAbout(event: MouseEvent): void {
    event.preventDefault();
    this.scroll.scrollTo('#home-about', {
      duration: 1.8,
      easing: (progress) => progress * progress * (3 - 2 * progress),
      offset: -80,
    });
  }
}
