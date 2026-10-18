import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MobileMenuMotion } from '../../directives/mobile-menu-motion.directive';
import { I18nService } from '../../../core/i18n.service';
import { ScrollService } from '../../../core/scroll.service';
import { Icon } from '../../ui/icon/icon';
import { ThemeToggle } from '../../ui/theme-toggle/theme-toggle';

interface MobileNavigationItem {
  readonly href: string;
  readonly label: string;
  readonly index: string;
}

@Component({
  selector: 'app-mobile-menu',
  imports: [Icon, MobileMenuMotion, RouterLink, RouterLinkActive, ThemeToggle],
  templateUrl: './mobile-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenu {
  private readonly scroll = inject(ScrollService);
  private readonly i18n = inject(I18nService);
  private readonly destroyRef = inject(DestroyRef);
  readonly open = input(false);
  readonly items = input.required<readonly MobileNavigationItem[]>();
  readonly close = output<void>();
  readonly closed = output<void>();
  readonly panel = viewChild<ElementRef<HTMLElement>>('panel');
  readonly browserReady = signal(false);
  readonly rendered = signal(false);
  readonly menuLabel = this.i18n.t('actions.mobileNavigation');
  readonly closeLabel = this.i18n.t('actions.closeMenu');

  private readonly renderCallback = afterNextRender(() => this.browserReady.set(true));
  private readonly renderEffect = effect(() => {
    if (!this.open()) {
      return;
    }

    this.rendered.set(true);
    queueMicrotask(() => this.panel()?.nativeElement.querySelector<HTMLElement>('a')?.focus());
  });
  private readonly scrollEffect = effect(() => {
    if (!this.browserReady()) {
      return;
    }

    if (this.rendered()) {
      this.scroll.stop();
    } else {
      this.scroll.start();
    }
  });
  private readonly destroyCallback = this.destroyRef.onDestroy(() => this.scroll.start());

  finishClosing(): void {
    if (this.open()) {
      return;
    }

    this.rendered.set(false);
    this.closed.emit();
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close.emit();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const panel = this.panel()?.nativeElement;
    const focusable = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      : [];
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && panel?.ownerDocument.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && panel?.ownerDocument.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
