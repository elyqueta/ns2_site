import {
  Directive,
  DestroyRef,
  ElementRef,
  computed,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { registerAnimationDirective } from './animation-directive';
import { AnimationService } from '../../core/animation.service';

interface NetworkInformation {
  readonly saveData?: boolean;
  readonly effectiveType?: string;
}

@Directive({
  selector: '[appHeroVideo]',
  standalone: true,
})
export class HeroVideoDirective {
  private readonly animation = inject(AnimationService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject<ElementRef<HTMLVideoElement>>(ElementRef);
  private readonly element = this.elementRef.nativeElement;

  readonly playing = signal(false);
  readonly active = computed(() => this.shouldPlay());

  private readonly navigator = (typeof navigator !== 'undefined' ? navigator : null) as Navigator & NetworkInformation | null;
  private intersectionObserver: IntersectionObserver | null = null;
  private visibilityListener: (() => void) | null = null;
  private sourcesInjected = false;
  private userPaused = false;

  constructor() {
    registerAnimationDirective((_element, runtime, mode) => {
      if (mode.reducedMotion) {
        return;
      }

      const fadeIn = () => {
        if (this.element && this.element.style) {
          runtime.gsap.fromTo(this.element, { opacity: 0 }, { opacity: 1, duration: 0.6 });
        }
      };

      this.element.addEventListener('canplay', fadeIn, { once: true });

      return () => {
        if (this.element) {
          this.element.removeEventListener('canplay', fadeIn);
        }
      };
    });

    this.setupScrollAndVisibility();
    this.destroyRef.onDestroy(() => this.cleanup());
  }

  toggle(): void {
    if (this.playing()) {
      this.pause();
    } else {
      this.play();
    }
  }

  play(): void {
    if (!this.active() || this.userPaused || !this.element) {
      return;
    }
    this.element.play().catch(() => {
      // Silenciosamente mantém o poster em caso de erro
    });
  }

  pause(): void {
    this.userPaused = true;
    if (this.element && typeof this.element.pause === 'function') {
      this.element.pause();
    }
  }

  private shouldPlay(): boolean {
    if (!isPlatformBrowser(this.platformId) || !this.element) {
      return false;
    }

    if (this.animation.reducedMotion() || !this.animation.desktop()) {
      return false;
    }

    if (this.navigator?.saveData === true) {
      return false;
    }

    const effectiveType = this.navigator?.effectiveType;
    if (effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g') {
      return false;
    }

    return true;
  }

  private injectSources(): void {
    if (this.sourcesInjected || !this.element) {
      return;
    }

    const webmSource = document.createElement('source');
    webmSource.src = '/videos/home-hero.webm';
    webmSource.type = 'video/webm; codecs="vp9"';

    const mp4Source = document.createElement('source');
    mp4Source.src = '/videos/home-hero.mp4';
    mp4Source.type = 'video/mp4';

    this.element.appendChild(webmSource);
    this.element.appendChild(mp4Source);
    this.element.load();

    this.sourcesInjected = true;
  }

  private setupScrollAndVisibility(): void {
    if (!isPlatformBrowser(this.platformId) || !this.element) {
      return;
    }

    const handleVisibilityChange = (): void => {
      if (document.hidden) {
        this.pause();
      } else if (!this.userPaused && this.active()) {
        this.play();
      }
    };

    this.visibilityListener = handleVisibilityChange;
    document.addEventListener('visibilitychange', handleVisibilityChange);

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          if (!this.userPaused && this.active()) {
            this.play();
          }
        } else {
          this.pause();
        }
      },
      { threshold: 0.1 },
    );

    this.intersectionObserver.observe(this.element);
  }

  private cleanup(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }

    if (this.visibilityListener) {
      document.removeEventListener('visibilitychange', this.visibilityListener);
      this.visibilityListener = null;
    }

    if (this.element && typeof this.element.pause === 'function') {
      this.element.pause();
    }
    if (this.element) {
      this.element.removeAttribute('src');
      while (this.element.firstChild) {
        this.element.removeChild(this.element.firstChild);
      }
    }
  }
}
