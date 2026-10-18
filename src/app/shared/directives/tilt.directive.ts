import { Directive } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class Tilt {
  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const media = element.ownerDocument.defaultView?.matchMedia('(pointer: fine)');
    if (mode.reducedMotion || !mode.desktop || !media?.matches) {
      return;
    }

    const setX = runtime.gsap.quickTo(element, 'rotationX', { duration: 0.35 });
    const setY = runtime.gsap.quickTo(element, 'rotationY', { duration: 0.35 });
    runtime.gsap.set(element, { transformPerspective: 900, transformOrigin: 'center' });
    const onMove = (event: PointerEvent): void => {
      const bounds = element.getBoundingClientRect();
      setX(-((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
      setY(((event.clientX - bounds.left) / bounds.width - 0.5) * 8);
    };
    const onLeave = (): void => {
      setX(0);
      setY(0);
    };

    element.addEventListener('pointermove', onMove);
    element.addEventListener('pointerleave', onLeave);
    return () => {
      element.removeEventListener('pointermove', onMove);
      element.removeEventListener('pointerleave', onLeave);
      runtime.gsap.set(element, { rotationX: 0, rotationY: 0, clearProps: 'transformPerspective' });
    };
  });
}
