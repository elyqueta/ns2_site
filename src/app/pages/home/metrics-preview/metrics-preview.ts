import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { CountUp } from '../../../shared/directives/count-up.directive';
import { RevealChildren } from '../../../shared/directives/reveal-children.directive';

@Component({
  selector: 'app-home-metrics-preview',
  imports: [LocalizedPipe, CountUp, RevealChildren],
  templateUrl: './metrics-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMetricsPreview {
  readonly copy = homeContent.metrics;
}
