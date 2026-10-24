import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { MarqueeItem } from '../../../shared/ui/marquee/marquee';

@Component({
  selector: 'app-home-brand-strip',
  imports: [LocalizedPipe],
  templateUrl: './brand-strip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBrandStrip {
  readonly copy = homeContent.brands;

  readonly brandText = (brand: MarqueeItem) => brand.text;
}

