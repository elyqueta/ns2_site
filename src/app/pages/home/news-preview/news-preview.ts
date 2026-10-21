import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeContent } from '../../../data/home';
import { noticias } from '../../../data/noticias';
import { Icon } from '../../../shared/ui/icon/icon';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-home-news-preview',
  imports: [Icon, LocalizedPipe, RouterLink, SectionHeading],
  templateUrl: './news-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNewsPreview {
  readonly copy = homeContent.news;
  readonly articles = noticias.slice(0, 3);
}
