import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-home-values-preview',
  imports: [LocalizedPipe, SectionHeading],
  templateUrl: './values-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeValuesPreview {
  readonly copy = homeContent.values;
  readonly values = this.copy.items.map((value, index) => ({
    ...value,
    ordemLabel: (index + 1).toString().padStart(2, '0'),
  }));
}
