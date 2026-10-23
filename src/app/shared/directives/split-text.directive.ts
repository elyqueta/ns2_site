import { Directive } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appSplitText]',
  standalone: true,
})
export class SplitTextReveal {
  // O texto deste elemento NÃO pode mudar enquanto a directiva está activa.
  // Quem a usa tem de recriar o elemento quando o texto mudar (ver HomeHero).
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
}
