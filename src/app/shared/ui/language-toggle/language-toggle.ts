import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService, Language } from '../../../core/i18n.service';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageToggle {
  private readonly i18n = inject(I18nService);
  readonly lang = this.i18n.lang;
  readonly groupLabel = computed(() => this.i18n.t('actions.languageSelection'));
  readonly portugueseLabel = computed(() => this.i18n.t('actions.languagePortuguese'));
  readonly englishLabel = computed(() => this.i18n.t('actions.languageEnglish'));

  selectLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }
}
