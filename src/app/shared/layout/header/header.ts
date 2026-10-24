import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
  afterNextRender,
  DestroyRef,
} from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { I18nService } from '../../../core/i18n.service';
import { headerNavigation } from '../../../data/navegacao';
import { HeaderMotion } from '../../directives/header-motion.directive';
import { Icon } from '../../ui/icon/icon';
import { LanguageToggle } from '../../ui/language-toggle/language-toggle';
import { NavDropdown } from './nav-dropdown/nav-dropdown';
import { ThemeToggle } from '../../ui/theme-toggle/theme-toggle';
import { MobileMenu } from '../mobile-menu/mobile-menu';

export interface HeaderNavItemRendered {
  readonly kind: 'link' | 'group';
  readonly href?: string;
  readonly label: string;
  readonly id?: string;
  readonly children?: readonly HeaderNavItemRendered[];
}

@Component({
  selector: 'app-header',
  imports: [
    HeaderMotion,
    Icon,
    LanguageToggle,
    NavDropdown,
    MobileMenu,
    RouterLink,
    RouterLinkActive,
    ThemeToggle,
  ],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly menuOpen = signal(false);
  readonly menuTrigger = viewChild<ElementRef<HTMLButtonElement>>('menuTrigger');
  readonly scrollY = signal(0);
  readonly navigation = computed(() => {
    let index = 0;
    return headerNavigation.map((item) => {
      if (item.kind === 'link') {
        index += 1;
        return {
          kind: 'link' as const,
          href: item.href,
          label: this.i18n.t(item.label),
          index: String(index).padStart(2, '0'),
        };
      }
      const children = item.children.map((child) => {
        index += 1;
        return {
          kind: 'link' as const,
          href: child.href,
          label: this.i18n.t(child.label),
          index: String(index).padStart(2, '0'),
        };
      });
      return {
        kind: 'group' as const,
        id: item.id,
        label: this.i18n.t(item.label),
        children,
      };
    });
  });
  readonly isHome = computed(() => this.router.url === '/');
  readonly headerDark = computed(() => false);
  readonly menuLabel = computed(() =>
    this.i18n.t(this.menuOpen() ? 'actions.closeMenu' : 'actions.openMenu'),
  );
  readonly navigationLabel = computed(() => this.i18n.t('actions.navigation'));
  readonly logoLabel = computed(() => `NS2 Innovation — ${this.i18n.t('pages.home')}`);

  constructor() {
    afterNextRender(() => {
      const view = window;
      const onScroll = (): void => {
        this.scrollY.set(view.scrollY);
      };
      onScroll();
      view.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => {
        view.removeEventListener('scroll', onScroll);
      });
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  focusMenuTrigger(): void {
    this.menuTrigger()?.nativeElement.focus();
  }
}
