import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../../core/i18n.service';
import { LocalizedText } from '../../../i18n/types';
import { projectos } from '../../../data/projectos';
import { ProjectCardData } from '../../../shared/ui/card-content';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { ProjectCard } from '../../../shared/ui/project-card/project-card';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-home-projects-preview',
  standalone: true,
  imports: [LocalizedPipe, ProjectCard, SectionHeading],
  templateUrl: './projects-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProjectsPreview {
  private readonly i18n = inject(I18nService);

  readonly copy = {
    index: { pt: 'Projectos', en: 'Projects' } satisfies LocalizedText,
    title: { pt: 'Alguns dos nossos projectos', en: 'Some of our projects' } satisfies LocalizedText,
    description: {
      pt: 'Soluções web já no ar, desenvolvidas pela NS2 Innovation.',
      en: 'Web solutions already live, developed by NS2 Innovation.',
    } satisfies LocalizedText,
  } as const;

  readonly projects = computed(() =>
    projectos
      .filter((p) => !p.brevemente)
      .map((project): ProjectCardData => ({
        type: 'project',
        title: this.i18n.text(project.nome),
        description: this.i18n.text(project.descricao),
        label: this.i18n.text(project.tipo),
        href: `/projectos/${project.slug}`,
      })),
  );
}
