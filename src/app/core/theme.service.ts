import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly theme = signal<Theme>(this.readInitialTheme());
  private readonly syncThemeAfterRender = afterNextRender(() => {
    this.applyTheme(this.theme());
  });

  private readInitialTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'dark';
    }

    const storedTheme = localStorage.getItem('ns2-theme');
    const activeTheme =
      storedTheme === 'dark' || storedTheme === 'light'
        ? storedTheme
        : this.document.documentElement.classList.contains('dark')
          ? 'dark'
          : 'light';

    this.applyThemeToDocument(activeTheme);
    return activeTheme;
  }

  setTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.theme.set(theme);
      return;
    }

    this.applyTheme(theme);
    localStorage.setItem('ns2-theme', theme);
  }

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(theme: Theme): void {
    this.theme.set(theme);
    this.applyThemeToDocument(theme);
  }

  private applyThemeToDocument(theme: Theme): void {
    this.document.documentElement.classList.toggle('dark', theme === 'dark');
    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#05070D' : '#F6F8FC');
  }
}
