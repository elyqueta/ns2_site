import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>('dark');

  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const storedTheme = localStorage.getItem('ns2-theme');
    const activeTheme =
      storedTheme === 'dark' || storedTheme === 'light'
        ? storedTheme
        : this.document.documentElement.classList.contains('dark')
          ? 'dark'
          : 'light';

    this.applyTheme(activeTheme);
  }

  setTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.theme.set(theme);
      return;
    }

    this.applyTheme(theme);
    localStorage.setItem('ns2-theme', theme);
  }

  private applyTheme(theme: Theme): void {
    this.theme.set(theme);
    this.document.documentElement.classList.toggle('dark', theme === 'dark');
    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#05070D' : '#F6F8FC');
  }
}
