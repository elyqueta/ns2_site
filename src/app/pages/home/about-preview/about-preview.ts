import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';
import { MediaSlot } from '../../../shared/ui/media-slot/media-slot';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { Button } from '../../../shared/ui/button/button';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-home-about-preview',
  imports: [Button, LocalizedPipe, MediaSlot, SectionHeading],
  templateUrl: './about-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAboutPreview {
  readonly copy = homeContent.about;
}
