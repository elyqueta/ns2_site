import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocalizedText } from '../../../i18n/types';
import { LocalizedPipe } from '../../pipes/localized.pipe';
import { Icon } from '../icon/icon';

export interface ProductCategoryCardData {
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  readonly imageSrc: string;
  readonly imageAlt: LocalizedText;
  readonly href: string;
  readonly actionLabel: LocalizedText;
}

@Component({
  selector: 'app-product-category-card',
  imports: [Icon, LocalizedPipe, RouterLink],
  templateUrl: './product-category-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCategoryCard {
  readonly item = input.required<ProductCategoryCardData>();
}
