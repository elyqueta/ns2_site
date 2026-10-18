import { Directive, effect, input, output } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

export type PageTransitionStage = 'cover' | 'reveal';

@Directive({
  selector: '[appPageTransitionMotion]',
  standalone: true,
})
export class PageTransitionMotion {
  readonly stage = input<PageTransitionStage>('cover', { alias: 'appPageTransitionMotion' });
  readonly covered = output<void>();
  readonly finished = output<void>();

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    if (mode.reducedMotion) {
      runtime.gsap.set(element, { yPercent: this.stage() === 'cover' ? 0 : -100 });
      if (this.stage() === 'cover') {
        this.covered.emit();
      } else {
        this.finished.emit();
      }
      return;
    }

    if (this.stage() === 'cover') {
      runtime.gsap.fromTo(
        element,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.38,
          ease: 'power3.inOut',
          onComplete: () => this.covered.emit(),
        },
      );
      return;
    }

    runtime.gsap.to(element, {
      yPercent: -100,
      duration: 0.38,
      ease: 'power3.inOut',
      onComplete: () => this.finished.emit(),
    });
  });

  private readonly stageEffect = effect(() => {
    this.stage();
    this.registration.animation.refreshElement(this.registration.element);
  });
}
