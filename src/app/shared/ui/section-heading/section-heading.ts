import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly index = input.required<string>();
  readonly title = input.required<string>();
  readonly highlight = input<string | null>(null);
  readonly description = input<string | null>(null);
}
