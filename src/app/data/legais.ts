export interface LegalSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

export interface LegalDocument {
  readonly title: string;
  readonly lead: string;
  readonly sections: readonly LegalSection[];
  readonly reviewNotice: string;
}

export const legalDocuments = {
  privacy: {
    title: 'Política de Privacidade',
    lead: 'Saiba como são tratados os dados que decide partilhar connosco.',
    reviewNotice: 'Este texto base requer revisão jurídica antes da publicação definitiva.',
    sections: [
      {
        title: '1. Quem somos',
        paragraphs: [
          'A NS2 Innovation presta serviços de tecnologia e comércio de produtos informáticos em Angola.',
          'Para questões relacionadas com privacidade, pode contactar-nos através de contacto@ns2innovation.com ou pelo telefone +244 924 666 323.',
        ],
      },
      {
        title: '2. Dados que pode partilhar',
        paragraphs: [
          'O site não recolhe nem armazena dados pessoais em servidores próprios. Ao contactar-nos por WhatsApp ou email, pode escolher incluir dados como o nome, telefone, endereço de email, empresa e informação sobre o pedido.',
          'Se usar as sugestões de ponto de partida no mapa, o texto que escrever é enviado directamente ao Google Maps Platform para apresentar resultados. A NS2 Innovation não o guarda; o tratamento pelo Google rege-se pelas políticas do próprio serviço.',
        ],
      },
      {
        title: '3. Armazenamento local',
        paragraphs: [
          'O navegador pode guardar preferências de apresentação, como o tema visual e o idioma, para as aplicar nas visitas seguintes.',
        ],
      },
      {
        title: '4. Finalidade',
        paragraphs: [
          'Os dados incluídos voluntariamente numa mensagem são usados para responder ao pedido de informação ou orçamento.',
        ],
      },
      {
        title: '5. Serviços de terceiros',
        paragraphs: [
          'As sugestões de locais e a abertura de rotas usam serviços do Google Maps Platform. A abertura do WhatsApp e do programa de email ocorre nos serviços escolhidos pelo visitante. Cada fornecedor aplica as suas próprias políticas de privacidade.',
        ],
      },
      {
        title: '6. Direitos',
        paragraphs: [
          'Para exercer os direitos previstos na legislação angolana de protecção de dados pessoais, incluindo pedidos de acesso, rectificação ou eliminação, contacte contacto@ns2innovation.com.',
        ],
      },
      {
        title: '7. Segurança',
        paragraphs: [
          'Recomendamos que não inclua informação sensível desnecessária nas mensagens enviadas através de serviços de terceiros.',
        ],
      },
      {
        title: '8. Alterações',
        paragraphs: [
          'Esta informação poderá ser actualizada quando as funcionalidades ou práticas do site forem alteradas.',
        ],
      },
      {
        title: '9. Contactos',
        paragraphs: [
          'NS2 Innovation — Avenida 21 de Janeiro, Bairro Gamek, Luanda, Angola. Email: contacto@ns2innovation.com.',
        ],
      },
    ],
  },
  terms: {
    title: 'Termos e Condições',
    lead: 'Condições gerais de utilização do site da NS2 Innovation.',
    reviewNotice: 'Este texto base requer revisão jurídica antes da publicação definitiva.',
    sections: [
      {
        title: '1. Objecto e aceitação',
        paragraphs: [
          'Este site apresenta informação institucional, produtos e serviços da NS2 Innovation. A utilização do site pressupõe a leitura destes termos.',
        ],
      },
      {
        title: '2. Informação do site',
        paragraphs: [
          'A informação é disponibilizada para fins informativos. Os valores apresentados como “a partir de” são indicativos e não constituem uma proposta vinculativa; cada pedido será avaliado antes da apresentação de uma proposta.',
        ],
      },
      {
        title: '3. Propriedade intelectual',
        paragraphs: [
          'A marca, o logótipo e os conteúdos próprios da NS2 Innovation não podem ser reproduzidos sem autorização.',
        ],
      },
      {
        title: '4. Ligações externas',
        paragraphs: [
          'O site pode incluir ligações para serviços externos, como WhatsApp e Google Maps. A utilização desses serviços rege-se pelos termos dos respectivos fornecedores.',
        ],
      },
      {
        title: '5. Limitação de responsabilidade',
        paragraphs: [
          'A NS2 Innovation procura manter a informação actualizada, mas não garante que esteja sempre completa ou livre de interrupções.',
        ],
      },
      {
        title: '6. Produtos e serviços',
        paragraphs: [
          'A disponibilização de produtos e serviços depende de confirmação e de proposta específica. O site não processa pagamentos nem conclui compras.',
        ],
      },
      {
        title: '7. Lei aplicável',
        paragraphs: [
          'A interpretação destes termos rege-se pela legislação angolana. Os litígios serão submetidos aos tribunais competentes em Luanda, nos termos legais aplicáveis.',
        ],
      },
      {
        title: '8. Alterações',
        paragraphs: [
          'Estes termos poderão ser actualizados. A versão publicada nesta página será a aplicável à utilização do site.',
        ],
      },
      {
        title: '9. Contactos',
        paragraphs: [
          'Para esclarecimentos sobre estes termos, contacte contacto@ns2innovation.com.',
        ],
      },
    ],
  },
} as const satisfies Record<'privacy' | 'terms', LegalDocument>;

export const legalPageContent = {
  homeLabel: 'Início',
  breadcrumbLabel: 'Navegação estrutural',
} as const;

export const notFoundContent = {
  title: '404',
  lead: 'Esta página não existe ou foi movida.',
  homeLabel: 'Voltar ao início',
  whatsappLabel: 'Falar no WhatsApp',
  breadcrumbLabel: 'Navegação estrutural',
} as const;
