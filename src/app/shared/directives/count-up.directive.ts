import { Directive, input, numberAttribute } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUp {
  readonly value = input.required({ alias: 'appCountUp', transform: numberAttribute });

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    if (mode.reducedMotion) {
      runtime.gsap.fromTo(element, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
      return;
    }

    const counter = { value: 0 };
    const tween = runtime.gsap.to(counter, {
      value: this.value(),
      duration: 1.2,
      paused: true,
      onUpdate: () => {
        element.textContent = new Intl.NumberFormat('pt-AO', {
          maximumFractionDigits: 0,
        }).format(Math.round(counter.value));
      },
    });
    runtime.ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      once: true,
      onEnter: () => tween.play(),
    });
  });
}
