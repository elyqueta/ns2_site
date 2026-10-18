import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService } from '../../../core/i18n.service';
import { WhatsappService } from '../../../core/whatsapp.service';
import { primaryNavigation } from '../../../data/navegacao';
import { HeaderMotion } from '../../directives/header-motion.directive';
import { Button } from '../../ui/button/button';
import { Icon } from '../../ui/icon/icon';
import { ThemeToggle } from '../../ui/theme-toggle/theme-toggle';
import { MobileMenu } from '../mobile-menu/mobile-menu';

@Component({
  selector: 'app-header',
  imports: [Button, HeaderMotion, Icon, MobileMenu, RouterLink, RouterLinkActive, ThemeToggle],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  readonly menuOpen = signal(false);
  readonly menuTrigger = viewChild<ElementRef<HTMLButtonElement>>('menuTrigger');
  readonly navigation = primaryNavigation.map((item, index) => ({
    href: item.href,
    label: this.i18n.t(item.label),
    index: String(index + 1).padStart(2, '0'),
  }));
  readonly whatsappUrl = this.whatsapp.createWhatsappUrl(
    'Olá! Vim pelo site da NS2 Innovation e gostaria de mais informações.',
  );
  readonly menuLabel = computed(() =>
    this.i18n.t(this.menuOpen() ? 'actions.closeMenu' : 'actions.openMenu'),
  );
  readonly quoteLabel = this.i18n.t('actions.requestQuote');
  readonly navigationLabel = this.i18n.t('actions.navigation');
  readonly logoLabel = `NS2 Innovation — ${this.i18n.t('pages.home')}`;

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.menuTrigger()?.nativeElement.focus();
  }
}
