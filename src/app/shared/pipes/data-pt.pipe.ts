import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dataPt', standalone: true, pure: true })
export class DataPtPipe implements PipeTransform {
  private readonly formatter = new Intl.DateTimeFormat('pt-AO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  transform(value: Date | string | number): string {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new RangeError('The dataPt pipe requires a valid date.');
    }

    return this.formatter
      .format(date)
      .replace(
        /\b(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\b/,
        (month) => `${month[0].toLocaleUpperCase('pt-AO')}${month.slice(1)}`,
      );
  }
}
