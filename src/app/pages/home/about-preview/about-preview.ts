import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';
import { MediaSlot } from '../../../shared/ui/media-slot/media-slot';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { Button } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-home-about-preview',
  imports: [Button, MediaSlot, SectionHeading],
  templateUrl: './about-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAboutPreview {
  readonly copy = homeContent.about;
}
