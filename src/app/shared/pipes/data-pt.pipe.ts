import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';

@Pipe({ name: 'dataPt', standalone: true, pure: false })
export class DataPtPipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(value: Date | string | number): string {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new RangeError('The dataPt pipe requires a valid date.');
    }

    const language = this.i18n.lang();
    const locale = language === 'pt' ? 'pt-AO' : 'en-GB';
    const formatted = new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);

    return language === 'pt'
      ? formatted.replace(
          /\b(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\b/,
          (month) => `${month[0].toLocaleUpperCase('pt-AO')}${month.slice(1)}`,
        )
      : formatted;
  }
}
