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
    breadcrumbLabel: { pt: 'Navegação estrutural' } satisfies LocalizedText,
    homeLabel: { pt: 'Início' } satisfies LocalizedText,
    title: { pt: 'Sobre nós' } satisfies LocalizedText,
    lead: { pt: 'Tecnologia com proximidade.' } satisfies LocalizedText,
  },
  story: {
    index: { pt: '01 — Quem somos' } satisfies LocalizedText,
    title: { pt: 'Uma história de soluções e proximidade.' } satisfies LocalizedText,
    paragraphs: [
      {
        pt: 'A NS2 Innovation nasceu do desejo de trazer soluções tecnológicas a pessoas e empresas. É fruto da competência e da elevada capacidade de resolver problemas e de gerar soluções tecnológicas inovadoras.',
      },
      {
        pt: 'Com raízes na electrónica, na tecnologia da informação e na inovação, trouxemos para o cenário comercial e industrial angolano — em constante evolução — um diferencial na relação com o cliente: profissionalismo, proximidade e satisfação, através da transparência e da evolução mútua.',
      },
    ] satisfies readonly LocalizedText[],
    imageAlt: {
      pt: 'Pessoas a colaborar em frente a computadores num ambiente de trabalho.',
    } satisfies LocalizedText,
    imageFile: { pt: 'public/images/equipa.jpeg' } satisfies LocalizedText,
  },
  philosophy: {
    index: { pt: '02 — Filosofia' } satisfies LocalizedText,
    quote: {
      pt: 'Acreditamos no resultado através do desenvolvimento das pessoas: o nosso crescimento e o dos nossos clientes são prioridade.',
    } satisfies LocalizedText,
    description: {
      pt: 'Tratamos a tecnologia como veículo de transformação e alinhamos toda a nossa operação como facilitadora, tratando não apenas o que nos é pedido, mas a experiência do cliente como um todo.',
    } satisfies LocalizedText,
  },
  values: {
    index: { pt: '03 — Os nossos valores' } satisfies LocalizedText,
    title: { pt: 'Princípios que orientam cada relação.' } satisfies LocalizedText,
    items: [
      {
        order: '01',
        title: { pt: 'Transparência' } satisfies LocalizedText,
        description: {
          pt: 'Relação clara e honesta, com propostas, limites e prazos explícitos.',
        } satisfies LocalizedText,
      },
      {
        order: '02',
        title: { pt: 'Profissionalismo' } satisfies LocalizedText,
        description: { pt: 'Método, qualidade e cumprimento.' } satisfies LocalizedText,
      },
      {
        order: '03',
        title: { pt: 'Proximidade' } satisfies LocalizedText,
        description: {
          pt: 'Atendimento personalizado por telefone, email e WhatsApp.',
        } satisfies LocalizedText,
      },
      {
        order: '04',
        title: { pt: 'Evolução mútua' } satisfies LocalizedText,
        description: {
          pt: 'Desenvolvemos as pessoas e crescemos com os nossos clientes.',
        } satisfies LocalizedText,
      },
      {
        order: '05',
        title: { pt: 'Inovação' } satisfies LocalizedText,
        description: { pt: 'Tecnologia ao serviço da transformação.' } satisfies LocalizedText,
      },
    ] satisfies readonly AboutValue[],
  },
  differentiators: {
    index: { pt: '04 — O que nos distingue' } satisfies LocalizedText,
    title: { pt: 'Soluções concentradas num só lugar.' } satisfies LocalizedText,
    items: [
      {
        icon: 'network',
        title: { pt: 'Assistência completa em TI' } satisfies LocalizedText,
        description: {
          pt: 'Da infraestrutura de servidores ao cabeamento estruturado, com rapidez de implementação e baixo custo.',
        } satisfies LocalizedText,
      },
      {
        icon: 'support',
        title: { pt: 'Atendimento personalizado' } satisfies LocalizedText,
        description: {
          pt: 'Acompanhamento por telefone, email e WhatsApp, incluindo acesso remoto.',
        } satisfies LocalizedText,
      },
      {
        icon: 'tools',
        title: { pt: 'Intervenção no local' } satisfies LocalizedText,
        description: {
          pt: 'A equipa técnica desloca-se quando a situação não se resolve à distância.',
        } satisfies LocalizedText,
      },
      {
        icon: 'laptop',
        title: { pt: 'Equipamentos de várias marcas' } satisfies LocalizedText,
        description: {
          pt: 'Equipamentos novos e seminovos das principais marcas.',
        } satisfies LocalizedText,
      },
      {
        icon: 'code',
        title: { pt: 'Desenvolvimento web à medida' } satisfies LocalizedText,
        description: {
          pt: 'Websites e sistemas web desenvolvidos para responder às necessidades de cada projecto.',
        } satisfies LocalizedText,
      },
    ] satisfies readonly Differentiator[],
  },
  process: {
    index: { pt: '05 — Como trabalhamos' } satisfies LocalizedText,
    title: { pt: 'Clareza em cada etapa.' } satisfies LocalizedText,
    steps: [
      {
        order: '01',
        title: { pt: 'Contacto' } satisfies LocalizedText,
        description: {
          pt: 'Fale-nos do que precisa por WhatsApp, telefone ou email.',
        } satisfies LocalizedText,
      },
      {
        order: '02',
        title: { pt: 'Diagnóstico' } satisfies LocalizedText,
        description: {
          pt: 'Percebemos a sua operação e levantamos as necessidades.',
        } satisfies LocalizedText,
      },
      {
        order: '03',
        title: { pt: 'Proposta' } satisfies LocalizedText,
        description: {
          pt: 'Apresentamos pacote, limites, prazos e custos de terceiros com clareza.',
        } satisfies LocalizedText,
      },
      {
        order: '04',
        title: { pt: 'Execução e suporte' } satisfies LocalizedText,
        description: {
          pt: 'Implementamos, entregamos e acompanhamos.',
        } satisfies LocalizedText,
      },
    ] satisfies readonly ProcessStep[],
  },
  cta: {
    title: { pt: 'Precisa de soluções de TI? Vamos começar.' } satisfies LocalizedText,
    description: {
      pt: 'Partilhe o seu desafio com a nossa equipa e conversamos sobre a solução adequada.',
    } satisfies LocalizedText,
    whatsappLabel: { pt: 'Falar no WhatsApp' } satisfies LocalizedText,
    contactLabel: { pt: 'Ver contactos' } satisfies LocalizedText,
    whatsappMessage: {
      pt: 'Olá! Gostaria de conversar sobre uma solução de tecnologia.',
    } satisfies LocalizedText,
  },
} as const;
