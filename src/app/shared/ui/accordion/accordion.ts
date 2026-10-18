import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Icon } from '../icon/icon';

export interface AccordionItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

@Component({
  selector: 'app-accordion',
  imports: [Icon],
  templateUrl: './accordion.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accordion {
  readonly items = input.required<readonly AccordionItem[]>();
  readonly openItem = signal<string | null>(null);

  toggle(id: string): void {
    this.openItem.update((current) => (current === id ? null : id));
  }
}
