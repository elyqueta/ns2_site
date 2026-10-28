import { Directive, effect, input } from '@angular/core';
import { AnimationRuntime } from '../../core/animation.service';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appProjectTransition]',
  standalone: true,
})
export class ProjectTransition {
  readonly value = input.required<unknown>({ alias: 'appProjectTransition' });
  private image: HTMLElement | null = null;
  private content: HTMLElement | null = null;
  private runtime: AnimationRuntime | null = null;
  private reducedMotion = false;

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    this.image = element.querySelector<HTMLElement>('[data-project-image]');
    this.content = element.querySelector<HTMLElement>('[data-project-content]');
    this.runtime = runtime;
    this.reducedMotion = mode.reducedMotion;
    if (!this.image || !this.content) {
      return;
    }
    this.animate();
  });

  constructor() {
    effect(() => {
      this.value();
      if (this.runtime) {
        this.animate();
      }
    });
  }

  private animate(): void {
    if (!this.runtime || !this.image || !this.content) {
      return;
    }
    if (this.reducedMotion) {
      this.runtime.gsap.fromTo([this.image, this.content], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
      return;
    }
    this.runtime.gsap.fromTo(this.image, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, ease: 'power2.out' });
    this.runtime.gsap.fromTo(
      this.content,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power2.out' },
    );
  }
}
