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

    const tween = runtime.gsap.to(track, {
      xPercent: -50,
      duration: this.duration(),
      ease: 'none',
      repeat: -1,
    });
    const pause = () => tween.pause();
    const resume = () => tween.resume();
    element.addEventListener('pointerenter', pause);
    element.addEventListener('pointerleave', resume);
    let release: gsap.core.Tween | undefined;

    const trigger = runtime.ScrollTrigger.create({
      trigger: element,
      onUpdate: (self) => {
        release?.kill();
        const speed = Math.min(Math.abs(self.getVelocity()) / 1800, 0.8);
        tween.timeScale((self.direction < 0 ? -1 : 1) * (1 + speed));
        release = runtime.gsap.delayedCall(0.35, () => tween.timeScale(1));
      },
    });

    return () => {
      element.removeEventListener('pointerenter', pause);
      element.removeEventListener('pointerleave', resume);
      release?.kill();
      trigger.kill();
    };
  });
}
