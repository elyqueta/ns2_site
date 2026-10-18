import { Directive } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appDrawLine]',
  standalone: true,
})
export class DrawLine {
  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    if (mode.reducedMotion) {
      return;
    }

    runtime.gsap.fromTo(
      element,
      { drawSVG: '0%' },
      {
        drawSVG: '100%',
        duration: 0.9,
        scrollTrigger: { trigger: element, start: 'top 90%', once: true },
      },
    );
  });
}
