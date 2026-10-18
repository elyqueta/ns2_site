import { booleanAttribute, Directive, effect, input } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appMagnetic]',
  standalone: true,
})
export class Magnetic {
  readonly enabled = input(true, { alias: 'appMagnetic', transform: booleanAttribute });

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const media = element.ownerDocument.defaultView?.matchMedia('(pointer: fine)');
    if (!this.enabled() || mode.reducedMotion || !mode.desktop || !media?.matches) {
      return;
    }

    const setX = runtime.gsap.quickTo(element, 'x', { duration: 0.35, ease: 'power3.out' });
    const setY = runtime.gsap.quickTo(element, 'y', { duration: 0.35, ease: 'power3.out' });
    const onMove = (event: PointerEvent): void => {
      const bounds = element.getBoundingClientRect();
      setX((event.clientX - bounds.left - bounds.width / 2) * 0.15);
      setY((event.clientY - bounds.top - bounds.height / 2) * 0.15);
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
      runtime.gsap.set(element, { x: 0, y: 0 });
    };
  });

  private readonly refreshWhenEnabledChanges = effect(() => {
    this.enabled();
    this.registration.animation.refreshElement(this.registration.element);
  });
}
