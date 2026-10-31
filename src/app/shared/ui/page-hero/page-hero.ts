import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Breadcrumb, BreadcrumbItem } from '../breadcrumb/breadcrumb';

export type HeroImagePosition = 'center' | 'right' | 'left';

@Component({
  selector: 'app-page-hero',
  imports: [NgOptimizedImage, Breadcrumb],
  templateUrl: './page-hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHero {
  readonly title = input.required<string>();
  readonly lead = input.required<string>();
  readonly headingLevel = input<'h1' | 'h2' | 'h3'>('h1');
  readonly breadcrumbs = input<readonly BreadcrumbItem[]>([]);
  readonly current = input.required<string>();
  readonly breadcrumbLabel = input.required<string>();
  readonly imageSrc = input<string | null>(null);
  readonly imagePosition = input<HeroImagePosition>('center');
  readonly imageClass = input<string>();
  readonly imageFit = input<'cover' | 'contain'>('cover');
  readonly imageAlt = input<string>('');
  readonly imageSizes = input<string>('100vw');
  readonly imageSrcset = input<string>('');
}
