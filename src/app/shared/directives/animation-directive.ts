import { DestroyRef, ElementRef, inject } from '@angular/core';
import {
  AnimationBuilder,
  AnimationMode,
  AnimationRuntime,
  AnimationService,
} from '../../core/animation.service';

type ElementAnimationBuilder = (
  element: HTMLElement,
  runtime: AnimationRuntime,
  mode: AnimationMode,
) => ReturnType<AnimationBuilder>;

export interface AnimationDirectiveRegistration {
  readonly element: HTMLElement;
  readonly animation: AnimationService;
}

export function registerAnimationDirective(
  builder: ElementAnimationBuilder,
): AnimationDirectiveRegistration {
  const element = inject(ElementRef<HTMLElement>).nativeElement;
  const animation = inject(AnimationService);
  const unregister = animation.register(element, (runtime, mode) =>
    builder(element, runtime, mode),
  );
  inject(DestroyRef).onDestroy(unregister);
  return { element, animation };
}
