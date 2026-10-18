import { Directive, output } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appPreloaderMotion]',
  standalone: true,
})
export class PreloaderMotion {
  readonly finished = output<void>();

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    if (mode.reducedMotion) {
      runtime.gsap.set(element, { yPercent: -100 });
      this.finished.emit();
      return;
    }

    runtime.gsap.to(element, {
      yPercent: -100,
      duration: 0.65,
      delay: 0.35,
      ease: 'power3.inOut',
      onComplete: () => this.finished.emit(),
    });
  });
}
