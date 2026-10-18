import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-cta-band',
  imports: [Icon, RouterLink],
  templateUrl: './cta-band.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBand {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly whatsappUrl = input.required<string>();
  readonly whatsappLabel = input.required<string>();
  readonly contactUrl = input('/contacto');
  readonly contactLabel = input.required<string>();
}
