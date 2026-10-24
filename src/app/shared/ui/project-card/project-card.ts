import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentCard } from '../content-card/content-card';
import { ProjectCardData } from '../card-content';

@Component({
  selector: 'app-project-card',
  imports: [ContentCard],
  templateUrl: './project-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly item = input.required<ProjectCardData>();
  readonly class = input<string>('');
}
