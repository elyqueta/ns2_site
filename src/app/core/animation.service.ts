import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  ErrorHandler,
  Injectable,
  PLATFORM_ID,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';

export interface AnimationMode {
  readonly reducedMotion: boolean;
  readonly desktop: boolean;
  readonly mobile: boolean;
}

export interface AnimationRuntime {
  readonly gsap: typeof import('gsap').gsap;
  readonly ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
  readonly SplitText: typeof import('gsap/SplitText').SplitText;
  readonly DrawSVGPlugin: typeof import('gsap/DrawSVGPlugin').DrawSVGPlugin;
}

export type AnimationBuilder = (
  runtime: AnimationRuntime,
  mode: AnimationMode,
) => void | (() => void);

interface AnimationRegistration {
  readonly element: HTMLElement;
  readonly builder: AnimationBuilder;
  contextCleanup: (() => void) | undefined;
  contextRevert: (() => void) | undefined;
}

@Injectable({ providedIn: 'root' })
export class AnimationService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly errorHandler = inject(ErrorHandler);
  private readonly registrations = new Set<AnimationRegistration>();
  private readonly readyCallbacks = new Set<(runtime: AnimationRuntime) => void>();
  private readonly motionListeners = new Set<(reducedMotion: boolean) => void>();
  private readonly initialized = signal(false);
  private runtime: AnimationRuntime | null = null;
  private lastReducedMotion: boolean | null = null;
  private responsiveMedia: ReturnType<typeof import('gsap').gsap.matchMedia> | null = null;

  readonly prefersReducedMotion = signal(false);
  readonly simulateReducedMotion = signal(false);
  readonly reducedMotion = computed(
    () => this.prefersReducedMotion() || this.simulateReducedMotion(),
  );
  readonly desktop = signal(false);
  readonly mobile = signal(false);

  private readonly updateAnimations = effect(() => {
    const initialized = this.initialized();
    const mode = this.currentMode();
    if (!initialized) {
      return;
    }

    for (const registration of this.registrations) {
      this.activate(registration, mode);
    }

    if (mode.reducedMotion !== this.lastReducedMotion) {
      this.lastReducedMotion = mode.reducedMotion;
      for (const listener of this.motionListeners) {
        listener(mode.reducedMotion);
      }
    }
  });

  private readonly renderCallback = afterNextRender(() => {
    if (isPlatformBrowser(this.platformId)) {
      void this.initialize().catch((error: unknown) => this.errorHandler.handleError(error));
    }
  });

  private readonly destroyCallback = this.destroyRef.onDestroy(() => {
    for (const registration of this.registrations) {
      this.deactivate(registration);
    }
    this.registrations.clear();
    this.responsiveMedia?.revert();
    this.responsiveMedia = null;
    this.runtime?.gsap.ticker.remove(this.refreshTicker);
  });

  private readonly refreshTicker = (): void => this.runtime?.ScrollTrigger.refresh();

  register(element: HTMLElement, builder: AnimationBuilder): () => void {
    const registration: AnimationRegistration = {
      element,
      builder,
      contextCleanup: undefined,
      contextRevert: undefined,
    };
    this.registrations.add(registration);

    if (this.runtime) {
      this.activate(registration, this.currentMode());
    }

    return () => {
      this.deactivate(registration);
      this.registrations.delete(registration);
    };
  }

  refreshElement(element: HTMLElement): void {
    const registration = [...this.registrations].find((entry) => entry.element === element);
    if (registration && this.runtime) {
      this.activate(registration, this.currentMode());
    }
  }

  whenReady(callback: (runtime: AnimationRuntime) => void): () => void {
    if (this.runtime) {
      callback(this.runtime);
      return () => {};
    }

    this.readyCallbacks.add(callback);
    return () => this.readyCallbacks.delete(callback);
  }

  onMotionChange(callback: (reducedMotion: boolean) => void): () => void {
    this.motionListeners.add(callback);
    if (this.runtime) {
      callback(this.reducedMotion());
    }
    return () => this.motionListeners.delete(callback);
  }

  addTicker(callback: (time: number) => void): void {
    this.runtime?.gsap.ticker.add(callback);
  }

  removeTicker(callback: (time: number) => void): void {
    this.runtime?.gsap.ticker.remove(callback);
  }

  refresh(): void {
    this.runtime?.ScrollTrigger.refresh();
  }

  private currentMode(): AnimationMode {
    return {
      reducedMotion: this.reducedMotion(),
      desktop: this.desktop(),
      mobile: this.mobile(),
    };
  }

  private async initialize(): Promise<void> {
    const [gsapModule, scrollTriggerModule, splitTextModule, drawSvgModule] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/SplitText'),
      import('gsap/DrawSVGPlugin'),
    ]);

    const gsap = gsapModule.gsap;
    const { ScrollTrigger } = scrollTriggerModule;
    const { SplitText } = splitTextModule;
    const { DrawSVGPlugin } = drawSvgModule;

    gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
    gsap.defaults({ ease: 'power3.out' });
    gsap.ticker.lagSmoothing(0);

    this.runtime = { gsap, ScrollTrigger, SplitText, DrawSVGPlugin };
    this.responsiveMedia = gsap.matchMedia();
    this.responsiveMedia.add(
      {
        reducedMotion: '(prefers-reduced-motion: reduce)',
        desktop: '(min-width: 1024px)',
        mobile: '(max-width: 1023px)',
      },
      (context) => {
        const conditions = context.conditions;
        this.prefersReducedMotion.set(Boolean(conditions?.['reducedMotion']));
        this.desktop.set(Boolean(conditions?.['desktop']));
        this.mobile.set(Boolean(conditions?.['mobile']));
      },
    );

    for (const callback of this.readyCallbacks) {
      callback(this.runtime);
    }
    this.readyCallbacks.clear();
    this.initialized.set(true);

    void this.document.fonts?.ready.then(() => this.refresh());
  }

  private activate(registration: AnimationRegistration, mode: AnimationMode): void {
    this.deactivate(registration);
    if (!this.runtime || !registration.element.isConnected) {
      return;
    }

    const runtime = this.runtime;
    const context = runtime.gsap.context(() => {
      registration.contextCleanup = registration.builder(runtime, mode) ?? undefined;
    }, registration.element);
    registration.contextRevert = () => context.revert();
  }

  private deactivate(registration: AnimationRegistration): void {
    registration.contextCleanup?.();
    registration.contextCleanup = undefined;
    registration.contextRevert?.();
    registration.contextRevert = undefined;
  }
}
