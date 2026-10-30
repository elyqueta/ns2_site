import { Directive, effect, input, output, signal } from '@angular/core';
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

  private runtimeSignal = signal<AnimationRuntime | null>(null);
  private reducedMotion = false;
  private viewport: HTMLElement | null = null;
  private track: HTMLElement | null = null;
  private cards: HTMLElement[] = [];
  private resizeObserver: ResizeObserver | null = null;
  private view: Window | null = null;
  private enabledByMode = true;
  private isAnimating = false;
  private needsReposition = false;
  private skipNextIndexSync = false;
  private scrollFrame: number | null = null;
  private scrollEndTimer: ReturnType<typeof setTimeout> | null = null;
  private paddingWidth = -1;

  private readonly registration = registerAnimationDirective((element, runtime, mode) => {
    this.viewport = element;
    this.view = element.ownerDocument.defaultView ?? null;
    this.track = element.querySelector<HTMLElement>('[data-home-carousel-track]');
    this.cards = Array.from(element.querySelectorAll<HTMLElement>('[data-home-carousel-card]'));
    this.runtimeSignal.set(runtime);
    const gsap = runtime.gsap;
    this.reducedMotion = mode.reducedMotion;
    this.enabledByMode = !this.mobileOnly() || mode.mobile;

    element.setAttribute('aria-roledescription', 'carrossel');

    const shouldActivate = this.enabledByMode && !!this.track && this.cards.length > 0;
    if (shouldActivate) {
      this.resizeObserver = new ResizeObserver(() => this.reposition(this.activeIndex(), false));
      this.resizeObserver.observe(element);
      element.addEventListener('scroll', this.onScroll, { passive: true });
      element.addEventListener('scrollend', this.onScrollEnd);
    }

    // Posicionamento inicial sem animação (primeira pintura sem saltos).
    if (shouldActivate) {
      this.reposition(this.activeIndex(), false);
    }

    return () => {
      this.resizeObserver?.disconnect();
      this.resizeObserver = null;
      element.removeEventListener('scroll', this.onScroll);
      element.removeEventListener('scrollend', this.onScrollEnd);
      if (this.scrollFrame !== null && this.view) {
        this.view.cancelAnimationFrame(this.scrollFrame);
        this.scrollFrame = null;
      }
      if (this.scrollEndTimer !== null) {
        clearTimeout(this.scrollEndTimer);
        this.scrollEndTimer = null;
      }
      // No desktop (mobileOnly) remove qualquer estado visual residual dos cartões.
      if (this.mobileOnly() && !mode.mobile && this.cards.length > 0) {
        gsap.set(this.cards, { clearProps: 'transform,opacity,visibility' });
      }
    };
  });

  constructor() {
    effect(() => {
      const runtime = this.runtimeSignal();
      if (!runtime) {
        return;
      }
      if (this.skipNextIndexSync) {
        this.skipNextIndexSync = false;
        return;
      }
      if (this.isAnimating) {
        this.needsReposition = true;
        return;
      }
      this.needsReposition = false;
      if (this.enabled() && this.enabledByMode) {
        this.reposition(this.activeIndex(), true);
      }
    });
  }

  /**
   * Aplica o estado visual (escala, opacidade, y) a todos os cartões pela
   * distância d = |i - activeIndex|. Quando `animate` é true (ou um número com
   * a duração) e não há reduced motion, usa gsap.to; caso contrário gsap.set.
   */
  private applyState(activeIndex: number, animate: boolean | number = false): void {
    const runtime = this.runtimeSignal();
    if (!runtime || this.cards.length === 0) {
      return;
    }
    const gsap = runtime.gsap;
    const duration = animate === true ? 0.7 : typeof animate === 'number' ? animate : 0;
    const doAnimate = animate !== false && !this.reducedMotion;
    this.cards.forEach((card, index) => {
      const state = this.cardState(activeIndex, index);
      if (doAnimate) {
        gsap.to(card, { ...state, duration, ease: 'power2.inOut', overwrite: true });
      } else {
        gsap.set(card, state);
      }
    });
  }

  private cardState(activeIndex: number, index: number) {
    const d = Math.abs(index - activeIndex);
    if (d === 0) {
      return { scale: 1, autoAlpha: 1, y: 0 };
    }
    if (d === 1) {
      return { scale: 0.92, autoAlpha: 0.68, y: 5 };
    }
    return { scale: 0.85, autoAlpha: 0.38, y: 8 };
  }

  /**
   * Move a pista (scrollLeft) e aplica o estado dos cartões na mesma timeline
   * GSAP, usada ao mudar de cartão por seta/teclado.
   */
  private reposition(index: number, animate: boolean): void {
    const runtime = this.runtimeSignal();
    if (
      !runtime ||
      !this.viewport ||
      !this.track ||
      !this.enabled() ||
      !this.enabledByMode ||
      this.cards.length === 0
    ) {
      return;
    }

    const activeIndex = Math.min(Math.max(index, 0), this.cards.length - 1);
    const activeCard = this.cards[activeIndex];
    const gsap = runtime.gsap;
    const viewportWidth = this.viewport.clientWidth;
    const cardWidth = activeCard.offsetWidth;
    const sidePadding = Math.max((viewportWidth - cardWidth) / 2, 0);
    if (this.paddingWidth !== viewportWidth) {
      this.track.style.paddingLeft = `${sidePadding}px`;
      this.track.style.paddingRight = `${sidePadding}px`;
      this.paddingWidth = viewportWidth;
    }
    const targetScroll = Math.max(activeCard.offsetLeft - (viewportWidth - cardWidth) / 2, 0);
    const doAnimate = animate && !this.reducedMotion;

    if (doAnimate) {
      this.isAnimating = true;
      this.viewport.style.scrollSnapType = 'none';
      const tl = gsap.timeline();
      tl.to(this.viewport, {
        scrollLeft: targetScroll,
        duration: 0.7,
        ease: 'power2.inOut',
        overwrite: true,
      });
      this.cards.forEach((card, cardIndex) => {
        tl.to(card, {
          ...this.cardState(activeIndex, cardIndex),
          duration: 0.7,
          ease: 'power2.inOut',
          overwrite: true,
        }, 0);
      });
      tl.eventCallback('onComplete', () => {
        this.isAnimating = false;
        if (this.viewport) {
          this.viewport.style.removeProperty('scroll-snap-type');
        }
        if (this.needsReposition) {
          this.needsReposition = false;
          this.reposition(this.activeIndex(), true);
        }
      });
    } else {
      gsap.set(this.viewport, { scrollLeft: targetScroll });
      this.applyState(activeIndex, false);
    }
  }

  private readonly onScroll = (): void => {
    if (!this.viewport || !this.enabledByMode || this.cards.length === 0 || this.isAnimating) {
      return;
    }
    const view = this.viewport.ownerDocument.defaultView;
    if (!view) {
      return;
    }
    if (this.scrollFrame === null) {
      this.scrollFrame = view.requestAnimationFrame(() => {
        this.scrollFrame = null;
        const closest = this.closestIndex();
        this.applyState(closest, 0.35);
      });
    }
    if (this.scrollEndTimer !== null) {
      clearTimeout(this.scrollEndTimer);
    }
    this.scrollEndTimer = setTimeout(() => this.onScrollEnd(), 120);
  };

  private readonly onScrollEnd = (): void => {
    if (!this.viewport || !this.enabledByMode || this.cards.length === 0 || this.isAnimating) {
      return;
    }
    const closestIndex = this.closestIndex();
    if (closestIndex !== this.activeIndex()) {
      this.skipNextIndexSync = true;
      // Reset apenas no próximo macrotask, para que o effect que reage a
      // activeIndex() não chame reposition (o scroll manual já posicionou os
      // cartões via applyState durante o rolar).
      setTimeout(() => {
        this.skipNextIndexSync = false;
      }, 0);
      this.activeIndexChange.emit(closestIndex);
    }
    this.scrollEndTimer = null;
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
  }
}
