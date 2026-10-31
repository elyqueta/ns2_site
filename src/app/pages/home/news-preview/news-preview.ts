import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeContent } from '../../../data/home';
import { noticias } from '../../../data/noticias';
import { DataPtPipe } from '../../../shared/pipes/data-pt.pipe';
import { Icon } from '../../../shared/ui/icon/icon';
import { MediaSlot } from '../../../shared/ui/media-slot/media-slot';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-home-news-preview',
  imports: [DataPtPipe, Icon, LocalizedPipe, MediaSlot, RouterLink, SectionHeading],
  templateUrl: './news-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNewsPreview {
  readonly copy = homeContent.news;
  readonly articles = noticias.slice(0, 3).map((article) => {
    const base = `/images/${article.imagem.replace('.webp', '')}`;
    return {
      ...article,
      imageSrc: `/images/${article.imagem}`,
      expectedFile: `public/images/${article.imagem}`,
      imageSrcset: `${base}-480.webp 480w, ${base}-800.webp 800w, ${base}.webp 1200w`,
      imageSizes: '(max-width: 768px) 100vw, 50vw',
    };
  });
  readonly featured = this.articles[0];
  readonly secondaryArticles = this.articles.slice(1);
}
