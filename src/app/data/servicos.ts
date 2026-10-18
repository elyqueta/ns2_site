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
  breadcrumbLabel: { pt: 'Navegação estrutural' } satisfies LocalizedText,
  homeLabel: { pt: 'Início' } satisfies LocalizedText,
  title: { pt: 'Serviços' } satisfies LocalizedText,
  lead: {
    pt: 'Assistência completa a toda a procura de TI, de servidores a cabeamento estruturado. Concentramos as soluções num só lugar, com rapidez de implementação e baixo custo.',
  } satisfies LocalizedText,
  sectionIndex: { pt: '01 — Serviços' } satisfies LocalizedText,
  listTitle: { pt: 'Assistência completa a toda a procura de TI.' } satisfies LocalizedText,
  detailLink: { pt: 'Saber mais' } satisfies LocalizedText,
  includesLabel: { pt: 'O que inclui' } satisfies LocalizedText,
  audienceLabel: { pt: 'Para quem' } satisfies LocalizedText,
  relatedLabel: { pt: 'Serviços relacionados' } satisfies LocalizedText,
  previousLabel: { pt: 'Serviço anterior' } satisfies LocalizedText,
  nextLabel: { pt: 'Serviço seguinte' } satisfies LocalizedText,
  allServicesLabel: { pt: 'Todos os serviços' } satisfies LocalizedText,
  quoteLabel: { pt: 'Pedir orçamento' } satisfies LocalizedText,
  whatsappLabel: { pt: 'Falar no WhatsApp' } satisfies LocalizedText,
  contactLabel: { pt: 'Ver contactos' } satisfies LocalizedText,
  generalCtaTitle: { pt: 'Precisa de soluções de TI? Vamos começar.' } satisfies LocalizedText,
  webCtaLabel: { pt: 'Conheça o desenvolvimento web' } satisfies LocalizedText,
  notFoundTitle: { pt: 'Serviço não encontrado' } satisfies LocalizedText,
  notFoundDescription: {
    pt: 'O serviço que procura não está disponível. Consulte a lista de serviços.',
  } satisfies LocalizedText,
} as const;

export const servicos: readonly Servico[] = [
  {
    slug: 'infraestrutura-redes-servidores',
    titulo: { pt: 'Infraestrutura de redes e servidores' },
    resumo: { pt: 'Projecto, instalação e manutenção da rede e dos servidores da sua empresa.' },
    descricao: [
      {
        pt: 'Realizamos a instalação e a manutenção da estrutura de rede dentro da sua empresa.',
      },
      {
        pt: 'Construímos e revemos a rede local de forma completa, contemplando o layout e a rede eléctrica, para chegar à melhor estruturação e ao melhor custo-benefício.',
      },
    ],
    inclui: [
      { pt: 'Idealização do projecto' },
      { pt: 'Instalação e configuração de servidores' },
      { pt: 'Implementação de rede de cabeamento estruturado' },
      { pt: 'Rede sem fios (Wi-Fi)' },
      { pt: 'Organização de racks' },
      { pt: 'Instalação de pontos de acesso' },
    ],
    paraQuem: {
      pt: 'Empresas, escritórios, instituições e espaços comerciais que precisam de uma rede fiável e organizada.',
    },
    icone: 'network',
    ordem: 1,
    ctaMensagem: {
      pt: 'Olá! Gostaria de um orçamento para infraestrutura de redes e servidores.',
    },
    href: '/servicos/infraestrutura-redes-servidores',
    imagem: {
      alt: { pt: 'Imagem representativa do serviço de infraestrutura de redes e servidores.' },
      ficheiroEsperado: { pt: 'public/images/servicos/infraestrutura-redes-servidores.webp' },
    },
  },
  {
    slug: 'suporte-remoto',
    titulo: { pt: 'Suporte remoto' },
    resumo: { pt: 'Atendimento rápido por telefone, email e WhatsApp, com acesso remoto.' },
    descricao: [
      {
        pt: 'Disponibilizamos atendimento personalizado através de vários canais: telefone, email e WhatsApp.',
      },
      {
        pt: 'Além disso, realizamos acesso remoto para compreender melhor a sua dúvida. Respondemos ao seu chamado rapidamente, com o objectivo de resolver o problema com agilidade e eficácia.',
      },
    ],
    inclui: [
      { pt: 'Atendimento por telefone, email e WhatsApp' },
      { pt: 'Acesso remoto ao equipamento' },
      { pt: 'Resposta rápida a chamados' },
    ],
    paraQuem: { pt: 'Quem precisa de resolver problemas de TI sem esperar por uma deslocação.' },
    icone: 'support',
    ordem: 2,
    ctaMensagem: { pt: 'Olá! Preciso de suporte remoto de TI.' },
    href: '/servicos/suporte-remoto',
    imagem: {
      alt: { pt: 'Imagem representativa do serviço de suporte remoto.' },
      ficheiroEsperado: { pt: 'public/images/servicos/suporte-remoto.webp' },
    },
  },
  {
    slug: 'suporte-on-site',
    titulo: { pt: 'Suporte on site' },
    resumo: {
      pt: 'Equipa técnica que se desloca ao local para resolver o que não se resolve à distância.',
    },
    descricao: [
      {
        pt: 'Perante problemas mais complexos, sem possibilidade de resolução remota, contamos com uma equipa técnica que se desloca de imediato ao local para intervir directamente e dar uma solução.',
      },
      {
        pt: 'Em clientes com contrato, implementamos uma rotina de visitas para suporte preventivo, evitando a paragem da operação por ocorrências repentinas.',
      },
    ],
    inclui: [
      { pt: 'Deslocação da equipa técnica' },
      { pt: 'Intervenção directa no local' },
      { pt: 'Visitas de suporte preventivo para clientes com contrato' },
    ],
    paraQuem: { pt: 'Empresas que não podem parar.' },
    icone: 'tools',
    ordem: 3,
    ctaMensagem: { pt: 'Olá! Preciso de suporte técnico no local.' },
    href: '/servicos/suporte-on-site',
    imagem: {
      alt: { pt: 'Imagem representativa do serviço de suporte on site.' },
      ficheiroEsperado: { pt: 'public/images/servicos/suporte-on-site.webp' },
    },
  },
  {
    slug: 'manutencao-equipamentos',
    titulo: { pt: 'Manutenção de equipamentos' },
    resumo: {
      pt: 'Manutenção preventiva e correctiva de computadores, telemóveis e tablets.',
    },
    descricao: [
      {
        pt: 'Realizamos manutenção preventiva e correctiva. Também actuamos na manutenção de telemóveis e tablets, com reparações internas e externas, troca de ecrãs e películas.',
      },
    ],
    inclui: [
      { pt: 'Formatação' },
      { pt: 'Limpeza interna e externa' },
      { pt: 'Troca de peças' },
      { pt: 'Cópia de segurança (backup) de dados' },
      { pt: 'Avaliação de desempenho' },
      { pt: 'Actualização (upgrade) de componentes' },
      { pt: 'Reparação de telemóveis e tablets (troca de ecrãs e películas)' },
    ],
    paraQuem: { pt: 'Empresas e particulares.' },
    icone: 'tools',
    ordem: 4,
    ctaMensagem: { pt: 'Olá! Gostaria de um orçamento de manutenção de equipamentos.' },
    href: '/servicos/manutencao-equipamentos',
    imagem: {
      alt: { pt: 'Imagem representativa do serviço de manutenção de equipamentos.' },
      ficheiroEsperado: { pt: 'public/images/servicos/manutencao-equipamentos.webp' },
    },
  },
  {
    slug: 'contratos-ti',
    titulo: { pt: 'Contratos de TI' },
    resumo: { pt: 'Manutenção continuada e alta disponibilidade para a sua operação.' },
    descricao: [
      {
        pt: 'A manutenção continuada é indispensável para a gestão e operação eficaz de uma empresa: os dados só são úteis se forem válidos e estiverem disponíveis em tempo real.',
      },
      {
        pt: 'Com foco na alta disponibilidade da operação e na disponibilização de dados para análise e acompanhamento, atendemos clientes de segmentos diversos, da estrutura à manutenção da tecnologia da informação como um todo.',
      },
    ],
    inclui: [
      { pt: 'Manutenção continuada' },
      { pt: 'Rotina de visitas preventivas' },
      { pt: 'Acompanhamento da infraestrutura de TI como um todo' },
    ],
    paraQuem: { pt: 'Empresas de vários sectores que querem previsibilidade.' },
    icone: 'contract',
    ordem: 5,
    ctaMensagem: { pt: 'Olá! Gostaria de saber mais sobre contratos de TI.' },
    href: '/servicos/contratos-ti',
    imagem: {
      alt: { pt: 'Imagem representativa do serviço de contratos de TI.' },
      ficheiroEsperado: { pt: 'public/images/servicos/contratos-ti.webp' },
    },
  },
  {
    slug: 'construtoria',
    titulo: { pt: 'Construtoria (consultoria)' },
    resumo: { pt: 'Da análise das necessidades à implementação, com o melhor custo-benefício.' },
    descricao: [
      {
        pt: 'O nosso processo de consultoria chama-se Construtoria porque vai além do levantamento das necessidades: acompanha as soluções até à implementação, com o melhor custo-benefício.',
      },
      {
        pt: 'Não nos limitamos à implementação de novos programas: trabalhamos na construção e revitalização dos processos e procedimentos ligados ao Sistema de Gestão da Qualidade (SGQ) da empresa, usando a tecnologia como pilar para a agilidade, a automação e o real aproveitamento do material levantado durante o processo.',
      },
    ],
    inclui: [
      { pt: 'Levantamento de necessidades' },
      { pt: 'Desenho de soluções' },
      { pt: 'Construção e revitalização de processos e procedimentos (SGQ)' },
      { pt: 'Implementação' },
    ],
    paraQuem: { pt: 'Empresas que querem organizar processos com apoio da tecnologia.' },
    icone: 'consulting',
    ordem: 6,
    ctaMensagem: { pt: 'Olá! Gostaria de conversar sobre consultoria (Construtoria).' },
    href: '/servicos/construtoria',
    imagem: {
      alt: { pt: 'Imagem representativa do serviço de construtoria.' },
      ficheiroEsperado: { pt: 'public/images/servicos/construtoria.webp' },
    },
  },
  {
    slug: 'sistemas-software',
    titulo: { pt: 'Sistemas e software' },
    resumo: { pt: 'Sistemas web para gerir documentos, processos, stocks e pedidos.' },
    descricao: [
      {
        pt: 'Com foco na transformação digital, trabalhamos com sistemas e programas em versões web para a gestão de documentos e de processos.',
      },
      {
        pt: 'Para controlo de stocks, ordens de serviço, requisições e solicitações, desenvolvemos gestores web simples, claros e objectivos.',
      },
    ],
    inclui: [
      { pt: 'Gestão de documentos e de processos' },
      { pt: 'Controlo de stocks' },
      { pt: 'Ordens de serviço' },
      { pt: 'Requisições e solicitações' },
    ],
    paraQuem: { pt: 'Empresas que ainda gerem tudo em papel ou folhas de cálculo.' },
    icone: 'code',
    ordem: 7,
    ctaMensagem: { pt: 'Olá! Gostaria de um sistema web para a minha empresa.' },
    href: '/servicos/sistemas-software',
    imagem: {
      alt: { pt: 'Imagem representativa do serviço de sistemas e software.' },
      ficheiroEsperado: { pt: 'public/images/servicos/sistemas-software.webp' },
    },
  },
  {
    slug: 'locacao-equipamentos-ti',
    titulo: { pt: 'Locação de equipamentos de TI' },
    resumo: {
      pt: 'Computadores, portáteis e periféricos modernos, com instalação e manutenção.',
    },
    descricao: [
      {
        pt: 'Alugamos computadores, portáteis e periféricos modernos e de alto desempenho para garantir a qualidade do funcionamento da sua empresa.',
      },
      {
        pt: 'Também fazemos a instalação e a manutenção dos equipamentos seleccionados. Analisamos a estrutura e as necessidades do seu negócio para propor os equipamentos mais adequados, com melhor desempenho e custo-benefício.',
      },
    ],
    inclui: [
      { pt: 'Aluguer de computadores, portáteis e periféricos' },
      { pt: 'Instalação' },
      { pt: 'Manutenção' },
      { pt: 'Análise das necessidades do negócio' },
    ],
    paraQuem: {
      pt: 'Empresas com necessidade temporária ou que preferem não investir na compra.',
    },
    icone: 'rental',
    ordem: 8,
    ctaMensagem: { pt: 'Olá! Gostaria de um orçamento para locação de equipamentos de TI.' },
    href: '/servicos/locacao-equipamentos-ti',
    imagem: {
      alt: { pt: 'Imagem representativa do serviço de locação de equipamentos de TI.' },
      ficheiroEsperado: { pt: 'public/images/servicos/locacao-equipamentos-ti.webp' },
    },
  },
  {
    slug: 'desenvolvimento-web',
    titulo: { pt: 'Websites e sistemas web' },
    resumo: {
      pt: 'Do site institucional ao sistema de gestão, com soluções web preparadas para crescer com o seu negócio.',
    },
    descricao: [
      {
        pt: 'Desenhamos, desenvolvemos e publicamos soluções web para diferentes necessidades, do site institucional ao sistema de gestão.',
      },
    ],
    inclui: [],
    paraQuem: { pt: 'Empresas que procuram uma presença online ou soluções web à medida.' },
    icone: 'code',
    ordem: 9,
    ctaMensagem: { pt: 'Olá! Gostaria de conversar sobre desenvolvimento web.' },
    href: '/desenvolvimento-web',
    imagem: {
      alt: { pt: 'Imagem representativa de websites e sistemas web.' },
      ficheiroEsperado: { pt: 'public/images/servicos/desenvolvimento-web.webp' },
    },
  },
];
