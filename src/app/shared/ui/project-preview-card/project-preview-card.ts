import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LocalizedText } from '../../../i18n/types';
import { ProjectTransition } from '../../directives/project-transition.directive';
import { LocalizedPipe } from '../../pipes/localized.pipe';
import { Icon } from '../icon/icon';

export interface ProjectPreviewCardData {
  readonly slug: string;
  readonly nome: LocalizedText;
  readonly tipo: LocalizedText;
  readonly descricao: LocalizedText;
  readonly imagem: { readonly alt: LocalizedText };
  readonly imageSrc: string;
}

@Component({
  selector: 'app-project-preview-card',
  standalone: true,
  imports: [Icon, LocalizedPipe, ProjectTransition],
  templateUrl: './project-preview-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPreviewCard {
  readonly project = input.required<ProjectPreviewCardData>();
  readonly linkLabel = input.required<string>();
  readonly transitionKey = input.required<unknown>();
}
