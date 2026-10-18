import { Directive } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appHeaderOffset]',
  standalone: true,
})
export class HeaderOffset {
  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const view = element.ownerDocument.defaultView;
    if (!view) {
      return;
    }

    const root = element.ownerDocument.documentElement;
    const readOffset = (): number => {
      const value = view.getComputedStyle(root).getPropertyValue('--header-offset').trim();
      const amount = Number.parseFloat(value);
      if (!Number.isFinite(amount)) {
        return 0;
      }

      if (!value.endsWith('rem')) {
        return amount;
      }

      const rootFontSize = Number.parseFloat(view.getComputedStyle(root).fontSize);
      return Number.isFinite(rootFontSize) ? amount * rootFontSize : amount;
    };
    let currentOffset = readOffset();
    const moveTo = runtime.gsap.quickTo(element, 'y', {
      duration: 0.32,
      ease: 'power3.out',
    });

    runtime.gsap.set(element, { y: currentOffset });
    const observer = new view.MutationObserver(() => {
      const nextOffset = readOffset();
      if (nextOffset === currentOffset) {
        return;
      }

      currentOffset = nextOffset;
      if (mode.reducedMotion) {
        runtime.gsap.set(element, { y: nextOffset });
      } else {
        moveTo(nextOffset);
      }
    });
    observer.observe(root, { attributes: true, attributeFilter: ['style'] });

    return () => {
      observer.disconnect();
      runtime.gsap.set(element, { y: 0 });
    };
  });
}
