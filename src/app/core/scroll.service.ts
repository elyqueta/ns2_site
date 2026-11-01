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
  readonly force?: boolean;
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
  private interactionUntil = 0;
  private readonly wheelOptions: AddEventListenerOptions = { capture: true, passive: true };
  private scrollIdleTimer: ReturnType<typeof setTimeout> | null = null;
  private navigationFrame: number | undefined;
  private routerSubscription: Subscription | null = null;
  private readonly onLenisScroll = (): void => {
    this.runtime?.ScrollTrigger.update();
    this.handleScroll();
  };
  private readonly onFrame = (time: number): void => this.lenis?.raf(time * 1000);
  private readonly onInteraction = (): void => {
    this.interactionUntil = Date.now() + 600;
  };
  private readonly handleScroll = (): void => {
    const root = this.document.documentElement;
    root.classList.add('is-scrolling');
    if (this.scrollIdleTimer !== null) clearTimeout(this.scrollIdleTimer);
    this.scrollIdleTimer = setTimeout(() => root.classList.remove('is-scrolling'), 120);
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
    this.document.addEventListener('pointerdown', this.onInteraction, true);
    this.document.addEventListener('wheel', this.onInteraction, this.wheelOptions);
    this.document.addEventListener('ns2-carousel-interaction', this.onInteraction);
    if (this.document.readyState === 'complete') {
      this.animation.refresh();
    }
    void this.document.fonts?.ready.then(() => this.animation.refresh());
    this.document.defaultView?.addEventListener('scroll', this.handleScroll, { passive: true });
    this.routerSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.scheduleNavigationUpdate(Boolean(this.router.parseUrl(event.urlAfterRedirects).fragment));
      });
  });

  private readonly destroyCallback = this.destroyRef.onDestroy(() => {
    this.routerSubscription?.unsubscribe();
    this.routerSubscription = null;
    if (this.navigationFrame !== undefined) {
      this.document.defaultView?.cancelAnimationFrame(this.navigationFrame);
      this.navigationFrame = undefined;
    }
    this.document.removeEventListener('pointerdown', this.onInteraction, true);
    this.document.removeEventListener('wheel', this.onInteraction, this.wheelOptions);
    this.document.removeEventListener('ns2-carousel-interaction', this.onInteraction);
    this.document.defaultView?.removeEventListener('scroll', this.handleScroll);
    if (this.scrollIdleTimer !== null) {
      clearTimeout(this.scrollIdleTimer);
      this.scrollIdleTimer = null;
    }
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
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    this.lenis?.scrollTo(0, { immediate: true, force: true });
    view.scrollTo({ top: 0, behavior: 'auto' });
  }

  private scheduleNavigationUpdate(preserveFragment: boolean): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    if (this.navigationFrame !== undefined) {
      view.cancelAnimationFrame(this.navigationFrame);
    }

    this.navigationFrame = view.requestAnimationFrame(() => {
      this.navigationFrame = undefined;
      if (!preserveFragment) {
        this.resetToTop();
      }
      this.animation.refresh();
    });
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
