import { RenderMode, ServerRoute } from '@angular/ssr';
import { noticias } from './data/noticias';
import { parceiros } from './data/parceiros';
import { servicos } from './data/servicos';
import { projectos } from './data/projectos';
import { webPacotesDetalhe } from './data/web-pacote-detalhe';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'servicos/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return servicos
        .filter((service) => service.slug !== 'desenvolvimento-web')
        .map((service) => ({ slug: service.slug }));
    },
  },
  {
    path: 'noticias/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return noticias.map((article) => ({ slug: article.slug }));
    },
  },
  {
    path: 'parceiros/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return parceiros.map((partner) => ({ slug: partner.slug }));
    },
  },
  {
    path: 'projectos/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return projectos.map((project) => ({ slug: project.slug }));
    },
  },
  {
    path: 'desenvolvimento-web/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return webPacotesDetalhe.map((item) => ({ slug: item.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
