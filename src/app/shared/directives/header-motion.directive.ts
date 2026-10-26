import { Directive } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appHeaderMotion]',
  standalone: true,
})
export class HeaderMotion {
  private static readonly SURFACE_CLASSES = ['bg-bg/85', 'backdrop-blur-xl'];

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const view = element.ownerDocument.defaultView;
    if (!view) {
      return;
    }

    const root = element.ownerDocument.documentElement;
    const surface = element.querySelector<HTMLElement>('[data-header-surface]');
    const moveY = runtime.gsap.quickTo(element, 'yPercent', {
      duration: 0.32,
      ease: 'power3.out',
    });
    let previousY = view.scrollY;
    let lastDirectionChange = 0;
    const setCategoryNavOffset = (offset: '0px' | '5rem'): void => {
      root.style.setProperty('--header-offset', offset);
    };
    const applySurface = (added: boolean): void => {
      if (!surface) {
        return;
      }
      for (const cls of HeaderMotion.SURFACE_CLASSES) {
        if (added) {
          surface.classList.add(cls);
        } else {
          surface.classList.remove(cls);
        }
      }
    };
    const moveTo = (yPercent: number): void => {
      if (mode.reducedMotion) {
        runtime.gsap.set(element, { yPercent });
      } else {
        moveY(yPercent);
      }
    };
    const onScroll = (): void => {
      const currentY = view.scrollY;
      const delta = currentY - previousY;
      if (Math.abs(delta) < 4) {
        return;
      }

      const direction = delta > 0 ? 1 : -1;
      if (currentY < 80) {
        element.classList.remove('border-line');
        applySurface(false);
        setCategoryNavOffset('5rem');
        moveTo(0);
      } else {
        element.classList.add('border-line');
        applySurface(true);
        if (direction !== lastDirectionChange && currentY > 120) {
          moveTo(direction > 0 ? -100 : 0);
          setCategoryNavOffset(direction > 0 ? '0px' : '5rem');
          lastDirectionChange = direction;
        }
      }
      previousY = currentY;
    };

    view.addEventListener('scroll', onScroll, { passive: true });
    setCategoryNavOffset('5rem');
    if (previousY >= 80) {
      element.classList.add('border-line');
      applySurface(true);
    }
    return () => {
      view.removeEventListener('scroll', onScroll);
      runtime.gsap.set(element, { yPercent: 0 });
      element.classList.remove('border-line');
      applySurface(false);
      root.style.removeProperty('--header-offset');
    };
  });
}
