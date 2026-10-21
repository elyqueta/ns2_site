import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeContent } from '../../../data/home';
import { produtos } from '../../../data/produtos';
import { Icon } from '../../../shared/ui/icon/icon';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-home-products-preview',
  imports: [Icon, LocalizedPipe, RouterLink, SectionHeading],
  templateUrl: './products-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProductsPreview {
  readonly copy = homeContent.products;
  readonly categories = produtos.map((category) => ({
    ...category,
    ordemLabel: category.ordem.toString().padStart(2, '0'),
  }));
}
