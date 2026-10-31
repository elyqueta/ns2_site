import { IconName } from '../shared/ui/icon/icon';
import { LocalizedText } from '../i18n/types';

export interface Servico {
  readonly slug: string;
  readonly titulo: LocalizedText;
  readonly resumo: LocalizedText;
  readonly descricao: readonly LocalizedText[];
  readonly inclui: readonly LocalizedText[];
  readonly paraQuem: LocalizedText;
  readonly icone: IconName;
  readonly ordem: number;
  readonly ctaMensagem: LocalizedText;
  readonly href: string;
  readonly imagem: {
    readonly alt: LocalizedText;
    readonly ficheiroEsperado: LocalizedText;
  };
  readonly faq?: readonly {
    readonly pergunta: LocalizedText;
    readonly resposta: LocalizedText;
  }[];
}

export const servicesPageContent = {
  breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' } satisfies LocalizedText,
  homeLabel: { pt: 'Início', en: 'Home' } satisfies LocalizedText,
  title: { pt: 'Serviços', en: 'Services' } satisfies LocalizedText,
  lead: {
    pt: 'Assistência completa a toda a procura de TI, de servidores a cabeamento estruturado. Concentramos as soluções num só lugar, com rapidez de implementação e baixo custo.',
    en: 'Comprehensive IT support, from servers to structured cabling. We bring solutions together in one place with efficient implementation and cost-conscious planning.',
  } satisfies LocalizedText,
  sectionIndex: { pt: 'Serviços', en: 'Services' } satisfies LocalizedText,
  listTitle: {
    pt: 'Assistência completa a toda a procura de TI.',
    en: 'Comprehensive support for your IT needs.',
  } satisfies LocalizedText,
  detailLink: { pt: 'Saber mais', en: 'Learn more' } satisfies LocalizedText,
  includesLabel: { pt: 'O que inclui', en: 'What is included' } satisfies LocalizedText,
  audienceLabel: { pt: 'Para quem', en: 'Who it is for' } satisfies LocalizedText,
  relatedLabel: { pt: 'Serviços relacionados', en: 'Related services' } satisfies LocalizedText,
  previousLabel: { pt: 'Serviço anterior', en: 'Previous service' } satisfies LocalizedText,
  nextLabel: { pt: 'Serviço seguinte', en: 'Next service' } satisfies LocalizedText,
  allServicesLabel: { pt: 'Todos os serviços', en: 'All services' } satisfies LocalizedText,
  quoteLabel: { pt: 'Pedir orçamento', en: 'Request a quote' } satisfies LocalizedText,
  whatsappLabel: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' } satisfies LocalizedText,
  contactLabel: { pt: 'Ver contactos', en: 'View contact details' } satisfies LocalizedText,
  generalCtaTitle: {
    pt: 'Precisa de soluções de TI? Vamos começar.',
    en: 'Need IT solutions? Let’s get started.',
  } satisfies LocalizedText,
  webCtaLabel: {
    pt: 'Conheça o desenvolvimento web',
    en: 'Explore web development',
  } satisfies LocalizedText,
  notFoundTitle: { pt: 'Serviço não encontrado', en: 'Service not found' } satisfies LocalizedText,
  notFoundDescription: {
    pt: 'O serviço que procura não está disponível. Consulte a lista de serviços.',
    en: 'The service you are looking for is unavailable. Browse the full services list.',
  } satisfies LocalizedText,
} as const;

export const servicos: readonly Servico[] = [
  {
    slug: 'infraestrutura-redes-servidores',
    titulo: { pt: 'Infraestrutura de redes e servidores', en: 'Network and server infrastructure' },
    resumo: {
      pt: 'Projecto, instalação e manutenção da rede e dos servidores da sua empresa.',
      en: 'Design, installation and maintenance of your company’s network and servers.',
    },
    descricao: [
      {
        pt: 'Realizamos a instalação e a manutenção da estrutura de rede dentro da sua empresa.',
        en: 'We install and maintain your company’s network infrastructure.',
      },
      {
        pt: 'Construímos e revemos a rede local de forma completa, contemplando o layout e a rede eléctrica, para chegar à melhor estruturação e ao melhor custo-benefício.',
        en: 'We build and review local networks, including layout and electrical planning, to create a well-structured and cost-conscious solution.',
      },
    ],
    inclui: [
      { pt: 'Idealização do projecto', en: 'Project planning' },
      {
        pt: 'Instalação e configuração de servidores',
        en: 'Server installation and configuration',
      },
      {
        pt: 'Implementação de rede de cabeamento estruturado',
        en: 'Structured cabling installation',
      },
      { pt: 'Rede sem fios (Wi-Fi)', en: 'Wireless network (Wi-Fi)' },
      { pt: 'Organização de racks', en: 'Rack organisation' },
      { pt: 'Instalação de pontos de acesso', en: 'Access point installation' },
    ],
    paraQuem: {
      pt: 'Empresas, escritórios, instituições e espaços comerciais que precisam de uma rede fiável e organizada.',
      en: 'Businesses, offices, institutions and commercial spaces that need a reliable, organised network.',
    },
    icone: 'network',
    ordem: 1,
    ctaMensagem: {
      pt: 'Olá! Gostaria de um orçamento para infraestrutura de redes e servidores.',
      en: 'Hello! I would like a quote for network and server infrastructure.',
    },
    href: '/servicos/infraestrutura-redes-servidores',
    imagem: {
      alt: {
        pt: 'Dois técnicos a instalar cabeamento estruturado num rack',
        en: 'Two technicians installing structured cabling in a rack',
      },
      ficheiroEsperado: { pt: 'public/images/servicos/infraestrutura-redes-servidores.webp' },
    },
  },
  {
    slug: 'suporte-remoto',
    titulo: { pt: 'Suporte remoto', en: 'Remote support' },
    resumo: {
      pt: 'Atendimento rápido por telefone, email e WhatsApp, com acesso remoto.',
      en: 'Responsive support by phone, email and WhatsApp, including remote access.',
    },
    descricao: [
      {
        pt: 'Disponibilizamos atendimento personalizado através de vários canais: telefone, email e WhatsApp.',
        en: 'We provide personalised support through phone, email and WhatsApp.',
      },
      {
        pt: 'Além disso, realizamos acesso remoto para compreender melhor a sua dúvida. Respondemos ao seu chamado rapidamente, com o objectivo de resolver o problema com agilidade e eficácia.',
        en: 'We can also access equipment remotely to better understand the issue. We respond promptly and aim to resolve problems efficiently.',
      },
    ],
    inclui: [
      {
        pt: 'Atendimento por telefone, email e WhatsApp',
        en: 'Support by phone, email and WhatsApp',
      },
      { pt: 'Acesso remoto ao equipamento', en: 'Remote access to equipment' },
      { pt: 'Resposta rápida a chamados', en: 'Prompt response to support requests' },
    ],
    paraQuem: {
      pt: 'Quem precisa de resolver problemas de TI sem esperar por uma deslocação.',
      en: 'Anyone who needs IT issues resolved without waiting for an on-site visit.',
    },
    icone: 'support',
    ordem: 2,
    ctaMensagem: {
      pt: 'Olá! Preciso de suporte remoto de TI.',
      en: 'Hello! I need remote IT support.',
    },
    href: '/servicos/suporte-remoto',
    imagem: {
      alt: {
        pt: 'Técnico com auscultadores a dar suporte remoto num portátil',
        en: 'Technician with headphones providing remote support on a laptop',
      },
      ficheiroEsperado: { pt: 'public/images/servicos/suporte-remoto.webp' },
    },
  },
  {
    slug: 'suporte-on-site',
    titulo: { pt: 'Suporte on site', en: 'On-site support' },
    resumo: {
      pt: 'Equipa técnica que se desloca ao local para resolver o que não se resolve à distância.',
      en: 'A technical team visits your site to resolve issues that cannot be fixed remotely.',
    },
    descricao: [
      {
        pt: 'Perante problemas mais complexos, sem possibilidade de resolução remota, contamos com uma equipa técnica que se desloca de imediato ao local para intervir directamente e dar uma solução.',
        en: 'For complex issues that cannot be resolved remotely, a technical team visits the site to intervene directly and provide a solution.',
      },
      {
        pt: 'Em clientes com contrato, implementamos uma rotina de visitas para suporte preventivo, evitando a paragem da operação por ocorrências repentinas.',
        en: 'For clients with a support contract, we schedule preventive visits to reduce unexpected operational downtime.',
      },
    ],
    inclui: [
      { pt: 'Deslocação da equipa técnica', en: 'On-site technical visits' },
      { pt: 'Intervenção directa no local', en: 'Direct on-site intervention' },
      {
        pt: 'Visitas de suporte preventivo para clientes com contrato',
        en: 'Preventive support visits for clients with a contract',
      },
    ],
    paraQuem: {
      pt: 'Empresas que não podem parar.',
      en: 'Businesses that cannot afford downtime.',
    },
    icone: 'tools',
    ordem: 3,
    ctaMensagem: {
      pt: 'Olá! Preciso de suporte técnico no local.',
      en: 'Hello! I need on-site technical support.',
    },
    href: '/servicos/suporte-on-site',
    imagem: {
      alt: {
        pt: 'Técnico a ajudar um funcionário no computador do escritório',
        en: 'Technician helping an employee at the office computer',
      },
      ficheiroEsperado: { pt: 'public/images/servicos/suporte-on-site.webp' },
    },
  },
  {
    slug: 'manutencao-equipamentos',
    titulo: { pt: 'Manutenção de equipamentos', en: 'Equipment maintenance' },
    resumo: {
      pt: 'Manutenção preventiva e correctiva de computadores, telemóveis e tablets.',
      en: 'Preventive and corrective maintenance for computers, mobile phones and tablets.',
    },
    descricao: [
      {
        pt: 'Realizamos manutenção preventiva e correctiva. Também actuamos na manutenção de telemóveis e tablets, com reparações internas e externas, troca de ecrãs e películas.',
        en: 'We provide preventive and corrective maintenance, including internal and external repairs to mobile phones and tablets, screen and protector replacements.',
      },
    ],
    inclui: [
      { pt: 'Formatação', en: 'System formatting' },
      { pt: 'Limpeza interna e externa', en: 'Internal and external cleaning' },
      { pt: 'Troca de peças', en: 'Parts replacement' },
      { pt: 'Cópia de segurança (backup) de dados', en: 'Data backup' },
      { pt: 'Avaliação de desempenho', en: 'Performance assessment' },
      { pt: 'Actualização (upgrade) de componentes', en: 'Component upgrades' },
      {
        pt: 'Reparação de telemóveis e tablets (troca de ecrãs e películas)',
        en: 'Mobile phone and tablet repairs, including screen and protector replacement',
      },
    ],
    paraQuem: { pt: 'Empresas e particulares.', en: 'Businesses and individuals.' },
    icone: 'tools',
    ordem: 4,
    ctaMensagem: {
      pt: 'Olá! Gostaria de um orçamento de manutenção de equipamentos.',
      en: 'Hello! I would like a quote for equipment maintenance.',
    },
    href: '/servicos/manutencao-equipamentos',
    imagem: {
      alt: {
        pt: 'Técnico a limpar o interior de um portátil aberto',
        en: 'Technician cleaning the inside of an open laptop',
      },
      ficheiroEsperado: { pt: 'public/images/servicos/manutencao-equipamentos.webp' },
    },
  },
  {
    slug: 'contratos-ti',
    titulo: { pt: 'Contratos de TI', en: 'IT support contracts' },
    resumo: {
      pt: 'Manutenção continuada e alta disponibilidade para a sua operação.',
      en: 'Ongoing maintenance and high availability for your operations.',
    },
    descricao: [
      {
        pt: 'A manutenção continuada é indispensável para a gestão e operação eficaz de uma empresa: os dados só são úteis se forem válidos e estiverem disponíveis em tempo real.',
        en: 'Ongoing maintenance is essential to effective business operations: data is only useful when it is accurate and available in real time.',
      },
      {
        pt: 'Com foco na alta disponibilidade da operação e na disponibilização de dados para análise e acompanhamento, atendemos clientes de segmentos diversos, da estrutura à manutenção da tecnologia da informação como um todo.',
        en: 'We focus on operational availability and access to data for analysis and monitoring, supporting clients across sectors with IT infrastructure and maintenance.',
      },
    ],
    inclui: [
      { pt: 'Manutenção continuada', en: 'Ongoing maintenance' },
      { pt: 'Rotina de visitas preventivas', en: 'Scheduled preventive visits' },
      {
        pt: 'Acompanhamento da infraestrutura de TI como um todo',
        en: 'Monitoring of your overall IT infrastructure',
      },
    ],
    paraQuem: {
      pt: 'Empresas de vários sectores que querem previsibilidade.',
      en: 'Businesses across sectors looking for predictable IT support.',
    },
    icone: 'contract',
    ordem: 5,
    ctaMensagem: {
      pt: 'Olá! Gostaria de saber mais sobre contratos de TI.',
      en: 'Hello! I would like to learn more about IT support contracts.',
    },
    href: '/servicos/contratos-ti',
    imagem: {
      alt: {
        pt: 'Técnico a entregar uma pasta a uma gestora',
        en: 'Technician handing a folder to a manager',
      },
      ficheiroEsperado: { pt: 'public/images/servicos/contratos-ti.webp' },
    },
  },
  {
    slug: 'construtoria',
    titulo: { pt: 'Construtoria (consultoria)', en: 'Construtoria (consulting)' },
    resumo: {
      pt: 'Da análise das necessidades à implementação, com o melhor custo-benefício.',
      en: 'From needs assessment to implementation, with a focus on value.',
    },
    descricao: [
      {
        pt: 'O nosso processo de consultoria chama-se Construtoria porque vai além do levantamento das necessidades: acompanha as soluções até à implementação, com o melhor custo-benefício.',
        en: 'Our consulting approach is called Construtoria because it goes beyond identifying needs: we support solutions through to implementation, with a focus on value.',
      },
      {
        pt: 'Não nos limitamos à implementação de novos programas: trabalhamos na construção e revitalização dos processos e procedimentos ligados ao Sistema de Gestão da Qualidade (SGQ) da empresa, usando a tecnologia como pilar para a agilidade, a automação e o real aproveitamento do material levantado durante o processo.',
        en: 'We do more than implement software. We help build and improve processes and procedures connected to a company’s Quality Management System, using technology to support agility, automation and practical use of the information gathered.',
      },
    ],
    inclui: [
      { pt: 'Levantamento de necessidades', en: 'Needs assessment' },
      { pt: 'Desenho de soluções', en: 'Solution design' },
      {
        pt: 'Construção e revitalização de processos e procedimentos (SGQ)',
        en: 'Building and improving processes and procedures (QMS)',
      },
      { pt: 'Implementação', en: 'Implementation' },
    ],
    paraQuem: {
      pt: 'Empresas que querem organizar processos com apoio da tecnologia.',
      en: 'Businesses looking to organise processes with the help of technology.',
    },
    icone: 'consulting',
    ordem: 6,
    ctaMensagem: {
      pt: 'Olá! Gostaria de conversar sobre consultoria (Construtoria).',
      en: 'Hello! I would like to discuss Construtoria consulting.',
    },
    href: '/servicos/construtoria',
    imagem: {
      alt: {
        pt: 'Duas pessoas a planear fluxos num quadro branco com post-its',
        en: 'Two people planning workflows on a whiteboard with post-its',
      },
      ficheiroEsperado: { pt: 'public/images/servicos/construtoria.webp' },
    },
  },
  {
    slug: 'sistemas-software',
    titulo: { pt: 'Sistemas e software', en: 'Systems and software' },
    resumo: {
      pt: 'Sistemas web para gerir documentos, processos, stocks e pedidos.',
      en: 'Web systems for managing documents, processes, inventory and requests.',
    },
    descricao: [
      {
        pt: 'Com foco na transformação digital, trabalhamos com sistemas e programas em versões web para a gestão de documentos e de processos.',
        en: 'As part of digital transformation, we build web-based systems for document and process management.',
      },
      {
        pt: 'Para controlo de stocks, ordens de serviço, requisições e solicitações, desenvolvemos gestores web simples, claros e objectivos.',
        en: 'We develop clear, practical web tools for inventory, work orders, requisitions and requests.',
      },
    ],
    inclui: [
      { pt: 'Gestão de documentos e de processos', en: 'Document and process management' },
      { pt: 'Controlo de stocks', en: 'Inventory management' },
      { pt: 'Ordens de serviço', en: 'Work orders' },
      { pt: 'Requisições e solicitações', en: 'Requisitions and requests' },
    ],
    paraQuem: {
      pt: 'Empresas que ainda gerem tudo em papel ou folhas de cálculo.',
      en: 'Businesses still managing operations on paper or spreadsheets.',
    },
    icone: 'code',
    ordem: 7,
    ctaMensagem: {
      pt: 'Olá! Gostaria de um sistema web para a minha empresa.',
      en: 'Hello! I would like a web system for my business.',
    },
    href: '/servicos/sistemas-software',
    imagem: {
      alt: {
        pt: 'Gestora de armazém a controlar o stock num tablet',
        en: 'Warehouse manager controlling stock on a tablet',
      },
      ficheiroEsperado: { pt: 'public/images/servicos/sistemas-software.webp' },
    },
  },
  {
    slug: 'locacao-equipamentos-ti',
    titulo: { pt: 'Locação de equipamentos de TI', en: 'IT equipment rental' },
    resumo: {
      pt: 'Computadores, portáteis e periféricos modernos, com instalação e manutenção.',
      en: 'Modern computers, laptops and peripherals, with installation and maintenance.',
    },
    descricao: [
      {
        pt: 'Alugamos computadores, portáteis e periféricos modernos e de alto desempenho para garantir a qualidade do funcionamento da sua empresa.',
        en: 'We rent modern, high-performance computers, laptops and peripherals to support your business operations.',
      },
      {
        pt: 'Também fazemos a instalação e a manutenção dos equipamentos seleccionados. Analisamos a estrutura e as necessidades do seu negócio para propor os equipamentos mais adequados, com melhor desempenho e custo-benefício.',
        en: 'We also install and maintain selected equipment. We assess your business needs to recommend suitable equipment and value-focused options.',
      },
    ],
    inclui: [
      {
        pt: 'Aluguer de computadores, portáteis e periféricos',
        en: 'Computer, laptop and peripheral rental',
      },
      { pt: 'Instalação', en: 'Installation' },
      { pt: 'Manutenção', en: 'Maintenance' },
      { pt: 'Análise das necessidades do negócio', en: 'Business needs assessment' },
    ],
    paraQuem: {
      pt: 'Empresas com necessidade temporária ou que preferem não investir na compra.',
      en: 'Businesses with temporary equipment needs or that prefer not to purchase equipment.',
    },
    icone: 'rental',
    ordem: 8,
    ctaMensagem: {
      pt: 'Olá! Gostaria de um orçamento para locação de equipamentos de TI.',
      en: 'Hello! I would like a quote for IT equipment rental.',
    },
    href: '/servicos/locacao-equipamentos-ti',
    imagem: {
      alt: {
        pt: 'Técnico a preparar portáteis e monitores numa sala de formação',
        en: 'Technician preparing laptops and monitors in a training room',
      },
      ficheiroEsperado: { pt: 'public/images/servicos/locacao-equipamentos.webp' },
    },
  },
  {
    slug: 'desenvolvimento-web',
    titulo: { pt: 'Websites e sistemas web', en: 'Websites and web systems' },
    resumo: {
      pt: 'Do site institucional ao sistema de gestão, com soluções web preparadas para crescer com o seu negócio.',
      en: 'From company websites to management systems, with web solutions designed to grow with your business.',
    },
    descricao: [
      {
        pt: 'Desenhamos, desenvolvemos e publicamos soluções web para diferentes necessidades, do site institucional ao sistema de gestão.',
        en: 'We design, build and launch web solutions for different needs, from company websites to management systems.',
      },
    ],
    inclui: [],
    paraQuem: {
      pt: 'Empresas que procuram uma presença online ou soluções web à medida.',
      en: 'Businesses looking for an online presence or tailored web solutions.',
    },
    icone: 'code',
    ordem: 9,
    ctaMensagem: {
      pt: 'Olá! Gostaria de conversar sobre desenvolvimento web.',
      en: 'Hello! I would like to discuss web development.',
    },
    href: '/desenvolvimento-web',
    imagem: {
      alt: {
        pt: 'Mãos a escrever código num portátil',
        en: 'Hands writing code on a laptop',
      },
      ficheiroEsperado: { pt: 'public/images/servicos/desenvolvimento-web.webp' },
    },
  },
];
