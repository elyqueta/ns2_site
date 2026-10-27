import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LocalizedText } from '../../../i18n/types';
import { Icon } from '../icon/icon';
import { LocalizedPipe } from '../../pipes/localized.pipe';

export interface ProductHighlightCardData {
  readonly label: LocalizedText;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  readonly whatsappUrl: string;
  readonly actionLabel: LocalizedText;
}

@Component({
  selector: 'app-product-highlight-card',
  imports: [Icon, LocalizedPipe],
  templateUrl: './product-highlight-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHighlightCard {
  readonly item = input.required<ProductHighlightCardData>();
}
