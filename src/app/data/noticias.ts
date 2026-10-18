import { LocalizedText } from '../i18n/types';

export type BlocoNoticia =
  | { readonly tipo: 'paragrafo' | 'titulo'; readonly texto: LocalizedText }
  | { readonly tipo: 'lista'; readonly itens: readonly LocalizedText[] };

export interface Noticia {
  readonly slug: string;
  readonly titulo: LocalizedText;
  readonly resumo: LocalizedText;
  readonly categoria: LocalizedText;
  readonly data: string;
  readonly tempoLeitura: number;
  readonly imagem: string;
  readonly corpo: readonly BlocoNoticia[];
  readonly autor: LocalizedText;
  readonly href: string;
}

export const noticias: readonly Noticia[] = [
  {
    slug: 'site-ou-landing-page-qual-escolher',
    titulo: { pt: 'Landing page, site institucional ou sistema web: qual escolher?' },
    resumo: {
      pt: 'Perceba a diferença entre as soluções e escolha a que serve o seu objectivo.',
    },
    categoria: { pt: 'Web e sistemas' },
    data: '2026-10-14',
    tempoLeitura: 3,
    imagem: 'noticias/site-ou-landing-page-qual-escolher.webp',
    autor: { pt: 'Equipa NS2 Innovation' },
    href: '/noticias/site-ou-landing-page-qual-escolher',
    corpo: [
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Nem todos os projectos web são iguais. Escolher bem poupa tempo e orçamento.',
        },
      },
      { tipo: 'titulo', texto: { pt: 'Landing page' } },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Uma única página focada numa acção, por exemplo, pedir um orçamento por WhatsApp. Ideal para lançar rapidamente.',
        },
      },
      { tipo: 'titulo', texto: { pt: 'Site institucional ou profissional' } },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Várias páginas para apresentar a empresa, os serviços e os contactos, com uma imagem cuidada.',
        },
      },
      { tipo: 'titulo', texto: { pt: 'Loja online ou sistema web' } },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Quando precisa de login, base de dados, painel de gestão, pedidos ou relatórios, já falamos de uma loja ou de um sistema web.',
        },
      },
      {
        tipo: 'paragrafo',
        texto: { pt: 'Em dúvida? Conte-nos o seu objectivo e indicamos a solução mais adequada.' },
      },
    ],
  },
  {
    slug: 'cabeamento-estruturado-o-que-verificar',
    titulo: { pt: 'Cabeamento estruturado: o que verificar antes de montar a rede' },
    resumo: {
      pt: 'Planeamento da rede, organização de racks e rede eléctrica andam de mãos dadas.',
    },
    categoria: { pt: 'Dicas de TI' },
    data: '2026-10-09',
    tempoLeitura: 4,
    imagem: 'noticias/cabeamento-estruturado-o-que-verificar.webp',
    autor: { pt: 'Equipa NS2 Innovation' },
    href: '/noticias/cabeamento-estruturado-o-que-verificar',
    corpo: [
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Uma rede bem feita começa antes da primeira ficha: começa no projecto. Um bom planeamento evita improvisos, cabos soltos e falhas difíceis de encontrar.',
        },
      },
      { tipo: 'titulo', texto: { pt: 'Antes de começar' } },
      {
        tipo: 'lista',
        itens: [
          { pt: 'Levantamento do espaço e do número de postos de trabalho' },
          { pt: 'Layout da rede e da rede eléctrica' },
          { pt: 'Localização do rack e dos pontos de acesso Wi-Fi' },
          { pt: 'Previsão de crescimento da empresa' },
        ],
      },
      { tipo: 'titulo', texto: { pt: 'Durante e depois' } },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Organizar o rack, identificar os cabos e documentar a instalação facilita a manutenção e reduz o tempo de resolução de problemas.',
        },
      },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'A NS2 Innovation trata do projecto, instalação e configuração de redes e servidores. Peça-nos um orçamento.',
        },
      },
    ],
  },
  {
    slug: 'manutencao-preventiva-evita-paragens',
    titulo: { pt: 'Manutenção preventiva: como evitar paragens na sua empresa' },
    resumo: {
      pt: 'Pequenas rotinas regulares evitam falhas inesperadas e poupam tempo e dinheiro.',
    },
    categoria: { pt: 'Dicas de TI' },
    data: '2026-10-05',
    tempoLeitura: 3,
    imagem: 'noticias/manutencao-preventiva-evita-paragens.webp',
    autor: { pt: 'Equipa NS2 Innovation' },
    href: '/noticias/manutencao-preventiva-evita-paragens',
    corpo: [
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Quando um computador ou servidor falha a meio do dia, o custo não é só a reparação: é o trabalho parado, os clientes à espera e a confiança abalada. A manutenção preventiva existe para reduzir esse risco.',
        },
      },
      { tipo: 'titulo', texto: { pt: 'O que costuma fazer parte da rotina' } },
      {
        tipo: 'lista',
        itens: [
          { pt: 'Limpeza interna e externa dos equipamentos' },
          { pt: 'Verificação e avaliação de desempenho' },
          { pt: 'Cópias de segurança dos dados' },
          { pt: 'Actualização de componentes quando faz sentido' },
          { pt: 'Substituição de peças com sinais de desgaste' },
        ],
      },
      { tipo: 'titulo', texto: { pt: 'Preventiva ou correctiva?' } },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'A manutenção correctiva resolve o problema depois de ele acontecer; a preventiva procura evitá-lo. Empresas com contrato de TI beneficiam de visitas regulares de suporte preventivo, o que reduz paragens repentinas.',
        },
      },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Quer organizar a manutenção dos equipamentos da sua empresa? Fale connosco e preparamos uma proposta adequada.',
        },
      },
    ],
  },
];
