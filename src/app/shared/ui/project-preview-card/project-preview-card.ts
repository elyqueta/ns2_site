import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
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
  readonly imageSrc: string | null;
  readonly comingSoon?: boolean;
  readonly statusLabel?: string;
  readonly developmentLabel?: string;
}

@Component({
  selector: 'app-project-preview-card',
  standalone: true,
  imports: [Icon, LocalizedPipe, NgClass, NgOptimizedImage, ProjectTransition],
  templateUrl: './project-preview-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPreviewCard {
  readonly project = input.required<ProjectPreviewCardData>();
  readonly linkLabel = input.required<string>();
  readonly transitionKey = input.required<unknown>();
  readonly gridLayout = input(false);

  readonly cardClasses = computed(() => {
    const layoutClasses = this.gridLayout()
      ? 'aspect-[16/10] min-h-0 shadow-md transition-[transform,box-shadow] duration-500 motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 hover:shadow-xl focus-within:shadow-xl'
      : 'min-h-96 shadow-lg transition-transform hover:-translate-y-1 lg:min-h-[32rem]';
    return this.project().comingSoon ? `${layoutClasses} border-dashed` : layoutClasses;
  });
  readonly overlayClasses = computed(() =>
    this.gridLayout()
      ? 'bg-linear-to-t from-black via-black/75 to-black/45 backdrop-blur-[2px]'
      : 'bg-linear-to-r from-black/70 via-black/30 to-transparent',
  );
  readonly contentClasses = computed(() =>
    this.gridLayout() ? 'p-4 sm:p-5 lg:p-6' : 'p-6 sm:p-10',
  );
  readonly titleClasses = computed(() =>
    this.gridLayout() ? 'text-2xl leading-tight sm:text-4xl' : 'text-3xl sm:text-5xl',
  );
  readonly descriptionClasses = computed(() =>
    this.gridLayout() ? 'line-clamp-2 text-xs sm:text-sm' : 'text-white/80',
  );
  readonly ctaClasses = computed(() =>
    this.gridLayout()
      ? 'mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 font-semibold text-white backdrop-blur-md transition-colors hover:border-white/50'
      : 'mt-6 inline-flex items-center gap-2 font-semibold text-accent-bright',
  );
}
