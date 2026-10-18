import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export type FormFieldKind = 'input' | 'textarea' | 'select';

export interface FormFieldOption {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormField {
  readonly fieldId = input.required<string>();
  readonly label = input.required<string>();
  readonly kind = input<FormFieldKind>('input');
  readonly type = input('text');
  readonly value = input('');
  readonly placeholder = input('');
  readonly helpText = input<string | null>(null);
  readonly error = input<string | null>(null);
  readonly required = input(false);
  readonly rows = input(4);
  readonly options = input<readonly FormFieldOption[]>([]);
  readonly valueChange = output<string>();
  readonly helpId = computed(() => `${this.fieldId()}-help`);
  readonly errorId = computed(() => `${this.fieldId()}-error`);
  readonly invalid = computed(() => (this.error() ? 'true' : null));
  readonly describedBy = computed(() => {
    const references = [];
    if (this.helpText()) {
      references.push(this.helpId());
    }
    if (this.error()) {
      references.push(this.errorId());
    }
    return references.join(' ') || null;
  });

  updateValue(event: Event): void {
    const target = event.target;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement
    ) {
      this.valueChange.emit(target.value);
    }
  }
}
