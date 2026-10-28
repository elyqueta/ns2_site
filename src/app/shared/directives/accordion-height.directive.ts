import { Directive, effect, input } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appAccordionHeight]',
  standalone: true,
})
export class AccordionHeight {
  readonly expanded = input(false, { alias: 'appAccordionHeight' });
  private animate: ((expanded: boolean) => void) | undefined;

  private readonly stateEffect = effect(() => {
    const expanded = this.expanded();
    this.animate?.(expanded);
  });

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    element.style.overflow = 'hidden';
    element.style.height = 'auto';
    this.animate = (expanded) => {
      if (mode.reducedMotion) {
        runtime.gsap.set(element, { height: expanded ? 'auto' : 0, autoAlpha: expanded ? 1 : 0 });
        return;
      }
      runtime.gsap.to(element, {
        height: expanded ? 'auto' : 0,
        autoAlpha: expanded ? 1 : 0,
        duration: 0.35,
        overwrite: true,
      });
    };
    this.animate(this.expanded());

    return () => {
      this.animate = undefined;
      element.style.removeProperty('overflow');
      element.style.removeProperty('height');
      element.style.removeProperty('opacity');
    };
  });
}
