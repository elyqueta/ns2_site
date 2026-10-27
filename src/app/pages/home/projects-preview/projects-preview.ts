import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocalizedText } from '../../../i18n/types';
import { projectos } from '../../../data/projectos';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'app-home-projects-preview',
  standalone: true,
  imports: [Icon, LocalizedPipe, SectionHeading],
  templateUrl: './projects-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProjectsPreview {
  readonly copy = {
    index: { pt: 'Projectos', en: 'Projects' } satisfies LocalizedText,
    title: { pt: 'Alguns dos nossos projectos', en: 'Some of our projects' } satisfies LocalizedText,
    description: {
      pt: 'Soluções web já no ar, desenvolvidas pela NS2 Innovation.',
      en: 'Web solutions already live, developed by NS2 Innovation.',
    } satisfies LocalizedText,
  } as const;

  readonly featuredProject = projectos[0];
}
