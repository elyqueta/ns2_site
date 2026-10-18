import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Marquee {
  readonly items = input.required<readonly string[]>();
  readonly label = input.required<string>();
}
