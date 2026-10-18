import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'servicos/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [];
    },
  },
  {
    path: 'noticias/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [];
    },
  },
  {
    path: 'parceiros/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
