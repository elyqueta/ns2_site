import { Directive } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appSpotlight]',
  standalone: true,
})
export class Spotlight {
  private readonly registration = registerAnimationDirective((element, _runtime, mode) => {
    const view = element.ownerDocument.defaultView;
    if (mode.reducedMotion || !mode.desktop || !view?.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const previousX = element.style.getPropertyValue('--mx');
    const previousY = element.style.getPropertyValue('--my');
    const onMove = (event: PointerEvent): void => {
      const bounds = element.getBoundingClientRect();
      element.style.setProperty('--mx', `${event.clientX - bounds.left}px`);
      element.style.setProperty('--my', `${event.clientY - bounds.top}px`);
    };
    element.addEventListener('pointermove', onMove);

    return () => {
      element.removeEventListener('pointermove', onMove);
      if (previousX) {
        element.style.setProperty('--mx', previousX);
      } else {
        element.style.removeProperty('--mx');
      }
      if (previousY) {
        element.style.setProperty('--my', previousY);
      } else {
        element.style.removeProperty('--my');
      }
    };
  });
}
