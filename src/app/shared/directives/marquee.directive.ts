import { Directive, input, numberAttribute } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appMarquee]',
  standalone: true,
})
export class MarqueeMotion {
  readonly duration = input(32, { alias: 'appMarquee', transform: numberAttribute });

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const track = element.querySelector<HTMLElement>('[data-marquee-track]');
    if (!track || mode.reducedMotion) {
      return;
    }

    const tween = runtime.gsap.fromTo(
      track,
      { xPercent: 0 },
      {
        xPercent: -50,
        duration: Math.max(1, this.duration()),
        ease: 'none',
        repeat: -1,
      },
    );

    return () => {
      tween.kill();
    };
  });
}
