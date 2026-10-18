import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';

@Component({
  selector: 'app-home-brand-strip',
  templateUrl: './brand-strip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBrandStrip {
  readonly copy = homeContent.brands;
}
