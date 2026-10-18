import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';
import { Marquee } from '../../../shared/ui/marquee/marquee';

@Component({
  selector: 'app-home-brand-strip',
  imports: [Marquee],
  templateUrl: './brand-strip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBrandStrip {
  readonly copy = homeContent.brands;
}
