import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';

@Pipe({ name: 'kz', standalone: true, pure: false })
export class KzPipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(value: number): string {
    if (!Number.isFinite(value)) {
      throw new RangeError('The Kz pipe requires a finite number.');
    }

    const locale = this.i18n.lang() === 'pt' ? 'pt-AO' : 'en-GB';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'AOA',
      maximumFractionDigits: 2,
    }).format(value);
  }
}
