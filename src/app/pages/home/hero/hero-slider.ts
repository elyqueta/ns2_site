import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  input,
} from '@angular/core';
import { gsap } from 'gsap';

export interface HeroSlide {
  readonly src: string;
  readonly alt: string;
}

@Component({
  selector: 'app-home-hero-slider',
  standalone: true,
  imports: [],
  templateUrl: './hero-slider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroSlider {
  readonly images = input<readonly HeroSlide[]>([
    { src: '/images/heros/home-a-rede.webp', alt: 'Rede de nós tecnológica' },
    { src: '/images/heros/home-b-portatil.webp', alt: 'Portátil sobre circuitos' },
    { src: '/images/heros/home-c-cidade.webp', alt: 'Cidade em wireframe' },
  ]);
  readonly intervalMs = input(20000);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const images = this.images();
      if (images.length <= 1) {
        return;
      }

      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        return;
      }

      let current = 0;
      const slides = document.querySelectorAll<HTMLElement>('.hero-slide');

      const next = () => {
        const prev = current;
        current = (current + 1) % images.length;
        gsap.to(slides[prev], { autoAlpha: 0, duration: 1 });
        gsap.to(slides[current], { autoAlpha: 1, duration: 1 });
      };

      const id = setInterval(next, this.intervalMs());
      this.destroyRef.onDestroy(() => clearInterval(id));
    });
  }
}
