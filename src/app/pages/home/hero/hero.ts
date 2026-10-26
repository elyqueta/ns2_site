import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../../core/i18n.service';
import { homeContent } from '../../../data/home';
import { WhatsappService } from '../../../core/whatsapp.service';
import { SplitTextReveal } from '../../../shared/directives/split-text.directive';
import { HeroVideoDirective } from '../../../shared/directives/hero-video.directive';
import { TypeWriterDirective } from '../../../shared/directives/typewriter.directive';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { Button } from '../../../shared/ui/button/button';
import { LocalizedWords } from '../../../i18n/types';

@Component({
  selector: 'app-home-hero',
  imports: [Button, LocalizedPipe, SplitTextReveal, HeroVideoDirective, TypeWriterDirective],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHero {
  readonly copy: typeof homeContent.hero = homeContent.hero;
  readonly heroWords: LocalizedWords = homeContent.hero.titleHighlightWords;
  readonly i18n = inject(I18nService);
  readonly languageKey = computed(() => [this.i18n.lang()] as const);
  readonly heroWebLabel = computed(() => this.i18n.t('actions.heroWeb'));
  readonly heroItLabel = computed(() => this.i18n.t('actions.heroIt'));
  readonly firstHighlight = computed(() => this.i18n.words(this.copy.titleHighlightWords)[0] ?? '');
  private readonly whatsapp = inject(WhatsappService);
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(this.copy.whatsappMessage)),
  );
}
