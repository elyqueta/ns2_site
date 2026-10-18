import { Directive } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appProcessProgress]',
  standalone: true,
})
export class ProcessProgress {
  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const progress = element.querySelector<HTMLElement>('[data-process-progress]');
    if (!progress) {
      return;
    }

    if (mode.reducedMotion) {
      runtime.gsap.set(progress, { scaleY: 1 });
      return;
    }

    const trigger = runtime.ScrollTrigger.create({
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => runtime.gsap.set(progress, { scaleY: self.progress }),
    });

    return () => trigger.kill();
  });
}
