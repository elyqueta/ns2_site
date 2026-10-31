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
  readonly categories = produtos.map((category) => {
    const base = `/images/produtos/${category.imagem.ficheiroEsperado.pt!.split('/').pop()!.replace('.webp', '')}`;
    return {
      title: category.titulo,
      description: category.descricao,
      imageSrc: `${base}.webp`,
      imageAlt: category.imagem.alt,
      imageSrcset: `${base}-480.webp 480w, ${base}-800.webp 800w, ${base}.webp 1200w`,
      imageSizes: '(max-width: 768px) 100vw, 33vw',
      href: '/produtos',
      actionLabel: this.copy.cardLinkLabel,
      slug: category.slug,
    };
  });
}
