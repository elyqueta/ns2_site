import { Directive, input, numberAttribute } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class Parallax {
  readonly distance = input(10, { alias: 'appParallax', transform: numberAttribute });

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    if (mode.reducedMotion || !mode.desktop) {
      return;
    }

    runtime.gsap.fromTo(
      element,
      { yPercent: -this.distance() },
      {
        yPercent: this.distance(),
        ease: 'none',
        scrollTrigger: { trigger: element.parentElement ?? element, scrub: 0.5 },
      },
    );
  });
}
