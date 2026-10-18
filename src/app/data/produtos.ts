import { IconName } from '../shared/ui/icon/icon';
import { LocalizedText } from '../i18n/types';

export interface CategoriaProduto {
  readonly slug: string;
  readonly titulo: LocalizedText;
  readonly descricao: LocalizedText;
  readonly icone: IconName;
  readonly ordem: number;
  readonly href: string;
}

export const produtos: readonly CategoriaProduto[] = [
  {
    slug: 'notebooks',
    titulo: { pt: 'Portáteis' },
    descricao: {
      pt: 'Dell, Lenovo, HP e Apple — linhas para o mercado empresarial, o dia-a-dia, a portabilidade e o alto desempenho. Equipamentos novos e seminovos.',
    },
    icone: 'laptop',
    ordem: 1,
    href: '/produtos#notebooks',
  },
  {
    slug: 'desktops',
    titulo: { pt: 'Computadores de secretária' },
    descricao: {
      pt: 'Modelos Dell, Lenovo e HP para diferentes necessidades, além de montagem de computadores personalizados sob encomenda.',
    },
    icone: 'desktop',
    ordem: 2,
    href: '/produtos#desktops',
  },
  {
    slug: 'pecas',
    titulo: { pt: 'Peças' },
    descricao: {
      pt: 'Componentes, equipamentos e activos de rede, peças e acessórios para aquisição, reposição, manutenção ou actualização.',
    },
    icone: 'component',
    ordem: 3,
    href: '/produtos#pecas',
  },
  {
    slug: 'acessorios',
    titulo: { pt: 'Acessórios' },
    descricao: {
      pt: 'Acessórios de várias marcas, entre elas Dell, Knup, Multilaser e Samsung, para as suas actividades.',
    },
    icone: 'accessory',
    ordem: 4,
    href: '/produtos#acessorios',
  },
  {
    slug: 'moveis',
    titulo: { pt: 'Mobiliário' },
    descricao: {
      pt: 'Mobiliário de escritório e gamer, incluindo mesas, estantes, cadeiras e gaveteiros em várias cores e dimensões.',
    },
    icone: 'chair',
    ordem: 5,
    href: '/produtos#moveis',
  },
  {
    slug: 'consumiveis',
    titulo: { pt: 'Consumíveis' },
    descricao: {
      pt: 'Toners, cartuchos de tinta, papel para impressão, dispositivos de armazenamento e acessórios de informática.',
    },
    icone: 'printer',
    ordem: 6,
    href: '/produtos#consumiveis',
  },
];
