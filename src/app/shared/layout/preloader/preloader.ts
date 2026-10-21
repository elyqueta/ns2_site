import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ErrorHandler,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { AnimationService } from '../../../core/animation.service';
import { I18nService } from '../../../core/i18n.service';
import { PreloaderMotion } from '../../directives/preloader-motion.directive';

@Component({
  selector: 'app-preloader',
  imports: [PreloaderMotion],
  templateUrl: './preloader.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Preloader {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly animation = inject(AnimationService);
  private readonly errorHandler = inject(ErrorHandler);
  private readonly i18n = inject(I18nService);
  private readonly document = inject(DOCUMENT);
  readonly visible = signal(false);
  readonly label = computed(() => this.i18n.t('actions.preloaderLabel'));
  private fallbackTimer: number | undefined;

  private readonly renderCallback = afterNextRender(() => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      if (
        this.animation.reducedMotion() ||
        this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }
      const storage = this.document.defaultView?.sessionStorage;
      if (!storage || storage.getItem('ns2-preloader-seen') === 'true') {
        return;
      }
      storage.setItem('ns2-preloader-seen', 'true');
      this.visible.set(true);
      this.fallbackTimer = this.document.defaultView?.setTimeout(
        () => this.visible.set(false),
        1600,
      );
    } catch (error: unknown) {
      this.errorHandler.handleError(error);
    }
  });

  private readonly destroyCallback = inject(DestroyRef).onDestroy(() => {
    if (this.fallbackTimer !== undefined) {
      this.document.defaultView?.clearTimeout(this.fallbackTimer);
    }
  });

  finish(): void {
    if (this.fallbackTimer !== undefined) {
      this.document.defaultView?.clearTimeout(this.fallbackTimer);
    }
    this.visible.set(false);
  }
}
