import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-link-arrow',
  imports: [Icon, RouterLink],
  templateUrl: './link-arrow.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkArrow {
  readonly label = input.required<string>();
  readonly href = input.required<string>();
  readonly external = input(false);
}
