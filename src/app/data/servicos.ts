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
}

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
  },
  {
    slug: 'suporte-remoto',
    titulo: { pt: 'Suporte remoto' },
    resumo: { pt: 'Atendimento por telefone, email e WhatsApp, com acesso remoto.' },
    descricao: [
      {
        pt: 'Disponibilizamos atendimento personalizado através de vários canais: telefone, email e WhatsApp.',
      },
      {
        pt: 'Realizamos acesso remoto para compreender melhor a sua dúvida e responder ao chamado com o objectivo de resolver o problema com agilidade e eficácia.',
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
  },
  {
    slug: 'suporte-on-site',
    titulo: { pt: 'Suporte on site' },
    resumo: {
      pt: 'Equipa técnica no local para resolver o que não se resolve à distância.',
    },
    descricao: [
      {
        pt: 'Perante problemas mais complexos, sem possibilidade de resolução remota, contamos com uma equipa técnica que se desloca ao local para intervir directamente e dar uma solução.',
      },
      {
        pt: 'Em clientes com contrato, implementamos uma rotina de visitas para suporte preventivo, evitando paragens da operação por ocorrências repentinas.',
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
      { pt: 'Formatação e limpeza interna e externa' },
      { pt: 'Troca de peças e cópia de segurança de dados' },
      { pt: 'Avaliação de desempenho e actualização de componentes' },
      { pt: 'Reparação de telemóveis e tablets' },
    ],
    paraQuem: { pt: 'Empresas e particulares.' },
    icone: 'tools',
    ordem: 4,
    ctaMensagem: { pt: 'Olá! Gostaria de um orçamento de manutenção de equipamentos.' },
    href: '/servicos/manutencao-equipamentos',
  },
  {
    slug: 'contratos-ti',
    titulo: { pt: 'Contratos de TI' },
    resumo: { pt: 'Manutenção continuada e alta disponibilidade para a sua operação.' },
    descricao: [
      {
        pt: 'A manutenção continuada é indispensável para a gestão e operação eficaz de uma empresa.',
      },
      {
        pt: 'Com foco na alta disponibilidade da operação e na disponibilização de dados para análise e acompanhamento, atendemos clientes de segmentos diversos.',
      },
    ],
    inclui: [
      { pt: 'Manutenção continuada' },
      { pt: 'Rotina de visitas preventivas' },
      { pt: 'Acompanhamento da infraestrutura de TI' },
    ],
    paraQuem: { pt: 'Empresas de vários sectores que querem previsibilidade.' },
    icone: 'contract',
    ordem: 5,
    ctaMensagem: { pt: 'Olá! Gostaria de saber mais sobre contratos de TI.' },
    href: '/servicos/contratos-ti',
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
        pt: 'Trabalhamos na construção e revitalização dos processos e procedimentos ligados ao Sistema de Gestão da Qualidade (SGQ), usando a tecnologia como pilar para a agilidade e a automação.',
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
      { pt: 'Gestão de documentos e processos' },
      { pt: 'Controlo de stocks' },
      { pt: 'Ordens de serviço' },
      { pt: 'Requisições e solicitações' },
    ],
    paraQuem: { pt: 'Empresas que ainda gerem tudo em papel ou folhas de cálculo.' },
    icone: 'code',
    ordem: 7,
    ctaMensagem: { pt: 'Olá! Gostaria de um sistema web para a minha empresa.' },
    href: '/servicos/sistemas-software',
  },
  {
    slug: 'locacao-equipamentos-ti',
    titulo: { pt: 'Locação de equipamentos de TI' },
    resumo: {
      pt: 'Computadores, portáteis e periféricos, com instalação e manutenção.',
    },
    descricao: [
      {
        pt: 'Alugamos computadores, portáteis e periféricos para garantir o funcionamento da sua empresa.',
      },
      {
        pt: 'Também fazemos a instalação e a manutenção dos equipamentos seleccionados e analisamos as necessidades do negócio para propor opções adequadas.',
      },
    ],
    inclui: [
      { pt: 'Aluguer de computadores, portáteis e periféricos' },
      { pt: 'Instalação e manutenção' },
      { pt: 'Análise das necessidades do negócio' },
    ],
    paraQuem: {
      pt: 'Empresas com necessidade temporária ou que preferem não investir na compra.',
    },
    icone: 'rental',
    ordem: 8,
    ctaMensagem: { pt: 'Olá! Gostaria de um orçamento para locação de equipamentos de TI.' },
    href: '/servicos/locacao-equipamentos-ti',
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
  },
];
