import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Magnetic } from '../../directives/magnetic.directive';
import { Icon } from '../icon/icon';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glass';
export type ButtonSize = 'md' | 'lg';

@Component({
  selector: 'app-button',
  imports: [Icon, Magnetic, RouterLink],
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  readonly label = input.required<string>();
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly href = input<string | null>(null);
  readonly external = input(false);
  readonly showArrow = input(false);
  readonly ariaLabel = input<string | null>(null);
  readonly extraClasses = input<string>('');
  readonly magnetic = input(false);
  readonly classes = computed(() => {
    const variantClasses: Record<ButtonVariant, string> = {
      primary: 'bg-accent text-on-accent hover:bg-accent-bright',
      secondary: 'border border-line bg-transparent text-fg hover:bg-surface-2',
      ghost: 'bg-transparent text-fg hover:bg-surface-2',
      glass:
        'border border-fg/25 bg-surface/60 text-fg backdrop-blur-md hover:bg-surface/85 dark:border-white/25 dark:bg-white/10 dark:hover:bg-white/20',
    };
    const sizeClasses: Record<ButtonSize, string> = {
      md: 'px-6 py-2.5',
      lg: 'px-8 py-3.5',
    };

    return [
      'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-button font-semibold cursor-pointer transition-colors focus-visible:outline-offset-4',
      variantClasses[this.variant()],
      sizeClasses[this.size()],
      this.extraClasses(),
    ].join(' ');
  });
}
