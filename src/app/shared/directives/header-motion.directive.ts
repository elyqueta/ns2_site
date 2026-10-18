import { Directive } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appHeaderMotion]',
  standalone: true,
})
export class HeaderMotion {
  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const view = element.ownerDocument.defaultView;
    if (!view) {
      return;
    }

    const moveY = runtime.gsap.quickTo(element, 'yPercent', {
      duration: 0.32,
      ease: 'power3.out',
    });
    let previousY = view.scrollY;
    let lastDirectionChange = 0;
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
        element.classList.remove('border-line', 'bg-bg/85', 'backdrop-blur-xl');
        moveTo(0);
      } else {
        element.classList.add('border-line', 'bg-bg/85', 'backdrop-blur-xl');
        if (direction !== lastDirectionChange && currentY > 120) {
          moveTo(direction > 0 ? -100 : 0);
          lastDirectionChange = direction;
        }
      }
      previousY = currentY;
    };

    view.addEventListener('scroll', onScroll, { passive: true });
    if (previousY >= 80) {
      element.classList.add('border-line', 'bg-bg/85', 'backdrop-blur-xl');
    }
    return () => {
      view.removeEventListener('scroll', onScroll);
      runtime.gsap.set(element, { yPercent: 0 });
      element.classList.remove('border-line', 'bg-bg/85', 'backdrop-blur-xl');
    };
  });
}
