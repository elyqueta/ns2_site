import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-home-process-preview',
  imports: [LocalizedPipe, SectionHeading],
  templateUrl: './process-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProcessPreview {
  readonly copy = homeContent.process;
  readonly steps = this.copy.steps.map((step, index) => ({
    ...step,
    ordemLabel: (index + 1).toString().padStart(2, '0'),
  }));
}
