import { LocalizedText } from '../i18n/types';

export interface Project {
  readonly slug: string;
  readonly nome: LocalizedText;
  readonly tipo: LocalizedText;
  readonly descricao: LocalizedText;
  readonly url: string;
  readonly previewTitle: LocalizedText;
  readonly desafio: LocalizedText;
  readonly solucao: LocalizedText;
  readonly resultado: LocalizedText;
  readonly tecnologias: readonly LocalizedText[];
  readonly imagem: {
    readonly claro: LocalizedText;
    readonly escuro: LocalizedText;
    readonly alt: LocalizedText;
  };
  readonly destaque?: boolean;
  readonly brevemente?: boolean;
}

export interface ProjectPageContent {
  readonly title: LocalizedText;
  readonly lead: LocalizedText;
  readonly homeLabel: LocalizedText;
  readonly breadcrumbLabel: LocalizedText;
  readonly confirmedLabel: LocalizedText;
  readonly previewLinkLabel: LocalizedText;
  readonly ctaTitle: LocalizedText;
  readonly ctaDescription: LocalizedText;
  readonly whatsappLabel: LocalizedText;
  readonly contactLabel: LocalizedText;
  readonly whatsappMessage: LocalizedText;
  readonly desafioLabel: LocalizedText;
  readonly solucaoLabel: LocalizedText;
  readonly resultadoLabel: LocalizedText;
  readonly tecnologiasLabel: LocalizedText;
  readonly verProjetoLabel: LocalizedText;
  readonly brevementeLabel: LocalizedText;
  readonly emDesenvolvimentoLabel: LocalizedText;
}

export const projectos: readonly Project[] = [
  {
    slug: 'grafica-viva',
    nome: { pt: 'Gráfica Viva', en: 'Gráfica Viva' },
    tipo: {
      pt: 'Website desenvolvido pela NS2 Innovation',
      en: 'Website developed by NS2 Innovation',
    },
    descricao: {
      pt: 'Desenvolvimento do website da Gráfica Viva.',
      en: 'Development of the Gráfica Viva website.',
    },
    url: 'https://grafica-viva-front-end-t6oc.vercel.app/',
    previewTitle: {
      pt: 'Pré-visualização do website da Gráfica Viva.',
      en: 'Preview of the Gráfica Viva website.',
    },
    desafio: {
      pt: 'A Gráfica Viva precisava de um site institucional moderno, rápido e fácil de manter, que refletisse a qualidade da sua impressão gráfica.',
      en: 'Gráfica Viva needed a modern, fast and easy-to-maintain institutional website that reflected the quality of its graphic printing.',
    },
    solucao: {
      pt: 'Desenvolvemos um site institucional com design responsivo, otimizado para motores de busca e com foco na apresentação dos serviços de impressão.',
      en: 'We developed an institutional website with responsive design, optimized for search engines and focused on presenting printing services.',
    },
    resultado: {
      pt: 'Presença online profissional com carregamento rápido e navegação intuitiva para os clientes da Gráfica Viva.',
      en: 'Professional online presence with fast loading and intuitive navigation for Gráfica Viva customers.',
    },
    tecnologias: [
      { pt: 'Next.js', en: 'Next.js' },
      { pt: 'Tailwind CSS', en: 'Tailwind CSS' },
      { pt: 'SSR/Prerender', en: 'SSR/Prerender' },
    ],
    imagem: {
      claro: {
        pt: 'public/images/projectos/grafica-viva-desktop.webp',
        en: 'public/images/projectos/grafica-viva-desktop.webp',
      },
      escuro: {
        pt: 'public/images/projectos/grafica-viva-desktop.webp',
        en: 'public/images/projectos/grafica-viva-desktop.webp',
      },
      alt: {
        pt: 'Pré-visualização do website da Gráfica Viva.',
        en: 'Preview of the Gráfica Viva website.',
      },
    },
    destaque: true,
  },
  {
    slug: 'foco',
    nome: { pt: 'Foco', en: 'Foco' },
    tipo: {
      pt: 'Plataforma de gestão de tarefas',
      en: 'Task management platform',
    },
    descricao: {
      pt: 'Plataforma de gestão de tarefas pessoais, profissionais e colectivas.',
      en: 'Task management platform for personal, professional and collective tasks.',
    },
    url: 'https://foco-umber-xi.vercel.app/',
    previewTitle: {
      pt: 'Pré-visualização da plataforma Foco.',
      en: 'Preview of the Foco platform.',
    },
    desafio: {
      pt: 'Precisava de uma ferramenta simples e intuitiva para organizar tarefas pessoais e profissionais, com suporte a tema claro e escuro.',
      en: 'Needed a simple and intuitive tool to organize personal and professional tasks, with light and dark theme support.',
    },
    solucao: {
      pt: 'Criámos uma plataforma de gestão de tarefas com interface limpa, modo claro/escuro e organização por projetos e etiquetas.',
      en: 'We created a task management platform with a clean interface, light/dark mode and organization by projects and tags.',
    },
    resultado: {
      pt: 'Plataforma funcional e acessível em qualquer dispositivo, com organização eficiente de tarefas.',
      en: 'Functional and accessible platform on any device, with efficient task organization.',
    },
    tecnologias: [
      { pt: 'Angular', en: 'Angular' },
      { pt: 'Tailwind CSS', en: 'Tailwind CSS' },
    ],
    imagem: {
      claro: {
        pt: 'https://foco-umber-xi.vercel.app/',
        en: 'https://foco-umber-xi.vercel.app/',
      },
      escuro: {
        pt: 'https://foco-umber-xi.vercel.app/',
        en: 'https://foco-umber-xi.vercel.app/',
      },
      alt: {
        pt: 'Pré-visualização da plataforma Foco.',
        en: 'Preview of the Foco platform.',
      },
    },
  },
  {
    slug: 'brevemente-01',
    nome: { pt: 'Em breve', en: 'Coming soon' },
    tipo: {
      pt: 'Em desenvolvimento',
      en: 'In development',
    },
    descricao: {
      pt: 'Novo projeto em desenvolvimento pela NS2 Innovation.',
      en: 'New project under development by NS2 Innovation.',
    },
    url: '#',
    previewTitle: {
      pt: 'Em desenvolvimento',
      en: 'In development',
    },
    desafio: {
      pt: '',
      en: '',
    },
    solucao: {
      pt: '',
      en: '',
    },
    resultado: {
      pt: '',
      en: '',
    },
    tecnologias: [],
    imagem: {
      claro: {
        pt: '',
        en: '',
      },
      escuro: {
        pt: '',
        en: '',
      },
      alt: {
        pt: 'Em desenvolvimento',
        en: 'In development',
      },
    },
    brevemente: true,
  },
  {
    slug: 'brevemente-02',
    nome: { pt: 'Em breve', en: 'Coming soon' },
    tipo: {
      pt: 'Em desenvolvimento',
      en: 'In development',
    },
    descricao: {
      pt: 'Novo projeto em desenvolvimento pela NS2 Innovation.',
      en: 'New project under development by NS2 Innovation.',
    },
    url: '#',
    previewTitle: {
      pt: 'Em desenvolvimento',
      en: 'In development',
    },
    desafio: {
      pt: '',
      en: '',
    },
    solucao: {
      pt: '',
      en: '',
    },
    resultado: {
      pt: '',
      en: '',
    },
    tecnologias: [],
    imagem: {
      claro: {
        pt: '',
        en: '',
      },
      escuro: {
        pt: '',
        en: '',
      },
      alt: {
        pt: 'Em desenvolvimento',
        en: 'In development',
      },
    },
    brevemente: true,
  },
];

export const projectosPageContent: ProjectPageContent = {
  title: { pt: 'Projectos', en: 'Projects' },
  lead: {
    pt: 'Soluções web que já estão no ar.',
    en: 'Web solutions already in use.',
  },
  homeLabel: { pt: 'Início', en: 'Home' },
  breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' },
  confirmedLabel: { pt: 'No ar', en: 'Live' },
  previewLinkLabel: {
    pt: 'Visitar o website da Gráfica Viva',
    en: 'Visit the Gráfica Viva website',
  },
  ctaTitle: {
    pt: 'O seu projecto pode ser o próximo.',
    en: 'Your project could be next.',
  },
  ctaDescription: {
    pt: 'Partilhe a ideia que quer tirar do papel e conversamos sobre os próximos passos.',
    en: 'Tell us about the idea you want to bring to life and we can discuss the next steps.',
  },
  whatsappLabel: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' },
  contactLabel: { pt: 'Ver contactos', en: 'View contact details' },
  whatsappMessage: {
    pt: 'Olá! Gostaria de conversar sobre o desenvolvimento de um website.',
    en: 'Hello! I would like to discuss developing a website.',
  },
  desafioLabel: { pt: 'Desafio', en: 'Challenge' },
  solucaoLabel: { pt: 'Solução', en: 'Solution' },
  resultadoLabel: { pt: 'Resultado', en: 'Result' },
  tecnologiasLabel: { pt: 'Tecnologias', en: 'Technologies' },
  verProjetoLabel: { pt: 'Ver projeto', en: 'View project' },
  brevementeLabel: { pt: 'Em breve', en: 'Coming soon' },
  emDesenvolvimentoLabel: { pt: 'Em desenvolvimento', en: 'In development' },
} as const;
