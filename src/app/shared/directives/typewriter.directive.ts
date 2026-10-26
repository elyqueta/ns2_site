import { Directive, effect, inject, input } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';
import { I18nService } from '../../core/i18n.service';
import { LocalizedWords } from '../../i18n/types';

@Directive({
  selector: '[appTypewriter]',
  standalone: true,
})
export class TypeWriterDirective {
  readonly words = input<LocalizedWords>({ pt: [] });
  private readonly i18n = inject(I18nService);

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const list = this.i18n.words(this.words());
    if (list.length === 0) {
      return;
    }

    element.textContent = list[0];
    if (mode.reducedMotion || list.length < 2) {
      return;
    }

    const cursor =
      element.parentElement?.querySelector<HTMLElement>('[data-typewriter-cursor]') ?? null;
    const gsap = runtime.gsap;
    const state = { n: 0 };

    const blink = cursor
      ? gsap.to(cursor, { autoAlpha: 0, duration: 0.5, ease: 'steps(1)', repeat: -1, yoyo: true, paused: true })
      : null;
    const cursorSolid = (): void => {
      blink?.pause();
      if (cursor) {
        gsap.set(cursor, { autoAlpha: 1 });
      }
    };

    const timeline = gsap.timeline({ repeat: -1 });
    list.forEach((word, index) => {
      const next = list[(index + 1) % list.length];
      timeline
        .call(() => blink?.restart())
        .to({}, { duration: 1.8 })
        .call(cursorSolid)
        .fromTo(
          state,
          { n: word.length },
          {
            n: 0,
            duration: Math.max(word.length * 0.045, 0.2),
            ease: 'none',
            onUpdate: () => {
              element.textContent = word.slice(0, Math.round(state.n));
            },
          },
        )
        .to({}, { duration: 0.35 })
        .fromTo(
          state,
          { n: 0 },
          {
            n: next.length,
            duration: Math.max(next.length * 0.08, 0.2),
            ease: 'none',
            onUpdate: () => {
              element.textContent = next.slice(0, Math.round(state.n));
            },
          },
        );
    });

    const view = element.ownerDocument.defaultView;
    const observer = new IntersectionObserver(
      ([entry]) => (entry?.isIntersecting ? timeline.play() : timeline.pause()),
      { threshold: 0.1 },
    );
    observer.observe(element);
    const onVisibility = (): void => {
      if (element.ownerDocument.hidden) {
        timeline.pause();
      } else {
        timeline.play();
      }
    };
    element.ownerDocument.addEventListener('visibilitychange', onVisibility);

    return () => {
      observer.disconnect();
      element.ownerDocument.removeEventListener('visibilitychange', onVisibility);
      timeline.kill();
      blink?.kill();
      if (view) {
        element.textContent = list[0];
      }
    };
  });

  private readonly refreshOnChange = effect(() => {
    this.words();
    this.i18n.lang();
    this.registration.animation.refreshElement(this.registration.element);
  });
}
