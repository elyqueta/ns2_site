import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MarqueeMotion } from '../../directives/marquee.directive';

@Component({
  selector: 'app-marquee',
  imports: [MarqueeMotion],
  templateUrl: './marquee.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Marquee {
  readonly items = input.required<readonly string[]>();
  readonly label = input.required<string>();
  readonly copies = [0, 1, 2, 3] as const;
}
