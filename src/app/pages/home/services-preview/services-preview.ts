import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeContent } from '../../../data/home';
import { servicos } from '../../../data/servicos';
import { HomeServicesPin } from '../../../shared/directives/home-services-pin.directive';
import { Icon } from '../../../shared/ui/icon/icon';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-home-services-preview',
  imports: [HomeServicesPin, Icon, RouterLink, SectionHeading],
  templateUrl: './services-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeServicesPreview {
  readonly copy = homeContent.services;
  readonly services = servicos.map((service) => ({
    ...service,
    ordemLabel: service.ordem.toString().padStart(2, '0'),
  }));
}
