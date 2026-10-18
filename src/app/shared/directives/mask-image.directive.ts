import { Directive, input } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

export type ImageMask = 'diagonal' | 'inset';

@Directive({
  selector: '[appMaskImage]',
  standalone: true,
})
export class MaskImage {
  readonly mask = input<ImageMask>('diagonal', { alias: 'appMaskImage' });

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    if (mode.reducedMotion) {
      runtime.gsap.fromTo(element, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
      return;
    }

    const startClip =
      this.mask() === 'diagonal' ? 'polygon(0 0, 0 0, 0 100%, 0 100%)' : 'inset(0 0 100% 0)';
    runtime.gsap.fromTo(
      element,
      { clipPath: startClip, scale: 1.08 },
      {
        clipPath:
          this.mask() === 'diagonal' ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'inset(0 0 0 0)',
        scale: 1,
        duration: 1,
        scrollTrigger: { trigger: element, start: 'top 85%', once: true },
      },
    );
  });
}
