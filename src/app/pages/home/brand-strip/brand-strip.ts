import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { MarqueeItem, Marquee } from '../../../shared/ui/marquee/marquee';

@Component({
  selector: 'app-home-brand-strip',
  imports: [LocalizedPipe, Marquee],
  templateUrl: './brand-strip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBrandStrip {
  readonly copy = homeContent.brands;
  readonly items = this.copy.items;

  readonly brandText = (brand: MarqueeItem) => brand.text;
}

