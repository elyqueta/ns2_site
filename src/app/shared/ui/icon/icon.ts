import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export const iconNames = [
  'network',
  'server',
  'support',
  'tools',
  'contract',
  'consulting',
  'code',
  'rental',
  'laptop',
  'desktop',
  'component',
  'accessory',
  'chair',
  'printer',
  'whatsapp',
  'email',
  'phone',
  'pin',
  'arrow',
  'arrow-diagonal',
  'chevron-down',
  'sun',
  'moon',
  'menu',
  'close',
  'check',
  'plus',
] as const;

export type IconName = (typeof iconNames)[number];

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly label = input<string | null>(null);
}
