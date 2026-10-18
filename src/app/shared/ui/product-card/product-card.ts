import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentCard } from '../content-card/content-card';
import { ProductCardData } from '../card-content';

@Component({
  selector: 'app-product-card',
  imports: [ContentCard],
  templateUrl: './product-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  readonly item = input.required<ProductCardData>();
}
