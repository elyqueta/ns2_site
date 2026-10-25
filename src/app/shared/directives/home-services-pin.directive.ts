import { Directive, inject } from '@angular/core';
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

    const cards = () => Array.from(track.querySelectorAll<HTMLElement>('.svc-card'));
    const cx = () => window.innerWidth / 2;
    const updateFocus = () => {
      const centerX = cx();
      for (const card of cards()) {
        const r = card.getBoundingClientRect();
        const d = Math.abs((r.left + r.width / 2) - centerX) / r.width;
        card.style.setProperty('--focus', Math.max(0, 1 - d).toFixed(3));
      }
    };

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
        onUpdate: (self) => {
          setProgress(self.progress);
          updateFocus();
        },
      },
    });

    updateFocus();
    window.addEventListener('resize', updateFocus, { passive: true });
    return () => {
      window.removeEventListener('resize', updateFocus);
    };
  });
}
