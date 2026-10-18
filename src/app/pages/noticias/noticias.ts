import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { newsPageContent, noticias } from '../../data/noticias';
import { pt } from '../../i18n/pt';
import { DataPtPipe } from '../../shared/pipes/data-pt.pipe';
import { Icon } from '../../shared/ui/icon/icon';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';

@Component({
  selector: 'app-noticias',
  imports: [DataPtPipe, Icon, MediaSlot, PageHero, RouterLink],
  templateUrl: './noticias.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Noticias {
  private readonly seo = inject(SeoService);

  readonly copy = newsPageContent;
  readonly articles = noticias.map((article) => ({
    ...article,
    imageAlt: `${article.titulo.pt} — imagem de capa`,
    expectedFile: `public/images/${article.imagem}`,
    linkLabel: `${this.copy.readLabel.pt}: ${article.titulo.pt}`,
  }));
  readonly featured = this.articles[0];
  readonly selectedCategory = signal<string | null>(null);
  readonly categories = [...new Set(this.articles.map((article) => article.categoria.pt))];
  readonly showFeatured = computed(
    () =>
      this.selectedCategory() === null || this.selectedCategory() === this.featured.categoria.pt,
  );
  readonly filteredArticles = computed(() => {
    const category = this.selectedCategory();
    return this.articles.filter(
      (article) =>
        (!category || article.categoria.pt === category) &&
        (!this.showFeatured() || article.slug !== this.featured.slug),
    );
  });
  readonly breadcrumbs = [{ label: this.copy.homeLabel.pt, href: '/' }] as const;

  constructor() {
    this.seo.setPage(pt.pages.news, pt.seo.news);
  }

  selectCategory(category: string | null): void {
    this.selectedCategory.set(category);
  }
}
