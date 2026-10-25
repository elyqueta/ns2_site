import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  effect,
  inject,
  input,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { registerAnimationDirective } from '../../../directives/animation-directive';
import { AnimationService } from '../../../../core/animation.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../../../../shared/ui/icon/icon';

export interface NavDropdownItem {
  readonly href: string;
  readonly label: string;
}

@Component({
  selector: 'app-nav-dropdown',
  standalone: true,
  imports: [Icon, RouterLink, RouterLinkActive],
  templateUrl: './nav-dropdown.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDropdown {
  readonly label = input<string>('');
  readonly items = input<readonly NavDropdownItem[]>([]);
  readonly id = input<string>('');

  readonly open = signal(false);

  private readonly animationService = inject(AnimationService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private panelElement: HTMLElement | null = null;
  private gsapRef: typeof import('gsap').gsap | null = null;
  private documentClickListener: ((event: MouseEvent) => void) | null = null;

  constructor() {
    registerAnimationDirective((element, runtime, mode) => {
      this.panelElement = element.querySelector<HTMLElement>('[data-dropdown-panel]');
      this.gsapRef = runtime.gsap;

      if (mode.reducedMotion) {
        this.gsapRef.set(this.panelElement, { autoAlpha: 0, display: 'none' });
      } else {
        this.gsapRef.set(this.panelElement, { autoAlpha: 0, y: -6, display: 'none' });
      }
    });

    effect(() => {
      const isOpen = this.open();
      if (!this.panelElement || !this.gsapRef) {
        return;
      }

      if (isOpen) {
        this.gsapRef.to(this.panelElement, {
          autoAlpha: 1,
          y: 0,
          duration: 0.18,
          display: 'block',
          overwrite: true,
        });
        this.addDocumentClickListener();
      } else {
        this.gsapRef.to(this.panelElement, {
          autoAlpha: 0,
          y: -6,
          duration: 0.18,
          display: 'none',
          overwrite: true,
        });
        this.removeDocumentClickListener();
      }
    });
  }

  private addDocumentClickListener(): void {
    if (this.documentClickListener || !isPlatformBrowser(this.platformId)) {
      return;
    }

    this.documentClickListener = (event: MouseEvent): void => {
      if (!this.open() || !this.panelElement) {
        return;
      }

      const target = event.target as Node | null;
      if (!this.panelElement.contains(target)) {
        this.close();
        this.removeDocumentClickListener();
      }
    };

    this.document.addEventListener('click', this.documentClickListener);
  }

  private removeDocumentClickListener(): void {
    if (this.documentClickListener && isPlatformBrowser(this.platformId)) {
      this.document.removeEventListener('click', this.documentClickListener);
      this.documentClickListener = null;
    }
  }

  toggle(): void {
    this.open.update((value) => !value);
  }

  close(): void {
    this.open.set(false);
  }

  onArrowDown(event: Event): void {
    event.preventDefault();
    const panel = this.panelElement;
    if (!panel) return;
    const links = Array.from(panel.querySelectorAll<HTMLElement>('a'));
    const current = panel.ownerDocument.activeElement as HTMLElement | null;
    const currentIndex = links.indexOf(current!);
    const nextIndex = (currentIndex + 1) % links.length;
    links[nextIndex]?.focus();
  }

  onArrowUp(event: Event): void {
    event.preventDefault();
    const panel = this.panelElement;
    if (!panel) return;
    const links = Array.from(panel.querySelectorAll<HTMLElement>('a'));
    const current = panel.ownerDocument.activeElement as HTMLElement | null;
    const currentIndex = links.indexOf(current!);
    const nextIndex = (currentIndex - 1 + links.length) % links.length;
    links[nextIndex]?.focus();
  }
}
