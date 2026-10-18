import { DestroyRef, Directive, ElementRef, effect, inject, input, output } from '@angular/core';
import { AnimationRuntime, AnimationService } from '../../core/animation.service';

@Directive({
  selector: '[appMobileMenuMotion]',
  standalone: true,
})
export class MobileMenuMotion {
  readonly open = input(true, { alias: 'appMobileMenuMotion' });
  readonly closed = output<void>();

  private readonly element: HTMLElement = inject(ElementRef<HTMLElement>).nativeElement;
  private readonly animation = inject(AnimationService);
  private readonly destroyRef = inject(DestroyRef);
  private runtime: AnimationRuntime | null = null;
  private timeline: gsap.core.Timeline | null = null;
  private previousOpen: boolean | null = null;

  private readonly readyCleanup = this.animation.whenReady((runtime) => {
    this.runtime = runtime;
    this.transition(this.open());
  });
  private readonly openEffect = effect(() => this.transition(this.open()));
  private readonly destroyCallback = this.destroyRef.onDestroy(() => {
    this.readyCleanup();
    this.timeline?.kill();
  });

  private transition(open: boolean): void {
    const runtime = this.runtime;
    if (!runtime || this.previousOpen === open) {
      return;
    }

    this.previousOpen = open;
    this.timeline?.kill();

    const reducedMotion = this.animation.reducedMotion();
    const links = this.element.querySelectorAll('[data-menu-link]');
    const timeline = runtime.gsap.timeline({
      onComplete: () => {
        if (!open) {
          this.closed.emit();
        }
      },
    });
    this.timeline = timeline;

    if (open) {
      timeline.fromTo(
        this.element,
        { autoAlpha: 0, y: reducedMotion ? 0 : 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: reducedMotion ? 0.2 : 0.42,
          ease: 'power3.out',
        },
      );
      if (links.length > 0) {
        timeline.fromTo(
          links,
          { autoAlpha: 0, y: reducedMotion ? 0 : 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: reducedMotion ? 0.2 : 0.36,
            stagger: reducedMotion ? 0 : 0.045,
            ease: 'power3.out',
          },
          reducedMotion ? 0 : 0.06,
        );
      }
      return;
    }

    if (links.length > 0) {
      timeline.to(links, {
        autoAlpha: 0,
        y: reducedMotion ? 0 : -6,
        duration: reducedMotion ? 0.12 : 0.16,
        stagger: reducedMotion ? 0 : { each: 0.012, from: 'end' },
        ease: 'power2.in',
      });
    }
    timeline.to(
      this.element,
      {
        autoAlpha: 0,
        y: reducedMotion ? 0 : -10,
        duration: reducedMotion ? 0.18 : 0.24,
        ease: 'power2.in',
      },
      0.02,
    );
  }
}
