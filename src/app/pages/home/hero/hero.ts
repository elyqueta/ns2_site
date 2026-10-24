import { ChangeDetectionStrategy, Component, computed, inject, viewChild } from '@angular/core';
import { I18nService } from '../../../core/i18n.service';
import { homeContent } from '../../../data/home';
import { WhatsappService } from '../../../core/whatsapp.service';
import { SplitTextReveal } from '../../../shared/directives/split-text.directive';
import { HeroVideoDirective } from '../../../shared/directives/hero-video.directive';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { Button } from '../../../shared/ui/button/button';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'app-home-hero',
  imports: [Button, LocalizedPipe, SplitTextReveal, HeroVideoDirective, Icon],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHero {
  readonly copy = homeContent.hero;
  readonly languageKey = computed(() => [this.i18n.lang()] as const);
  readonly heroWebLabel = computed(() => this.i18n.t('actions.heroWeb'));
  readonly heroItLabel = computed(() => this.i18n.t('actions.heroIt'));
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(this.copy.whatsappMessage)),
  );

  readonly videoDirective = viewChild(HeroVideoDirective);
  readonly videoPlaying = computed(() => this.videoDirective()?.playing() ?? false);
  readonly videoActive = computed(() => this.videoDirective()?.active() ?? false);

  readonly videoButtonLabel = computed(() =>
    this.videoPlaying() ? this.i18n.t('actions.pauseVideo') : this.i18n.t('actions.playVideo'),
  );

  videoToggle(): void {
    this.videoDirective()?.toggle();
  }
}
