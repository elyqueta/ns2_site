import { LocalizedText } from '../i18n/types';

export const projectos = [
  {
    slug: 'grafica-viva',
    nome: { pt: 'Gráfica Viva' } satisfies LocalizedText,
    tipo: {
      pt: 'Website desenvolvido pela NS2 Innovation',
      en: 'Website developed by NS2 Innovation',
    } satisfies LocalizedText,
    descricao: {
      pt: 'Desenvolvimento do website da Gráfica Viva.',
      en: 'Development of the Gráfica Viva website.',
    } satisfies LocalizedText,
    url: 'https://grafica-viva-front-end-t6oc.vercel.app/',
    previewTitle: {
      pt: 'Pré-visualização do website da Gráfica Viva.',
      en: 'Preview of the Gráfica Viva website.',
    } satisfies LocalizedText,
    imagem: {
      alt: {
        pt: 'Pré-visualização do website da Gráfica Viva.',
        en: 'Preview of the Gráfica Viva website.',
      } satisfies LocalizedText,
      ficheiroEsperado: {
        pt: 'public/images/projectos/grafica-viva.webp',
      } satisfies LocalizedText,
    },
  },
] as const;

export const projectosPageContent = {
  title: { pt: 'Projectos', en: 'Projects' } satisfies LocalizedText,
  lead: {
    pt: 'Soluções web que já estão no ar.',
    en: 'Web solutions already in use.',
  } satisfies LocalizedText,
  homeLabel: { pt: 'Início', en: 'Home' } satisfies LocalizedText,
  breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' } satisfies LocalizedText,
  confirmedLabel: { pt: 'Projecto confirmado', en: 'Confirmed project' } satisfies LocalizedText,
  previewLinkLabel: {
    pt: 'Visitar o website da Gráfica Viva',
    en: 'Visit the Gráfica Viva website',
  } satisfies LocalizedText,
  ctaTitle: {
    pt: 'O seu projecto pode ser o próximo.',
    en: 'Your project could be next.',
  } satisfies LocalizedText,
  ctaDescription: {
    pt: 'Partilhe a ideia que quer tirar do papel e conversamos sobre os próximos passos.',
    en: 'Tell us about the idea you want to bring to life and we can discuss the next steps.',
  } satisfies LocalizedText,
  whatsappLabel: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' } satisfies LocalizedText,
  contactLabel: { pt: 'Ver contactos', en: 'View contact details' } satisfies LocalizedText,
  whatsappMessage: {
    pt: 'Olá! Gostaria de conversar sobre o desenvolvimento de um website.',
    en: 'Hello! I would like to discuss developing a website.',
  } satisfies LocalizedText,
} as const;
