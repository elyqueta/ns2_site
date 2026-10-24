import { Routes } from '@angular/router';
import { pt } from './i18n/pt';

const uiKitPage = () => import('./pages/ui-kit/ui-kit').then((module) => module.UiKit);
const legalPage = () => import('./pages/legal/legal').then((module) => module.Legal);

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
    title: `${pt.pages.about} | NS2 Innovation`,
    data: { headingKey: 'pages.about', seo: { description: pt.seo.about } },
  },
  {
    path: 'servicos',
    pathMatch: 'full',
    loadComponent: () => import('./pages/servicos/servicos').then((module) => module.Servicos),
    title: `${pt.pages.services} | NS2 Innovation`,
    data: { headingKey: 'pages.services', seo: { description: pt.seo.services } },
  },
  {
    path: 'servicos/:slug',
    loadComponent: () =>
      import('./pages/servico-detalhe/servico-detalhe').then((module) => module.ServicoDetalhe),
    title: `${pt.pages.serviceDetail} | NS2 Innovation`,
    data: {
      headingKey: 'pages.serviceDetail',
      seo: { description: pt.seo.serviceDetail },
    },
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/produtos/produtos').then((module) => module.Produtos),
    title: `${pt.pages.products} | NS2 Innovation`,
    data: { headingKey: 'pages.products', seo: { description: pt.seo.products } },
  },
  {
    path: 'desenvolvimento-web',
    loadComponent: () =>
      import('./pages/desenvolvimento-web/desenvolvimento-web').then(
        (module) => module.DesenvolvimentoWeb,
      ),
    title: `${pt.pages.web} | NS2 Innovation`,
    data: { headingKey: 'pages.web', seo: { description: pt.seo.web } },
  },
  {
    path: 'desenvolvimento-web/:slug',
    loadComponent: () =>
      import('./pages/web-pacote-detalhe/web-pacote-detalhe').then(
        (module) => module.WebPacoteDetalhe,
      ),
    title: `${pt.pages.web} | NS2 Innovation`,
    data: { headingKey: 'pages.web', seo: { description: pt.seo.web } },
  },
  {
    path: 'projectos',
    loadComponent: () => import('./pages/projectos/projectos').then((module) => module.Projectos),
    title: `${pt.pages.projects} | NS2 Innovation`,
    data: { headingKey: 'pages.projects', seo: { description: pt.seo.projects } },
  },
  {
    path: 'projectos/:slug',
    loadComponent: () =>
      import('./pages/projecto-detalhe/projecto-detalhe').then(
        (module) => module.ProjectoDetalhe,
      ),
    title: `${pt.pages.projects} | NS2 Innovation`,
    data: { headingKey: 'pages.projects', seo: { description: pt.seo.projects } },
  },
  {
    path: 'noticias',
    pathMatch: 'full',
    loadComponent: () => import('./pages/noticias/noticias').then((module) => module.Noticias),
    title: `${pt.pages.news} | NS2 Innovation`,
    data: { headingKey: 'pages.news', seo: { description: pt.seo.news } },
  },
  {
    path: 'noticias/:slug',
    loadComponent: () =>
      import('./pages/noticia-detalhe/noticia-detalhe').then((module) => module.NoticiaDetalhe),
    title: `${pt.pages.newsDetail} | NS2 Innovation`,
    data: {
      headingKey: 'pages.newsDetail',
      seo: { description: pt.seo.newsDetail },
    },
  },
  {
    path: 'parceiros',
    pathMatch: 'full',
    loadComponent: () => import('./pages/parceiros/parceiros').then((module) => module.Parceiros),
    title: `${pt.pages.partners} | NS2 Innovation`,
    data: { headingKey: 'pages.partners', seo: { description: pt.seo.partners } },
  },
  {
    path: 'parceiros/:slug',
    loadComponent: () =>
      import('./pages/parceiro-detalhe/parceiro-detalhe').then((module) => module.ParceiroDetalhe),
    title: `${pt.pages.partnerDetail} | NS2 Innovation`,
    data: {
      headingKey: 'pages.partnerDetail',
      seo: { description: pt.seo.partnerDetail },
    },
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then((module) => module.Contacto),
    title: `${pt.pages.contact} | NS2 Innovation`,
    data: { headingKey: 'pages.contact', seo: { description: pt.seo.contact } },
  },
  {
    path: 'politica-de-privacidade',
    loadComponent: legalPage,
    title: `${pt.pages.privacy} | NS2 Innovation`,
    data: {
      headingKey: 'pages.privacy',
      legalDocument: 'privacy',
      seo: { description: pt.seo.privacy },
    },
  },
  {
    path: 'termos-e-condicoes',
    loadComponent: legalPage,
    title: `${pt.pages.terms} | NS2 Innovation`,
    data: {
      headingKey: 'pages.terms',
      legalDocument: 'terms',
      seo: { description: pt.seo.terms },
    },
  },
  {
    path: 'ui-kit',
    loadComponent: uiKitPage,
    title: `${pt.pages.uiKit} | NS2 Innovation`,
    data: {
      headingKey: 'pages.uiKit',
      seo: { description: pt.seo.uiKit },
      robots: 'noindex, nofollow',
    },
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((module) => module.NotFound),
    title: `${pt.pages.notFound} | NS2 Innovation`,
    data: {
      headingKey: 'pages.notFound',
      seo: { description: pt.seo.notFound },
    },
  },
];
