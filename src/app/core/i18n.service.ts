import { Injectable, signal } from '@angular/core';
import { pt, TranslationKey } from '../i18n/pt';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<'pt'>('pt');

  t(key: TranslationKey): string {
    const value = key.split('.').reduce<unknown>((current, segment) => {
      if (typeof current !== 'object' || current === null || !(segment in current)) {
        throw new RangeError(`Unknown translation key: ${key}`);
      }

      return (current as Record<string, unknown>)[segment];
    }, pt);

    if (typeof value !== 'string') {
      throw new RangeError(`Unknown translation key: ${key}`);
    }

    return value;
  }
}
