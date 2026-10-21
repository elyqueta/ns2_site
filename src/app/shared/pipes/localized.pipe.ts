import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { LocalizedText } from '../../i18n/types';

@Pipe({ name: 'localized', standalone: true, pure: false })
export class LocalizedPipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(value: LocalizedText | null | undefined): string {
    if (!value) {
      return '';
    }

    return this.i18n.text(value);
  }
}
