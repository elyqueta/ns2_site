import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type BadgeTone = 'default' | 'accent' | 'success' | 'danger';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Badge {
  readonly label = input.required<string>();
  readonly tone = input<BadgeTone>('default');
  readonly classes = computed(() => {
    const toneClasses: Record<BadgeTone, string> = {
      default: 'border-line bg-surface-2 text-fg-muted',
      accent: 'border-accent/30 bg-accent/10 text-accent-bright',
      success: 'border-success/30 bg-success/10 text-success',
      danger: 'border-danger/30 bg-danger/10 text-danger',
    };

    return [
      'inline-flex min-h-7 items-center rounded-full border px-3 py-1 text-xs font-semibold',
      toneClasses[this.tone()],
    ].join(' ');
  });
}
