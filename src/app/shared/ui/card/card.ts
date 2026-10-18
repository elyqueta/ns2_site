import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Spotlight } from '../../directives/spotlight.directive';

@Component({
  selector: 'app-card',
  imports: [Spotlight],
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {}
