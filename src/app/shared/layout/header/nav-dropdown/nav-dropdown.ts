import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
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
  private panelElement: HTMLElement | null = null;
  private gsapRef: typeof import('gsap').gsap | null = null;

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
      } else {
        this.gsapRef.to(this.panelElement, {
          autoAlpha: 0,
          y: -6,
          duration: 0.18,
          display: 'none',
          overwrite: true,
        });
      }
    });
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
