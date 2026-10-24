import { IconName } from '../shared/ui/icon/icon';
import { LocalizedText } from '../i18n/types';

interface AboutValue {
  readonly order: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

interface Differentiator {
  readonly icon: IconName;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

interface ProcessStep {
  readonly order: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export const aboutPageContent = {
  hero: {
    breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' } satisfies LocalizedText,
    homeLabel: { pt: 'Início', en: 'Home' } satisfies LocalizedText,
    title: { pt: 'Sobre nós', en: 'About us' } satisfies LocalizedText,
    lead: {
      pt: 'Tecnologia com proximidade.',
      en: 'Technology, with a personal touch.',
    } satisfies LocalizedText,
  },
  story: {
    index: { pt: 'Quem somos', en: 'Who we are' } satisfies LocalizedText,
    title: {
      pt: 'Uma história de soluções e proximidade.',
      en: 'A story of solutions and personal service.',
    } satisfies LocalizedText,
    paragraphs: [
      {
        pt: 'A NS2 Innovation nasceu do desejo de trazer soluções tecnológicas a pessoas e empresas. É fruto da competência e da elevada capacidade de resolver problemas e de gerar soluções tecnológicas inovadoras.',
        en: 'NS2 Innovation was founded to bring technology solutions to people and businesses. It grew from a strong ability to solve problems and create innovative technology solutions.',
      },
      {
        pt: 'Com raízes na electrónica, na tecnologia da informação e na inovação, trouxemos para o cenário comercial e industrial angolano — em constante evolução — um diferencial na relação com o cliente: profissionalismo, proximidade e satisfação, através da transparência e da evolução mútua.',
        en: 'With roots in electronics, information technology and innovation, we bring a distinct approach to Angola’s evolving commercial and industrial sectors: professionalism, personal service and satisfaction through transparency and shared growth.',
      },
    ] satisfies readonly LocalizedText[],
    imageAlt: {
      pt: 'Pessoas a colaborar em frente a computadores num ambiente de trabalho.',
      en: 'People collaborating in front of computers in a workplace.',
    } satisfies LocalizedText,
    imageFile: { pt: 'public/images/equipa.jpeg' } satisfies LocalizedText,
  },
  philosophy: {
    index: { pt: 'Filosofia', en: 'Our philosophy' } satisfies LocalizedText,
    quote: {
      pt: 'Acreditamos no resultado através do desenvolvimento das pessoas: o nosso crescimento e o dos nossos clientes são prioridade.',
      en: 'We believe results come from developing people: the growth of our team and our clients is a priority.',
    } satisfies LocalizedText,
    description: {
      pt: 'Tratamos a tecnologia como veículo de transformação e alinhamos toda a nossa operação como facilitadora, tratando não apenas o que nos é pedido, mas a experiência do cliente como um todo.',
      en: 'We see technology as a driver of change. Our work supports that transformation by focusing not only on the requested task, but on the client’s overall experience.',
    } satisfies LocalizedText,
  },
  values: {
    index: { pt: 'Os nossos valores', en: 'Our values' } satisfies LocalizedText,
    title: {
      pt: 'Princípios que orientam cada relação.',
      en: 'Principles that guide every relationship.',
    } satisfies LocalizedText,
    items: [
      {
        order: '01',
        title: { pt: 'Transparência', en: 'Transparency' } satisfies LocalizedText,
        description: {
          pt: 'Relação clara e honesta, com propostas, limites e prazos explícitos.',
          en: 'Clear and honest communication, with explicit proposals, scope and timelines.',
        } satisfies LocalizedText,
      },
      {
        order: '02',
        title: { pt: 'Profissionalismo', en: 'Professionalism' } satisfies LocalizedText,
        description: {
          pt: 'Método, qualidade e cumprimento.',
          en: 'Method, quality and accountability.',
        } satisfies LocalizedText,
      },
      {
        order: '03',
        title: { pt: 'Proximidade', en: 'Personal service' } satisfies LocalizedText,
        description: {
          pt: 'Atendimento personalizado por telefone, email e WhatsApp.',
          en: 'Personal support by phone, email and WhatsApp.',
        } satisfies LocalizedText,
      },
      {
        order: '04',
        title: { pt: 'Evolução mútua', en: 'Shared growth' } satisfies LocalizedText,
        description: {
          pt: 'Desenvolvemos as pessoas e crescemos com os nossos clientes.',
          en: 'We develop people and grow with our clients.',
        } satisfies LocalizedText,
      },
      {
        order: '05',
        title: { pt: 'Inovação', en: 'Innovation' } satisfies LocalizedText,
        description: {
          pt: 'Tecnologia ao serviço da transformação.',
          en: 'Technology in service of transformation.',
        } satisfies LocalizedText,
      },
    ] satisfies readonly AboutValue[],
  },
  differentiators: {
    index: {
      pt: '04 — O que nos distingue',
      en: '04 — What sets us apart',
    } satisfies LocalizedText,
    title: {
      pt: 'Soluções concentradas num só lugar.',
      en: 'Solutions brought together in one place.',
    } satisfies LocalizedText,
    items: [
      {
        icon: 'network',
        title: {
          pt: 'Assistência completa em TI',
          en: 'Comprehensive IT support',
        } satisfies LocalizedText,
        description: {
          pt: 'Da infraestrutura de servidores ao cabeamento estruturado, com rapidez de implementação e baixo custo.',
          en: 'From server infrastructure to structured cabling, with efficient implementation and cost-conscious solutions.',
        } satisfies LocalizedText,
      },
      {
        icon: 'support',
        title: { pt: 'Atendimento personalizado', en: 'Personal support' } satisfies LocalizedText,
        description: {
          pt: 'Acompanhamento por telefone, email e WhatsApp, incluindo acesso remoto.',
          en: 'Support by phone, email and WhatsApp, including remote access.',
        } satisfies LocalizedText,
      },
      {
        icon: 'tools',
        title: { pt: 'Intervenção no local', en: 'On-site support' } satisfies LocalizedText,
        description: {
          pt: 'A equipa técnica desloca-se quando a situação não se resolve à distância.',
          en: 'A technical team can visit when an issue cannot be resolved remotely.',
        } satisfies LocalizedText,
      },
      {
        icon: 'laptop',
        title: {
          pt: 'Equipamentos de várias marcas',
          en: 'Equipment from multiple brands',
        } satisfies LocalizedText,
        description: {
          pt: 'Equipamentos novos e seminovos das principais marcas.',
          en: 'New and pre-owned equipment from leading brands.',
        } satisfies LocalizedText,
      },
      {
        icon: 'code',
        title: {
          pt: 'Desenvolvimento web à medida',
          en: 'Tailored web development',
        } satisfies LocalizedText,
        description: {
          pt: 'Websites e sistemas web desenvolvidos para responder às necessidades de cada projecto.',
          en: 'Websites and web systems built around each project’s needs.',
        } satisfies LocalizedText,
      },
    ] satisfies readonly Differentiator[],
  },
  process: {
    index: { pt: 'Como trabalhamos', en: 'How we work' } satisfies LocalizedText,
    title: { pt: 'Clareza em cada etapa.', en: 'Clarity at every step.' } satisfies LocalizedText,
    steps: [
      {
        order: '01',
        title: { pt: 'Contacto', en: 'Get in touch' } satisfies LocalizedText,
        description: {
          pt: 'Fale-nos do que precisa por WhatsApp, telefone ou email.',
          en: 'Tell us what you need by WhatsApp, phone or email.',
        } satisfies LocalizedText,
      },
      {
        order: '02',
        title: { pt: 'Diagnóstico', en: 'Discovery' } satisfies LocalizedText,
        description: {
          pt: 'Percebemos a sua operação e levantamos as necessidades.',
          en: 'We learn about your operations and identify your needs.',
        } satisfies LocalizedText,
      },
      {
        order: '03',
        title: { pt: 'Proposta', en: 'Proposal' } satisfies LocalizedText,
        description: {
          pt: 'Apresentamos pacote, limites, prazos e custos de terceiros com clareza.',
          en: 'We clearly outline scope, limitations, timelines and third-party costs.',
        } satisfies LocalizedText,
      },
      {
        order: '04',
        title: { pt: 'Execução e suporte', en: 'Delivery and support' } satisfies LocalizedText,
        description: {
          pt: 'Implementamos, entregamos e acompanhamos.',
          en: 'We implement, deliver and provide follow-up support.',
        } satisfies LocalizedText,
      },
    ] satisfies readonly ProcessStep[],
  },
  cta: {
    title: {
      pt: 'Precisa de soluções de TI? Vamos começar.',
      en: 'Need IT solutions? Let’s get started.',
    } satisfies LocalizedText,
    description: {
      pt: 'Partilhe o seu desafio com a nossa equipa e conversamos sobre a solução adequada.',
      en: 'Tell us about your challenge and we will discuss a suitable solution.',
    } satisfies LocalizedText,
    whatsappLabel: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' } satisfies LocalizedText,
    contactLabel: { pt: 'Ver contactos', en: 'View contact details' } satisfies LocalizedText,
    whatsappMessage: {
      pt: 'Olá! Gostaria de conversar sobre uma solução de tecnologia.',
      en: 'Hello! I would like to discuss a technology solution.',
    } satisfies LocalizedText,
  },
} as const;
