import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../../core/i18n.service';
import { ThemeService } from '../../../core/theme.service';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-theme-toggle',
  imports: [Icon],
  templateUrl: './theme-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggle {
  private readonly themeService = inject(ThemeService);
  private readonly i18n = inject(I18nService);

  readonly theme = this.themeService.theme;
  readonly ariaLabel = computed(() =>
    this.i18n.t(this.theme() === 'dark' ? 'actions.changeToLight' : 'actions.changeToDark'),
  );

  toggle(): void {
    this.themeService.toggle();
  }
}
