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
    const naturalTop = element.getBoundingClientRect().top + view.scrollY;
    const moveTo = runtime.gsap.quickTo(element, 'y', {
      duration: 0.32,
      ease: 'power3.out',
    });

    const updatePosition = (): void => {
      const stuck = view.scrollY >= naturalTop - 1;
      const offset = stuck ? currentOffset : 0;
      if (mode.reducedMotion) {
        runtime.gsap.set(element, { y: offset });
      } else {
        moveTo(offset);
      }
    };

    runtime.gsap.set(element, { y: 0 });
    view.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();
    const observer = new view.MutationObserver(() => {
      const nextOffset = readOffset();
      if (nextOffset === currentOffset) {
        return;
      }

      currentOffset = nextOffset;
      updatePosition();
    });
    observer.observe(root, { attributes: true, attributeFilter: ['style'] });

    return () => {
      observer.disconnect();
      view.removeEventListener('scroll', updatePosition);
      runtime.gsap.set(element, { y: 0 });
    };
  });
}
