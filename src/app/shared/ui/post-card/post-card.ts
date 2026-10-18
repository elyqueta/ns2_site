import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentCard } from '../content-card/content-card';
import { PostCardData } from '../card-content';

@Component({
  selector: 'app-post-card',
  imports: [ContentCard],
  templateUrl: './post-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCard {
  readonly item = input.required<PostCardData>();
}
