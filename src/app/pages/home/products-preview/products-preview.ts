import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeContent } from '../../../data/home';
import { produtos } from '../../../data/produtos';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { ProductCategoryCard } from '../../../shared/ui/product-category-card/product-category-card';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'app-home-products-preview',
  imports: [Icon, LocalizedPipe, ProductCategoryCard, RouterLink, SectionHeading],
  templateUrl: './products-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProductsPreview {
  readonly copy = homeContent.products;
  readonly categories = produtos.map((category) => ({
    title: category.titulo,
    description: category.descricao,
    imageSrc: `/images/produtos/${category.imagem.ficheiroEsperado.pt.split('/').pop()}`,
    imageAlt: category.imagem.alt,
    href: category.href,
    actionLabel: this.copy.cardLinkLabel,
    slug: category.slug,
  }));
}
