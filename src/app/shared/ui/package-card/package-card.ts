import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentCard } from '../content-card/content-card';
import { PackageCardData } from '../card-content';

@Component({
  selector: 'app-package-card',
  imports: [ContentCard],
  templateUrl: './package-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageCard {
  readonly item = input.required<PackageCardData>();
}
