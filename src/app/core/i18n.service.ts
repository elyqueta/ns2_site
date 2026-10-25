import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { en } from '../i18n/en';
import { pt, TranslationKey } from '../i18n/pt';
import { LocalizedText, LocalizedWords } from '../i18n/types';

export type Language = 'pt' | 'en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly lang = signal<Language>('pt');

  private readonly restoreLanguage = afterNextRender(() => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.document.documentElement.lang = this.lang() === 'pt' ? 'pt-AO' : 'en';
    const savedLanguage = localStorage.getItem('ns2-lang');
    if (savedLanguage === 'en') {
      this.setLanguage('en');
    }
  });

  t(key: TranslationKey): string {
    const value = key.split('.').reduce<unknown>(
      (current, segment) => {
        if (typeof current !== 'object' || current === null || !(segment in current)) {
          throw new RangeError(`Unknown translation key: ${key}`);
        }

        return (current as Record<string, unknown>)[segment];
      },
      this.lang() === 'en' ? en : pt,
    );

    if (typeof value !== 'string') {
      throw new RangeError(`Unknown translation key: ${key}`);
    }

    return value;
  }

  text(value: LocalizedText): string {
    return this.lang() === 'en' ? (value.en ?? value.pt) : value.pt;
  }

  words(value: LocalizedWords): string[] {
    return this.lang() === 'en' ? [...(value.en ?? value.pt)] : [...value.pt];
  }

  setLanguage(language: Language): void {
    this.lang.set(language);
    if (isPlatformBrowser(this.platformId)) {
      this.document.documentElement.lang = language === 'pt' ? 'pt-AO' : 'en';
      localStorage.setItem('ns2-lang', language);
    }
  }

  toggleLanguage(): void {
    this.setLanguage(this.lang() === 'pt' ? 'en' : 'pt');
  }
}
