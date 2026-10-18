import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  ErrorHandler,
  Injectable,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AnimationRuntime, AnimationService } from './animation.service';

type LenisInstance = import('lenis').default;

export interface ScrollToOptions {
  readonly immediate?: boolean;
  readonly offset?: number;
  readonly duration?: number;
  readonly easing?: (progress: number) => number;
}

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly errorHandler = inject(ErrorHandler);
  private readonly router = inject(Router);
  private readonly animation = inject(AnimationService);
  private lenis: LenisInstance | null = null;
  private runtime: AnimationRuntime | null = null;
  private renderedInBrowser = false;
  private stopped = false;
  private loadGeneration = 0;
  private routerSubscription: Subscription | null = null;
  private readonly onLenisScroll = (): void => this.runtime?.ScrollTrigger.update();
  private readonly onFrame = (time: number): void => this.lenis?.raf(time * 1000);
  private readonly onImageLoad = (event: Event): void => {
    if (event.target instanceof HTMLImageElement) {
      this.animation.refresh();
    }
  };

  private readonly stopRuntimeReady = this.animation.whenReady((runtime) => {
    this.runtime = runtime;
    this.syncLenis();
  });
  private readonly stopMotionListener = this.animation.onMotionChange(() => this.syncLenis());

  private readonly renderCallback = afterNextRender(() => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.renderedInBrowser = true;
    this.syncLenis();
    this.document.addEventListener('load', this.onImageLoad, true);
    void this.document.fonts?.ready.then(() => this.animation.refresh());
    this.routerSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.resetToTop();
        this.animation.refresh();
      });
  });

  private readonly destroyCallback = this.destroyRef.onDestroy(() => {
    this.routerSubscription?.unsubscribe();
    this.routerSubscription = null;
    this.document.removeEventListener('load', this.onImageLoad, true);
    this.stopRuntimeReady();
    this.stopMotionListener();
    this.destroyLenis();
  });

  scrollTo(target: string | number | HTMLElement, options: ScrollToOptions = {}): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (this.lenis) {
      this.lenis.scrollTo(target, options);
      return;
    }

    const behavior = options.immediate || this.animation.reducedMotion() ? 'auto' : 'smooth';
    if (typeof target === 'number') {
      this.document.defaultView?.scrollTo({
        top: target + (options.offset ?? 0),
        behavior,
      });
      return;
    }

    const element = typeof target === 'string' ? this.document.querySelector(target) : target;
    if (!element) {
      return;
    }

    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    view.scrollTo({
      top: element.getBoundingClientRect().top + view.scrollY + (options.offset ?? 0),
      behavior,
    });
  }

  stop(): void {
    this.stopped = true;
    this.lenis?.stop();
  }

  start(): void {
    this.stopped = false;
    this.lenis?.start();
  }

  resetToTop(): void {
    this.scrollTo(0, { immediate: true });
  }

  private syncLenis(): void {
    if (!this.renderedInBrowser || !this.runtime || this.animation.reducedMotion()) {
      this.destroyLenis();
      return;
    }

    if (this.lenis) {
      return;
    }

    const generation = ++this.loadGeneration;
    void import('lenis')
      .then(({ default: Lenis }) => {
        if (
          generation !== this.loadGeneration ||
          this.animation.reducedMotion() ||
          !isPlatformBrowser(this.platformId)
        ) {
          return;
        }

        this.lenis = new Lenis({ autoRaf: false, smoothWheel: true });
        if (this.stopped) {
          this.lenis.stop();
        }
        this.lenis.on('scroll', this.onLenisScroll);
        this.animation.addTicker(this.onFrame);
      })
      .catch((error: unknown) => this.errorHandler.handleError(error));
  }

  private destroyLenis(): void {
    this.loadGeneration += 1;
    if (!this.lenis) {
      return;
    }

    this.lenis.off('scroll', this.onLenisScroll);
    this.animation.removeTicker(this.onFrame);
    this.lenis.destroy();
    this.lenis = null;
  }
}
