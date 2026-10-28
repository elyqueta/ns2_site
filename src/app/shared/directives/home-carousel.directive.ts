import { Directive, effect, input } from '@angular/core';
import { AnimationRuntime } from '../../core/animation.service';
import { registerAnimationDirective } from './animation-directive';

@Directive({
  selector: '[appHomeCarousel]',
  standalone: true,
})
export class HomeCarousel {
  readonly activeIndex = input.required<number>({ alias: 'appHomeCarouselIndex' });
  readonly enabled = input(true, { alias: 'appHomeCarouselEnabled' });
  readonly mobileOnly = input(false, { alias: 'appHomeCarouselMobileOnly' });

  private runtime: AnimationRuntime | null = null;
  private reducedMotion = false;
  private viewport: HTMLElement | null = null;
  private track: HTMLElement | null = null;
  private cards: HTMLElement[] = [];
  private resizeObserver: ResizeObserver | null = null;
  private enabledByMode = true;

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    this.viewport = element;
    this.track = element.querySelector<HTMLElement>('[data-home-carousel-track]');
    this.cards = Array.from(element.querySelectorAll<HTMLElement>('[data-home-carousel-card]'));
    this.runtime = runtime;
    this.reducedMotion = mode.reducedMotion;
    this.enabledByMode = !this.mobileOnly() || mode.mobile;

    if (!this.track || this.cards.length === 0) {
      return;
    }

    this.resizeObserver = new ResizeObserver(() => this.animate(false));
    this.resizeObserver.observe(element);
    this.animate(false);

    return () => {
      this.resizeObserver?.disconnect();
      this.resizeObserver = null;
    };
  });

  constructor() {
    effect(() => {
      this.activeIndex();
      const enabled = this.enabled();
      if (this.runtime && enabled && this.enabledByMode) {
        this.animate(true);
      }
    });
  }

  private animate(transition: boolean): void {
    if (
      !this.runtime ||
      !this.viewport ||
      !this.track ||
      !this.enabled() ||
      !this.enabledByMode ||
      this.cards.length === 0
    ) {
      return;
    }

    const activeIndex = Math.min(Math.max(this.activeIndex(), 0), this.cards.length - 1);
    const activeCard = this.cards[activeIndex];
    const cardWidth = activeCard.offsetWidth;
    const gap = this.getGap();
    const viewportWidth = this.viewport.getBoundingClientRect().width;
    const trackOffset = viewportWidth / 2 - cardWidth / 2 - activeIndex * (cardWidth + gap);
    const to = transition && !this.reducedMotion ? this.runtime.gsap.to : this.runtime.gsap.set;

    to(this.track, {
      x: trackOffset,
      duration: this.reducedMotion ? 0 : 0.65,
      ease: 'power3.out',
      overwrite: true,
    });

    this.cards.forEach((card, index) => {
      const distance = Math.abs(index - activeIndex);
      to(card, {
        scale: distance === 0 ? 1 : distance === 1 ? 0.88 : 0.78,
        autoAlpha: distance === 0 ? 1 : distance === 1 ? 0.58 : 0.22,
        y: distance === 0 ? 0 : distance === 1 ? 8 : 14,
        duration: this.reducedMotion ? 0 : 0.65,
        ease: 'power3.out',
        overwrite: true,
      });
    });
  }

  private getGap(): number {
    if (!this.track || this.cards.length < 2) {
      return 0;
    }

    const styles = getComputedStyle(this.track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap);
    return Number.isFinite(gap) ? gap : 0;
  }

}
