import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
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
    previous: { pt: 'Projecto anterior', en: 'Previous project' } satisfies LocalizedText,
    next: { pt: 'Projecto seguinte', en: 'Next project' } satisfies LocalizedText,
    description: {
      pt: 'Soluções web já no ar, desenvolvidas pela NS2 Innovation.',
      en: 'Web solutions already live, developed by NS2 Innovation.',
    } satisfies LocalizedText,
  } as const;

  private readonly projectImages = [
    '/images/servicos/websites-sistemas-web.webp',
    '/images/servicos/sistemas-software.webp',
  ] as const;
  readonly projects = projectos
    .filter((project) => !project.brevemente)
    .map((project, index) => ({
      ...project,
      imageSrc: this.projectImages[index % this.projectImages.length],
    }));
  readonly activeProjectIndex = signal(0);
  readonly featuredProject = computed(() => this.projects[this.activeProjectIndex()]);
  readonly hasPreviousProject = computed(() => this.activeProjectIndex() > 0);
  readonly hasNextProject = computed(() => this.activeProjectIndex() < this.projects.length - 1);

  previousProject(): void {
    this.activeProjectIndex.update((index) => Math.max(index - 1, 0));
  }

  nextProject(): void {
    this.activeProjectIndex.update((index) => Math.min(index + 1, this.projects.length - 1));
  }
}
