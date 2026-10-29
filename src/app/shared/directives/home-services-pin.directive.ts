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

    let alive = true;
    const scrollLength = () => Math.max(track.scrollWidth - window.innerWidth, 0);

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
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => setProgress(self.progress),
      },
    });

    document.fonts.ready.then(() => {
      if (alive) runtime.ScrollTrigger.refresh();
    });

    return () => {
      alive = false;
    };
  });
}
