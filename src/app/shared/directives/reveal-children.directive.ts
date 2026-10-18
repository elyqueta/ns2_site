import { Directive, input, numberAttribute } from '@angular/core';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appRevealChildren]',
  standalone: true,
})
export class RevealChildren {
  readonly delay = input(0, { alias: 'appRevealChildrenDelay', transform: numberAttribute });
  readonly stagger = input(0.08, {
    alias: 'appRevealChildrenStagger',
    transform: numberAttribute,
  });

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    const children = Array.from(element.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );
    if (children.length === 0) {
      return;
    }

    if (mode.reducedMotion) {
      runtime.gsap.fromTo(children, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
      return;
    }
    runtime.gsap.fromTo(
      children,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        delay: this.delay(),
        stagger: this.stagger(),
        scrollTrigger: { trigger: element, start: 'top 85%', once: true },
      },
    );
  });
}
