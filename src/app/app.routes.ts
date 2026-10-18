import { Routes } from '@angular/router';
import { pt } from './i18n/pt';

const minimalPage = () =>
  import('./pages/minimal-page/minimal-page').then((module) => module.MinimalPage);
const uiKitPage = () => import('./pages/ui-kit/ui-kit').then((module) => module.UiKit);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then((module) => module.Home),
    title: pt.seo.homeTitle,
    data: { headingKey: 'pages.home', seo: { description: pt.seo.home } },
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre').then((module) => module.Sobre),
    title: pt.pages.about,
    data: { headingKey: 'pages.about', seo: { description: pt.seo.about } },
  },
  {
    path: 'servicos',
    pathMatch: 'full',
    loadComponent: () => import('./pages/servicos/servicos').then((module) => module.Servicos),
    title: pt.pages.services,
    data: { headingKey: 'pages.services', seo: { description: pt.seo.services } },
  },
  {
    path: 'servicos/:slug',
    loadComponent: () =>
      import('./pages/servico-detalhe/servico-detalhe').then((module) => module.ServicoDetalhe),
    title: pt.pages.serviceDetail,
    data: {
      headingKey: 'pages.serviceDetail',
      seo: { description: pt.seo.serviceDetail },
    },
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/produtos/produtos').then((module) => module.Produtos),
    title: pt.pages.products,
    data: { headingKey: 'pages.products', seo: { description: pt.seo.products } },
  },
  {
    path: 'desenvolvimento-web',
    loadComponent: () =>
      import('./pages/desenvolvimento-web/desenvolvimento-web').then(
        (module) => module.DesenvolvimentoWeb,
      ),
    title: pt.pages.web,
    data: { headingKey: 'pages.web', seo: { description: pt.seo.web } },
  },
  {
    path: 'projectos',
    loadComponent: () => import('./pages/projectos/projectos').then((module) => module.Projectos),
    title: pt.pages.projects,
    data: { headingKey: 'pages.projects', seo: { description: pt.seo.projects } },
  },
  {
    path: 'noticias',
    pathMatch: 'full',
    loadComponent: () => import('./pages/noticias/noticias').then((module) => module.Noticias),
    title: pt.pages.news,
    data: { headingKey: 'pages.news', seo: { description: pt.seo.news } },
  },
  {
    path: 'noticias/:slug',
    loadComponent: () =>
      import('./pages/noticia-detalhe/noticia-detalhe').then((module) => module.NoticiaDetalhe),
    title: pt.pages.newsDetail,
    data: {
      headingKey: 'pages.newsDetail',
      seo: { description: pt.seo.newsDetail },
    },
  },
  {
    path: 'parceiros',
    pathMatch: 'full',
    loadComponent: minimalPage,
    title: pt.pages.partners,
    data: { headingKey: 'pages.partners', seo: { description: pt.seo.partners } },
  },
  {
    path: 'parceiros/:slug',
    loadComponent: minimalPage,
    title: pt.pages.partnerDetail,
    data: {
      headingKey: 'pages.partnerDetail',
      seo: { description: pt.seo.partnerDetail },
    },
  },
  {
    path: 'contacto',
    loadComponent: minimalPage,
    title: pt.pages.contact,
    data: { headingKey: 'pages.contact', seo: { description: pt.seo.contact } },
  },
  {
    path: 'politica-de-privacidade',
    loadComponent: minimalPage,
    title: pt.pages.privacy,
    data: { headingKey: 'pages.privacy', seo: { description: pt.seo.privacy } },
  },
  {
    path: 'termos-e-condicoes',
    loadComponent: minimalPage,
    title: pt.pages.terms,
    data: { headingKey: 'pages.terms', seo: { description: pt.seo.terms } },
  },
  {
    path: 'ui-kit',
    loadComponent: uiKitPage,
    title: pt.pages.uiKit,
    data: {
      headingKey: 'pages.uiKit',
      seo: { description: pt.seo.uiKit },
      robots: 'noindex, nofollow',
    },
  },
  {
    path: '**',
    loadComponent: minimalPage,
    title: pt.pages.notFound,
    data: {
      headingKey: 'pages.notFound',
      seo: { description: pt.seo.notFound },
    },
  },
];
