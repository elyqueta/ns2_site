import { Directive, afterNextRender, effect, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appSplitText]',
  standalone: true,
})
export class SplitTextReveal {
  private readonly i18n = inject(I18nService);
  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    if (mode.reducedMotion) {
      runtime.gsap.fromTo(element, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
      return;
    }

    const split = runtime.SplitText.create(element, {
      type: 'lines',
      mask: 'lines',
      aria: 'auto',
    });
    runtime.gsap.fromTo(
      split.lines,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 0.9,
        stagger: 0.08,
        scrollTrigger: { trigger: element, start: 'top 85%', once: true },
      },
    );
    return () => split.revert();
  });
  private activeLanguage = this.i18n.lang();
  private readonly languageEffect = effect(() => {
    const language = this.i18n.lang();
    if (language === this.activeLanguage) {
      return;
    }

    this.activeLanguage = language;
    afterNextRender(() => this.registration.animation.refreshElement(this.registration.element));
  });
}
