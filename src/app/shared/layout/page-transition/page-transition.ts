import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, afterNextRender } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { ScrollService } from '../../../core/scroll.service';
import {
  PageTransitionMotion,
  PageTransitionStage,
} from '../../directives/page-transition-motion.directive';

@Component({
  selector: 'app-page-transition',
  imports: [PageTransitionMotion],
  templateUrl: './page-transition.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTransition {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly scroll = inject(ScrollService);
  readonly visible = signal(false);
  readonly stage = signal<PageTransitionStage>('cover');
  private coverComplete = false;
  private navigationComplete = false;
  private preserveFragment = false;
  private safetyTimer: number | undefined;

  private readonly renderCallback = afterNextRender(() => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.beginTransition(event.url);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.finishNavigation();
      }
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  });

  private beginTransition(url: string): void {
    this.clearTimers();
    this.coverComplete = false;
    this.navigationComplete = false;
    this.preserveFragment = Boolean(this.router.parseUrl(url).fragment);
    this.stage.set('cover');
    this.visible.set(true);
    this.safetyTimer = this.document.defaultView?.setTimeout(() => this.hide(), 850);
  }

  private finishNavigation(): void {
    this.navigationComplete = true;
    this.startRevealWhenReady();
  }

  coverFinished(): void {
    this.coverComplete = true;
    if (!this.preserveFragment) {
      this.scroll.resetToTop();
    }
    this.startRevealWhenReady();
  }

  private startRevealWhenReady(): void {
    if (this.coverComplete && this.navigationComplete) {
      this.stage.set('reveal');
    }
  }

  complete(): void {
    this.clearTimers();
    this.hide();
  }

  private hide(): void {
    this.visible.set(false);
    this.stage.set('cover');
    this.coverComplete = false;
    this.navigationComplete = false;
    this.preserveFragment = false;
  }

  private clearTimers(): void {
    if (this.safetyTimer !== undefined) {
      this.document.defaultView?.clearTimeout(this.safetyTimer);
      this.safetyTimer = undefined;
    }
  }

  private readonly destroyCallback = this.destroyRef.onDestroy(() => this.clearTimers());
}
