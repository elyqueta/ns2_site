import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kz', standalone: true, pure: true })
export class KzPipe implements PipeTransform {
  private readonly formatter = new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: 'AOA',
    maximumFractionDigits: 2,
  });

  transform(value: number): string {
    if (!Number.isFinite(value)) {
      throw new RangeError('The Kz pipe requires a finite number.');
    }

    return this.formatter.format(value);
  }
}
