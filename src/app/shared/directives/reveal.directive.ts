import { Directive, input, numberAttribute } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class Reveal {
  readonly delay = input(0, { alias: 'appRevealDelay', transform: numberAttribute });

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    if (mode.reducedMotion) {
      runtime.gsap.fromTo(element, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
      return;
    }

    runtime.gsap.fromTo(
      element,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        delay: this.delay(),
        scrollTrigger: { trigger: element, start: 'top 85%', once: true },
      },
    );
  });
}
