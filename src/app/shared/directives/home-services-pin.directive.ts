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

    let alive = true;

    const cards = () => Array.from(track.querySelectorAll<HTMLElement>('.svc-card'));
    const updateFocus = (progressValue = 0) => {
      const items = cards();
      const focusIndex = progressValue * Math.max(items.length - 1, 1);
      items.forEach((card, index) => {
        const distance = Math.abs(index - focusIndex);
        card.style.setProperty('--focus', Math.max(0, 1 - distance).toFixed(3));
      });
    };

    const scrollLength = () => Math.max(track.scrollWidth - window.innerWidth, 0);

    const ready = async () => {
      await document.fonts.ready;
      await Promise.all(
        Array.from(track.querySelectorAll<HTMLImageElement>('img')).map(
          (img) =>
            img.complete
              ? Promise.resolve()
              : new Promise<void>((resolve) => {
                  img.addEventListener('load', () => resolve(), { once: true });
                  img.addEventListener('error', () => resolve(), { once: true });
                }),
        ),
      );
      if (!alive) return;

      // Posiciona o 1.º card centrado no ecrã ao entrar na secção
      const firstCard = cards()[0];
      if (firstCard) {
        const pad = parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
        const initialX = -(pad + firstCard.offsetWidth / 2 - window.innerWidth / 2);
        runtime.gsap.set(track, { x: initialX });
      }

      updateFocus(0);
      runtime.ScrollTrigger.refresh();
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
        scrub: true,
        anticipatePin: 0,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          element.toggleAttribute('data-pinned', self.isActive);
        },
        onUpdate: (self) => {
          setProgress(self.progress);
          updateFocus(self.progress);
        },
      },
    });

    ready().then(() => {
      if (alive) runtime.ScrollTrigger.refresh();
    });

    const onResize = (): void => updateFocus(0);
    window.addEventListener('resize', onResize, { passive: true });
    const observer = new MutationObserver(() => {
      updateFocus(0);
      runtime.ScrollTrigger.refresh();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    updateFocus(0);
    return () => {
      alive = false;
      element.removeAttribute('data-pinned');
      window.removeEventListener('resize', onResize);
      observer.disconnect();
    };
  });
}
