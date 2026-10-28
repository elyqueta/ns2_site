import { Directive, effect, input, output } from '@angular/core';
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
  readonly activeIndexChange = output<number>({ alias: 'appHomeCarouselIndexChange' });

  private runtime: AnimationRuntime | null = null;
  private reducedMotion = false;
  private viewport: HTMLElement | null = null;
  private track: HTMLElement | null = null;
  private cards: HTMLElement[] = [];
  private resizeObserver: ResizeObserver | null = null;
  private enabledByMode = true;
  private programmaticScroll = false;
  private scrollFrame: number | null = null;
  private scrollEndTimer: ReturnType<typeof setTimeout> | null = null;
  private paddingWidth = -1;

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
    element.addEventListener('scroll', this.onScroll, { passive: true });
    element.addEventListener('scrollend', this.onScrollEnd);
    this.animate(false);

    return () => {
      this.resizeObserver?.disconnect();
      this.resizeObserver = null;
      element.removeEventListener('scroll', this.onScroll);
      element.removeEventListener('scrollend', this.onScrollEnd);
      if (this.scrollFrame !== null) {
        element.ownerDocument.defaultView?.cancelAnimationFrame(this.scrollFrame);
        this.scrollFrame = null;
      }
      if (this.scrollEndTimer !== null) {
        clearTimeout(this.scrollEndTimer);
        this.scrollEndTimer = null;
      }
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
    const viewportWidth = this.viewport.getBoundingClientRect().width;
    const sidePadding = Math.max((viewportWidth - activeCard.offsetWidth) / 2, 0);
    if (this.paddingWidth !== viewportWidth) {
      this.track.style.paddingLeft = `${sidePadding}px`;
      this.track.style.paddingRight = `${sidePadding}px`;
      this.paddingWidth = viewportWidth;
    }
    const targetScroll = Math.max(
      activeCard.offsetLeft - (viewportWidth - activeCard.offsetWidth) / 2,
      0,
    );
    const to = transition && !this.reducedMotion ? this.runtime.gsap.to : this.runtime.gsap.set;
    this.programmaticScroll = transition && !this.reducedMotion;
    if (this.programmaticScroll) {
      this.viewport.style.scrollSnapType = 'none';
    }

    to(this.viewport, {
      scrollLeft: targetScroll,
      duration: this.reducedMotion ? 0 : 0.85,
      ease: 'power2.inOut',
      overwrite: true,
      onComplete: () => {
        this.programmaticScroll = false;
        if (this.viewport) {
          this.viewport.style.removeProperty('scroll-snap-type');
        }
      },
    });

    this.cards.forEach((card, index) => {
      const distance = Math.abs(index - activeIndex);
      to(card, {
        scale: distance === 0 ? 1 : distance === 1 ? 0.92 : 0.85,
        autoAlpha: distance === 0 ? 1 : distance === 1 ? 0.68 : 0.38,
        y: distance === 0 ? 0 : distance === 1 ? 5 : 8,
        duration: this.reducedMotion ? 0 : 0.85,
        ease: 'power2.inOut',
        overwrite: true,
      });
    });
  }

  private readonly onScroll = (): void => {
    if (!this.viewport || !this.enabledByMode || this.cards.length === 0 || this.programmaticScroll) {
      return;
    }

    const view = this.viewport.ownerDocument.defaultView;
    if (!view) {
      return;
    }
    if (this.scrollFrame === null) {
      this.scrollFrame = view.requestAnimationFrame(() => {
        this.scrollFrame = null;
        this.animateCards(this.closestIndex());
      });
    }
    if (this.scrollEndTimer !== null) {
      clearTimeout(this.scrollEndTimer);
    }
    this.scrollEndTimer = setTimeout(this.onScrollEnd, 120);
  };

  private readonly onScrollEnd = (): void => {
    if (!this.viewport || !this.enabledByMode || this.cards.length === 0 || this.programmaticScroll) {
      return;
    }
    const closestIndex = this.closestIndex();
    if (closestIndex !== this.activeIndex()) {
      this.activeIndexChange.emit(closestIndex);
    }
  };

  private closestIndex(): number {
    if (!this.viewport) {
      return 0;
    }
    const center = this.viewport.scrollLeft + this.viewport.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    this.cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    return closestIndex;
  };

  private animateCards(activeIndex: number): void {
    if (!this.runtime || this.reducedMotion) {
      return;
    }
    this.cards.forEach((card, index) => {
      const distance = Math.abs(index - activeIndex);
      this.runtime?.gsap.to(card, {
        scale: distance === 0 ? 1 : distance === 1 ? 0.92 : 0.85,
        autoAlpha: distance === 0 ? 1 : distance === 1 ? 0.68 : 0.38,
        y: distance === 0 ? 0 : distance === 1 ? 5 : 8,
        duration: 0.45,
        ease: 'power2.inOut',
        overwrite: true,
      });
    });
  }

}
