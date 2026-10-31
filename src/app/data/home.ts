import { LocalizedText, LocalizedWords } from '../i18n/types';
import { MarqueeItem } from '../shared/ui/marquee/marquee';

export interface HomeMetric {
  readonly prefix: LocalizedText | null;
  readonly value: number;
  readonly suffix: string;
  readonly description: LocalizedText;
}

export const homeContent = {
  hero: {
    eyebrow: {
      pt: 'Tecnologia e comércio de produtos informáticos.',
      en: 'Technology and computer products.',
    } satisfies LocalizedText,
    titleBefore: { pt: 'Tecnologia que', en: 'Technology that' } satisfies LocalizedText,
    titleHighlightWords: {
      pt: ['impulsiona', 'movimenta', 'acelera', 'potencia'],
      en: ['moves', 'propels', 'drives', 'powers'],
    } satisfies LocalizedWords,
    titleAfter: { pt: 'o seu negócio.', en: 'your business forward.' } satisfies LocalizedText,
    description: {
      pt: 'Infraestrutura de redes, suporte de TI, equipamentos informáticos, websites e sistemas web. Tudo num só parceiro, em Luanda.',
      en: 'Network infrastructure, IT support, computer equipment, websites and web systems. One technology partner in Luanda.',
    } satisfies LocalizedText,
    quoteLabel: { pt: 'Pedir orçamento', en: 'Request a quote' } satisfies LocalizedText,
    servicesLabel: { pt: 'Ver serviços', en: 'Explore services' } satisfies LocalizedText,
    scrollLabel: { pt: 'Descer para explorar', en: 'Scroll to explore' } satisfies LocalizedText,
    whatsappMessage: {
      pt: 'Olá! Gostaria de pedir um orçamento.',
      en: 'Hello! I would like to request a quote.',
    } satisfies LocalizedText,
  },
    brands: {
      label: {
        pt: 'Marcas de produtos referidas pela NS2 Innovation',
        en: 'Product brands mentioned by NS2 Innovation',
      } satisfies LocalizedText,
      items: [
        { type: 'image', src: '/images/parceiros/dell.webp', alt: 'Dell' },
        { type: 'image', src: '/images/parceiros/lenovo.webp', alt: 'Lenovo' },
        { type: 'image', src: '/images/parceiros/apple.webp', alt: 'Apple' },
        { type: 'image', src: '/images/parceiros/samsung.webp', alt: 'Samsung' },
        { type: 'image', src: '/images/parceiros/multilaser.webp', alt: 'Multilaser' },
      ] satisfies readonly MarqueeItem[],
    },
  about: {
    index: { pt: 'Quem somos', en: 'About us' } satisfies LocalizedText,
    title: {
      pt: 'Tecnologia com proximidade.',
      en: 'Technology, with a personal touch.',
    } satisfies LocalizedText,
    description: {
      pt: 'A NS2 Innovation nasceu do desejo de trazer soluções tecnológicas a pessoas e empresas. Com raízes na electrónica, na tecnologia da informação e na inovação, trabalhamos com profissionalismo, proximidade e transparência.',
      en: 'NS2 Innovation was founded to bring technology solutions to people and businesses. With roots in electronics, information technology and innovation, we work with professionalism, personal service and transparency.',
    } satisfies LocalizedText,
    linkLabel: { pt: 'Conheça a NS2', en: 'Get to know NS2' } satisfies LocalizedText,
    imageAlt: {
      pt: 'Duas pessoas à secretária com um portátil, ligadas a parceiros especializados',
      en: 'Two people at a desk with a laptop, connected to specialized partners',
    } satisfies LocalizedText,
    expectedFile: { pt: 'public/images/equipa.webp' } satisfies LocalizedText,
  },
  services: {
    index: { pt: 'O que fazemos', en: 'What we do' } satisfies LocalizedText,
    title: {
      pt: 'Tecnologia para cada desafio.',
      en: 'Technology for every challenge.',
    } satisfies LocalizedText,
    description: {
      pt: 'Assistência completa a toda a procura de TI, de servidores a cabeamento estruturado. Concentramos as soluções num só lugar.',
      en: 'Comprehensive IT support, from servers to structured cabling. We bring solutions together in one place.',
    } satisfies LocalizedText,
    linkLabel: { pt: 'Ver todos os serviços', en: 'View all services' } satisfies LocalizedText,
    cardLinkLabel: { pt: 'Saber mais', en: 'Learn more' } satisfies LocalizedText,
    previousLabel: { pt: 'Serviço anterior', en: 'Previous service' } satisfies LocalizedText,
    nextLabel: { pt: 'Serviço seguinte', en: 'Next service' } satisfies LocalizedText,
  },
  web: {
    index: { pt: 'Desenvolvimento web', en: 'Web development' } satisfies LocalizedText,
    title: {
      pt: 'Uma presença digital à sua medida.',
      en: 'A digital presence built around you.',
    } satisfies LocalizedText,
    description: {
      pt: 'Do site institucional ao sistema de gestão: desenhamos, desenvolvemos e publicamos soluções web rápidas, seguras e preparadas para crescer com o seu negócio.',
      en: 'From company websites to management systems, we design, build and launch fast, secure web solutions ready to grow with your business.',
    } satisfies LocalizedText,
    linkLabel: {
      pt: 'Explorar desenvolvimento web',
      en: 'Explore web development',
    } satisfies LocalizedText,
    packageLabel: { pt: 'Pacote', en: 'Package' } satisfies LocalizedText,
    startingAt: { pt: 'A partir de', en: 'Starting at' } satisfies LocalizedText,
    disclaimer: {
      pt: 'Valores de desenvolvimento, indicativos e sujeitos a confirmação em proposta. Domínio, alojamento, correio profissional, pagamentos online e integrações externas são orçamentados à parte.',
      en: 'Development prices are indicative and subject to confirmation in a proposal. Domains, hosting, professional email, online payments and external integrations are quoted separately.',
    } satisfies LocalizedText,
  },
  products: {
    index: { pt: 'Produtos', en: 'Products' } satisfies LocalizedText,
    title: {
      pt: 'Tecnologia para si e para o seu negócio.',
      en: 'Technology for you and your business.',
    } satisfies LocalizedText,
    description: {
      pt: 'Adquira os componentes tecnológicos de que precisa para si e para o seu negócio, aqui na NS2 Innovation.',
      en: 'Find the technology products you need for yourself or your business at NS2 Innovation.',
    } satisfies LocalizedText,
    linkLabel: {
      pt: 'Ver categorias de produtos',
      en: 'View product categories',
    } satisfies LocalizedText,
    cardLinkLabel: { pt: 'Saber mais', en: 'Learn more' } satisfies LocalizedText,
  },
  process: {
    index: { pt: 'Como trabalhamos', en: 'How we work' } satisfies LocalizedText,
    title: { pt: 'Clareza em cada etapa.', en: 'Clarity at every step.' } satisfies LocalizedText,
    steps: [
      {
        title: { pt: 'Contacto', en: 'Get in touch' } satisfies LocalizedText,
        description: {
          pt: 'Fale-nos do que precisa por WhatsApp, telefone ou email.',
          en: 'Tell us what you need by WhatsApp, phone or email.',
        } satisfies LocalizedText,
      },
      {
        title: { pt: 'Diagnóstico', en: 'Discovery' } satisfies LocalizedText,
        description: {
          pt: 'Percebemos a sua operação e levantamos as necessidades.',
          en: 'We learn about your operations and identify your needs.',
        } satisfies LocalizedText,
      },
      {
        title: { pt: 'Proposta', en: 'Proposal' } satisfies LocalizedText,
        description: {
          pt: 'Pacote, limites, prazos e custos de terceiros, tudo claro.',
          en: 'Clear details on scope, limitations, timelines and third-party costs.',
        } satisfies LocalizedText,
      },
      {
        title: { pt: 'Execução e suporte', en: 'Delivery and support' } satisfies LocalizedText,
        description: {
          pt: 'Implementamos, entregamos e acompanhamos.',
          en: 'We implement, deliver and provide follow-up support.',
        } satisfies LocalizedText,
      },
    ],
  },
  values: {
    index: { pt: 'Porquê a NS2', en: 'Why NS2' } satisfies LocalizedText,
    title: {
      pt: 'Uma relação feita para evoluir.',
      en: 'A relationship built to grow.',
    } satisfies LocalizedText,
    items: [
      {
        title: { pt: 'Transparência', en: 'Transparency' } satisfies LocalizedText,
        description: {
          pt: 'Relação clara e honesta, com limites e prazos explícitos.',
          en: 'Clear, honest communication with explicit scope and timelines.',
        } satisfies LocalizedText,
      },
      {
        title: { pt: 'Profissionalismo', en: 'Professionalism' } satisfies LocalizedText,
        description: {
          pt: 'Método, qualidade e cumprimento.',
          en: 'Method, quality and accountability.',
        } satisfies LocalizedText,
      },
      {
        title: { pt: 'Proximidade', en: 'Personal service' } satisfies LocalizedText,
        description: {
          pt: 'Atendimento personalizado por telefone, email e WhatsApp.',
          en: 'Personal support by phone, email and WhatsApp.',
        } satisfies LocalizedText,
      },
      {
        title: { pt: 'Evolução mútua', en: 'Shared growth' } satisfies LocalizedText,
        description: {
          pt: 'Acreditamos no desenvolvimento das pessoas e crescemos com os nossos clientes.',
          en: 'We believe in people’s development and grow alongside our clients.',
        } satisfies LocalizedText,
      },
      {
        title: { pt: 'Inovação', en: 'Innovation' } satisfies LocalizedText,
        description: {
          pt: 'Tecnologia ao serviço da transformação.',
          en: 'Technology driving transformation.',
        } satisfies LocalizedText,
      },
    ],
  },
  testimonials: {
    index: { pt: 'Testemunhos', en: 'Testimonials' } satisfies LocalizedText,
    title: {
      pt: 'Relações que merecem ser ouvidas.',
      en: 'Relationships worth hearing about.',
    } satisfies LocalizedText,
    description: {
      pt: 'Experiências de quem encontrou na NS2 um parceiro próximo para os seus desafios tecnológicos.',
      en: 'Experiences from people who found a close partner for their technology challenges in NS2.',
    } satisfies LocalizedText,
    previousLabel: { pt: 'Testemunho anterior', en: 'Previous testimonial' } satisfies LocalizedText,
    nextLabel: { pt: 'Testemunho seguinte', en: 'Next testimonial' } satisfies LocalizedText,
    items: [
      {
        name: 'Osvaldo Bravo',
        role: { pt: 'Comerciante, Bravo Business', en: 'Merchant, Bravo Business' } satisfies LocalizedText,
        quote: {
          pt: 'A NS2 desenvolveu o marketplace da Bravo Business, uma plataforma simples que gere produtos e categorias e fecha os pedidos pelo WhatsApp. Destaco a simplicidade, a rapidez e o acompanhamento ao longo do trabalho.',
          en: 'NS2 developed the Bravo Business marketplace, a simple platform that manages products and categories and closes orders through WhatsApp. I value the simplicity, speed and support throughout the work.',
        } satisfies LocalizedText,
        imageSrc: '/images/servicos/desenvolvimento-web.webp',
      },
      {
        name: 'Mateus Sassapa',
        role: { pt: 'Comercial', en: 'Commercial' } satisfies LocalizedText,
        quote: {
          pt: 'Destaco a qualidade do trabalho e o cumprimento dos prazos. O suporte da NS2 também faz a diferença depois da entrega.',
          en: 'I value the quality of the work and the commitment to deadlines. NS2 support also makes a difference after delivery.',
        } satisfies LocalizedText,
        imageSrc: '/images/servicos/sistemas-software.webp',
      },
      {
        name: 'Elizandra Queta',
        role: { pt: 'Empreendedora e parceira da NS2', en: 'Entrepreneur and NS2 partner' } satisfies LocalizedText,
        quote: {
          pt: 'Avalio muito bem a parceria com a NS2. O profissionalismo, a clareza e a proximidade no atendimento tornam o trabalho mais simples e seguro.',
          en: 'I rate the partnership with NS2 very highly. Their professionalism, clarity and close support make the work simpler and more reassuring.',
        } satisfies LocalizedText,
        imageSrc: '/images/servicos/sistemas-software.webp',
      },
    ],
  },
  news: {
    index: { pt: 'Notícias', en: 'News' } satisfies LocalizedText,
    title: {
      pt: 'Ideias para acompanhar a tecnologia.',
      en: 'Ideas to keep up with technology.',
    } satisfies LocalizedText,
    linkLabel: { pt: 'Ver todas as notícias', en: 'View all news' } satisfies LocalizedText,
    readLabel: { pt: 'Ler artigo', en: 'Read article' } satisfies LocalizedText,
    minutesLabel: { pt: 'min de leitura', en: 'min read' } satisfies LocalizedText,
  },
  metrics: {
    label: { pt: 'A NS2 em números', en: 'NS2 in numbers' } satisfies LocalizedText,
    items: [
      {
        prefix: { pt: 'Mais de', en: 'Over' } satisfies LocalizedText,
        value: 2,
        suffix: '',
        description: { pt: 'anos de experiência', en: 'years of experience' } satisfies LocalizedText,
      } satisfies HomeMetric,
      {
        prefix: { pt: 'Mais de', en: 'Over' } satisfies LocalizedText,
        value: 10,
        suffix: '',
        description: { pt: 'empresas confiaram em nós', en: 'companies have trusted us' } satisfies LocalizedText,
      } satisfies HomeMetric,
      {
        prefix: null,
        value: 99,
        suffix: '%',
        description: { pt: 'de satisfação dos clientes', en: 'client satisfaction' } satisfies LocalizedText,
      } satisfies HomeMetric,
    ] satisfies readonly HomeMetric[],
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
