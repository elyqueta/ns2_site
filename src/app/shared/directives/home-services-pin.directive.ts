import { Directive } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appHomeServicesPin]',
  standalone: true,
})
export class HomeServicesPin {
  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const track = element.querySelector<HTMLElement>('[data-home-services-track]');
    const progress = element.querySelector<HTMLElement>('[data-home-services-progress]');
    if (!track || !progress || mode.reducedMotion || !mode.desktop) {
      return;
    }

    const viewport = track.parentElement ?? element;
    const scrollLength = () => Math.max(track.scrollWidth - viewport.clientWidth, 0);
    if (scrollLength() === 0) {
      return;
    }

    runtime.gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });
    const setProgress = runtime.gsap.quickSetter(progress, 'scaleX');
    runtime.gsap.to(track, {
      x: () => -scrollLength(),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top top+=112',
        end: () => `+=${scrollLength()}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => setProgress(self.progress),
      },
    });
  });
}
