import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { newsPageContent, noticias } from '../../data/noticias';
import { DataPtPipe } from '../../shared/pipes/data-pt.pipe';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';
import { Icon } from '../../shared/ui/icon/icon';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';

@Component({
  selector: 'app-noticias',
  imports: [DataPtPipe, Icon, LocalizedPipe, MediaSlot, PageHero, RouterLink],
  templateUrl: './noticias.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Noticias {
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);

  readonly copy = newsPageContent;
  readonly articles = computed(() =>
    noticias.map((article) => ({
      ...article,
      imageSrc: `/images/${article.imagem}`,
      expectedFile: `public/images/${article.imagem}`,
      linkLabel: `${this.i18n.text(this.copy.readLabel)}: ${this.i18n.text(article.titulo)}`,
    })),
  );
  readonly featured = computed(() => this.articles()[0]);
  readonly selectedCategory = signal<string | null>(null);
  readonly categories = computed(() =>
    [...new Map(noticias.map((article) => [article.categoria.pt, article.categoria])).values()].map(
      (category) => ({ value: category.pt, label: this.i18n.text(category) }),
    ),
  );
  readonly showFeatured = computed(
    () =>
      this.selectedCategory() === null || this.selectedCategory() === this.featured().categoria.pt,
  );
  readonly filteredArticles = computed(() => {
    const category = this.selectedCategory();
    return this.articles().filter(
      (article) =>
        (!category || article.categoria.pt === category) &&
        (!this.showFeatured() || article.slug !== this.featured().slug),
    );
  });
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
  ]);

  private readonly seoEffect = effect(() =>
    this.seo.setPage(this.i18n.t('pages.news'), this.i18n.t('seo.news')),
  );

  selectCategory(category: string | null): void {
    this.selectedCategory.set(category);
  }
}
