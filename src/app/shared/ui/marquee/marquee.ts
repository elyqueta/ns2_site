import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { MarqueeMotion } from '../../directives/marquee.directive';

export interface MarqueeItem {
  readonly type: 'text' | 'image';
  readonly text?: string;
  readonly src?: string;
  readonly alt?: string;
}

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [MarqueeMotion],
  templateUrl: './marquee.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Marquee {
  readonly items = input.required<readonly MarqueeItem[]>();
  readonly label = input.required<string>();
  readonly copies = [0, 1, 2, 3] as const;

  readonly itemText = (item: MarqueeItem) => item.text;
}
