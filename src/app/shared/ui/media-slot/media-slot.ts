import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-media-slot',
  imports: [NgOptimizedImage],
  templateUrl: './media-slot.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaSlot {
  readonly src = input<string | null>(null);
  readonly alt = input.required<string>();
  readonly expectedFile = input.required<string>();
  readonly width = input(1200);
  readonly height = input(800);
  readonly objectPosition = input<'left' | 'center' | 'right'>('center');
  readonly loading = input<'eager' | 'lazy'>('lazy');
  readonly decoding = input<'async' | 'sync' | 'auto'>('async');
  readonly aspectRatio = input<'3/2' | '16/9'>('3/2');
}
