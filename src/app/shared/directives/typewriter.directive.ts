import {
  Directive,
  DestroyRef,
  ElementRef,
  effect,
  inject,
  Input,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { registerAnimationDirective } from './animation-directive';
import { AnimationService } from '../../core/animation.service';
import { I18nService } from '../../core/i18n.service';
import { LocalizedWords } from '../../i18n/types';

@Directive({
  selector: '[appTypewriter]',
  standalone: true,
})
export class TypeWriterDirective {
  @Input() appTypewriter: any;

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly element = this.elementRef.nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly i18n = inject(I18nService);

  private timeline: gsap.core.Timeline | null = null;
  private cursorTween: gsap.core.Tween | null = null;
  private intersectionObserver: IntersectionObserver | null = null;
  private visibilityListener: (() => void) | null = null;

  private shown = '';

  constructor() {
    registerAnimationDirective((element, runtime, mode) => {
      const ctxEl = element as HTMLElement;
      const cursorEl = ctxEl.parentElement?.querySelector<HTMLElement>('[data-typewriter-cursor]');

      const wordsArray: string[] = this.i18n.words(this.appTypewriter);

      if (mode.reducedMotion) {
        if (wordsArray.length > 0) {
          ctxEl.textContent = wordsArray[0];
          this.shown = wordsArray[0];
        }
        if (cursorEl) {
          runtime.gsap.set(cursorEl, { autoAlpha: 1 });
        }
        return;
      }

      if (!cursorEl) return;

      this.cursorTween = runtime.gsap.to(cursorEl, {
        autoAlpha: 0,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        paused: true,
      });

      const writeWord = (word: string) => {
        return runtime.gsap.to(
          { n: 0 },
          {
            n: word.length,
            duration: word.length * 0.08,
            snap: { n: 1 },
            onUpdate: () => {
              ctxEl.textContent = word.slice(0, Math.round((ctxEl as any).n));
            },
            onComplete: () => {
              ctxEl.textContent = word;
            },
          },
        );
      };

      const eraseWord = (word: string) => {
        return runtime.gsap.to(
          { n: word.length },
          {
            n: 0,
            duration: word.length * 0.045,
            snap: { n: 1 },
            onUpdate: () => {
              ctxEl.textContent = word.slice(0, Math.round((ctxEl as any).n));
            },
            onComplete: () => {
              ctxEl.textContent = '';
            },
          },
        );
      };

      let currentWordIndex = 0;

      if (wordsArray.length > 0) {
        ctxEl.textContent = wordsArray[0];
        this.shown = wordsArray[0];
      }

      const tl = runtime.gsap.timeline({ repeat: -1 });

      tl.eventCallback('onStart', () => {
        this.cursorTween?.pause();
      });

      tl.to({}, { duration: 1.8 }).eventCallback('onComplete', () => {
        this.cursorTween?.play();
      });

      tl.to({}, { duration: 0.35 }).eventCallback('onComplete', () => {
        this.cursorTween?.pause();
        eraseWord(this.shown).eventCallback('onComplete', () => {
          currentWordIndex = (currentWordIndex + 1) % wordsArray.length;
          const nextWord = wordsArray[currentWordIndex];
          writeWord(nextWord).eventCallback('onComplete', () => {
            this.shown = nextWord;
            this.cursorTween?.play();
          });
        });
      });

      this.timeline = tl;

      return () => {
        if (this.timeline) {
          this.timeline.kill();
          this.timeline = null;
        }
        if (this.cursorTween) {
          this.cursorTween.kill();
          this.cursorTween = null;
        }
      };
    });

    this.setupScrollAndVisibility();
    this.destroyRef.onDestroy(() => this.cleanup());
  }

  private setupScrollAndVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const handleVisibilityChange = (): void => {
      if (document.hidden) {
        this.timeline?.pause();
      } else {
        this.timeline?.play();
      }
    };

    this.visibilityListener = handleVisibilityChange;
    document.addEventListener('visibilitychange', handleVisibilityChange);

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          this.timeline?.play();
        } else {
          this.timeline?.pause();
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
    if (this.timeline) {
      this.timeline.kill();
    }
    if (this.cursorTween) {
      this.cursorTween.kill();
    }
  }
}
