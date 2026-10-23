import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService, Language } from '../../../core/i18n.service';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-language-toggle',
  imports: [Icon],
  templateUrl: './language-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageToggle {
  private readonly i18n = inject(I18nService);
  readonly lang = this.i18n.lang;
  readonly open = signal(false);
  readonly groupLabel = computed(() => this.i18n.t('actions.languageSelection'));
  readonly languageAriaLabel = computed(() =>
    this.lang() === 'pt'
      ? this.i18n.t('actions.languagePortuguese')
      : this.i18n.t('actions.languageEnglish'),
  );

  selectLanguage(language: Language): void {
    this.i18n.setLanguage(language);
    this.open.set(false);
  }

  toggle(): void {
    this.open.update((value) => !value);
  }

  close(): void {
    this.open.set(false);
  }
}
