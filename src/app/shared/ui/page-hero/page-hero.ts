import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Breadcrumb, BreadcrumbItem } from '../breadcrumb/breadcrumb';

@Component({
  selector: 'app-page-hero',
  imports: [Breadcrumb],
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
}
