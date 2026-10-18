export const pt = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    products: 'Produtos',
    web: 'Desenvolvimento web',
    projects: 'Projectos',
    news: 'Notícias',
    partners: 'Parceiros',
    contact: 'Contacto',
  },
  actions: {
    requestQuote: 'Pedir orçamento',
    contact: 'Falar connosco',
    whatsapp: 'WhatsApp',
    email: 'Email',
    learnMore: 'Saber mais',
    backToTop: 'Voltar ao topo',
  },
  pages: {
    home: 'Início',
    about: 'Sobre a NS2',
    services: 'Serviços',
    serviceDetail: 'Detalhe do serviço',
    products: 'Produtos',
    web: 'Desenvolvimento web',
    projects: 'Projectos',
    news: 'Notícias',
    newsDetail: 'Artigo',
    partners: 'Parceiros',
    partnerDetail: 'Detalhe do parceiro',
    contact: 'Contacto',
    privacy: 'Política de privacidade',
    terms: 'Termos e condições',
    notFound: 'Página não encontrada',
    uiKit: 'UI kit',
  },
  seo: {
    home: 'Tecnologia e comércio de produtos informáticos em Luanda, Angola.',
    about: 'Conheça a NS2 Innovation, empresa de tecnologia em Luanda, Angola.',
    services: 'Conheça os serviços de tecnologia da NS2 Innovation.',
    serviceDetail: 'Detalhes dos serviços de tecnologia da NS2 Innovation.',
    products: 'Conheça as categorias de produtos informáticos da NS2 Innovation.',
    web: 'Desenvolvimento de websites, lojas e sistemas web pela NS2 Innovation.',
    projects: 'Projectos de tecnologia desenvolvidos pela NS2 Innovation.',
    news: 'Notícias e actualizações da NS2 Innovation.',
    newsDetail: 'Notícias e actualizações da NS2 Innovation.',
    partners: 'Marcas e parceiros da NS2 Innovation.',
    partnerDetail: 'Informações sobre marcas e parceiros da NS2 Innovation.',
    contact: 'Contacte a NS2 Innovation para pedidos de informação e orçamento.',
    privacy: 'Política de privacidade da NS2 Innovation.',
    terms: 'Termos e condições da NS2 Innovation.',
    notFound: 'A página solicitada não foi encontrada.',
    uiKit: 'Página interna de desenvolvimento da NS2 Innovation.',
  },
} as const;

export type TranslationKey =
  | `nav.${keyof typeof pt.nav}`
  | `actions.${keyof typeof pt.actions}`
  | `pages.${keyof typeof pt.pages}`
  | `seo.${keyof typeof pt.seo}`;

export type PageTranslationKey = `pages.${keyof typeof pt.pages}`;
