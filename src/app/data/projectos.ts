import { LocalizedText } from '../i18n/types';

export const projectos = [
  {
    slug: 'grafica-viva',
    nome: { pt: 'Gráfica Viva' } satisfies LocalizedText,
    tipo: { pt: 'Website desenvolvido pela NS2 Innovation' } satisfies LocalizedText,
    descricao: {
      pt: 'Desenvolvimento do website da Gráfica Viva.',
    } satisfies LocalizedText,
    url: 'https://grafica-viva-front-end-t6oc.vercel.app/',
    previewTitle: {
      pt: 'Pré-visualização do website da Gráfica Viva.',
    } satisfies LocalizedText,
    imagem: {
      alt: {
        pt: 'Pré-visualização do website da Gráfica Viva.',
      } satisfies LocalizedText,
      ficheiroEsperado: {
        pt: 'public/images/projectos/grafica-viva.webp',
      } satisfies LocalizedText,
    },
  },
] as const;

export const projectosPageContent = {
  title: { pt: 'Projectos' } satisfies LocalizedText,
  lead: { pt: 'Soluções web que já estão no ar.' } satisfies LocalizedText,
  homeLabel: { pt: 'Início' } satisfies LocalizedText,
  breadcrumbLabel: { pt: 'Navegação estrutural' } satisfies LocalizedText,
  confirmedLabel: { pt: 'Projecto confirmado' } satisfies LocalizedText,
  previewLinkLabel: {
    pt: 'Visitar o website da Gráfica Viva',
  } satisfies LocalizedText,
  ctaTitle: {
    pt: 'O seu projecto pode ser o próximo.',
  } satisfies LocalizedText,
  ctaDescription: {
    pt: 'Partilhe a ideia que quer tirar do papel e conversamos sobre os próximos passos.',
  } satisfies LocalizedText,
  whatsappLabel: { pt: 'Falar no WhatsApp' } satisfies LocalizedText,
  contactLabel: { pt: 'Ver contactos' } satisfies LocalizedText,
  whatsappMessage: {
    pt: 'Olá! Gostaria de conversar sobre o desenvolvimento de um website.',
  } satisfies LocalizedText,
} as const;
