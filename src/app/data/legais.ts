import { LocalizedText } from '../i18n/types';

export interface LegalSection {
  readonly title: LocalizedText;
  readonly paragraphs: readonly LocalizedText[];
}

export interface LegalDocument {
  readonly title: LocalizedText;
  readonly lead: LocalizedText;
  readonly sections: readonly LegalSection[];
  readonly reviewNotice: LocalizedText;
}

export const legalDocuments = {
  privacy: {
    title: { pt: 'Política de Privacidade', en: 'Privacy Policy' },
    lead: {
      pt: 'Saiba como são tratados os dados que decide partilhar connosco.',
      en: 'Learn how we handle the information you choose to share with us.',
    },
    reviewNotice: {
      pt: 'Este texto base requer revisão jurídica antes da publicação definitiva.',
      en: 'This draft requires legal review before final publication.',
    },
    sections: [
      {
        title: { pt: '1. Quem somos', en: '1. Who we are' },
        paragraphs: [
          {
            pt: 'A NS2 Innovation presta serviços de tecnologia e comércio de produtos informáticos em Angola.',
            en: 'NS2 Innovation provides technology services and computer products in Angola.',
          },
          {
            pt: 'Para questões relacionadas com privacidade, pode contactar-nos através de contacto@ns2innovation.com ou pelo telefone +244 924 666 323.',
            en: 'For privacy enquiries, contact us at contacto@ns2innovation.com or by phone on +244 924 666 323.',
          },
        ],
      },
      {
        title: { pt: '2. Dados que pode partilhar', en: '2. Information you may share' },
        paragraphs: [
          {
            pt: 'O site não recolhe nem armazena dados pessoais em servidores próprios. Ao contactar-nos por WhatsApp ou email, pode escolher incluir dados como o nome, telefone, endereço de email, empresa e informação sobre o pedido.',
            en: 'The site does not collect or store personal data on its own servers. When contacting us by WhatsApp or email, you may choose to include your name, phone number, email address, company and details about your request.',
          },
          {
            pt: 'Se usar as sugestões de ponto de partida no mapa, o texto que escrever é enviado directamente ao Google Maps Platform para apresentar resultados. A NS2 Innovation não o guarda; o tratamento pelo Google rege-se pelas políticas do próprio serviço.',
            en: 'If you use the map’s starting-point suggestions, the text you enter is sent directly to Google Maps Platform to return results. NS2 Innovation does not store it; Google processes it under its own policies.',
          },
        ],
      },
      {
        title: { pt: '3. Armazenamento local', en: '3. Local storage' },
        paragraphs: [
          {
            pt: 'O navegador pode guardar preferências de apresentação, como o tema visual e o idioma, para as aplicar nas visitas seguintes.',
            en: 'Your browser may store display preferences, such as theme and language, to use on future visits.',
          },
        ],
      },
      {
        title: { pt: '4. Finalidade', en: '4. Purpose' },
        paragraphs: [
          {
            pt: 'Os dados incluídos voluntariamente numa mensagem são usados para responder ao pedido de informação ou orçamento.',
            en: 'Information you choose to include in a message is used to respond to your enquiry or quote request.',
          },
        ],
      },
      {
        title: { pt: '5. Serviços de terceiros', en: '5. Third-party services' },
        paragraphs: [
          {
            pt: 'As sugestões de locais e a abertura de rotas usam serviços do Google Maps Platform. A abertura do WhatsApp e do programa de email ocorre nos serviços escolhidos pelo visitante. Cada fornecedor aplica as suas próprias políticas de privacidade.',
            en: 'Place suggestions and directions use Google Maps Platform. WhatsApp and email open in the services chosen by the visitor. Each provider applies its own privacy policies.',
          },
        ],
      },
      {
        title: { pt: '6. Direitos', en: '6. Your rights' },
        paragraphs: [
          {
            pt: 'Para exercer os direitos previstos na legislação angolana de protecção de dados pessoais, incluindo pedidos de acesso, rectificação ou eliminação, contacte contacto@ns2innovation.com.',
            en: 'To exercise rights under Angolan personal data protection law, including requests for access, correction or deletion, contact contacto@ns2innovation.com.',
          },
        ],
      },
      {
        title: { pt: '7. Segurança', en: '7. Security' },
        paragraphs: [
          {
            pt: 'Recomendamos que não inclua informação sensível desnecessária nas mensagens enviadas através de serviços de terceiros.',
            en: 'We recommend that you do not include unnecessary sensitive information in messages sent through third-party services.',
          },
        ],
      },
      {
        title: { pt: '8. Alterações', en: '8. Changes' },
        paragraphs: [
          {
            pt: 'Esta informação poderá ser actualizada quando as funcionalidades ou práticas do site forem alteradas.',
            en: 'This information may be updated when the site’s features or practices change.',
          },
        ],
      },
      {
        title: { pt: '9. Contactos', en: '9. Contact' },
        paragraphs: [
          {
            pt: 'NS2 Innovation — Avenida 21 de Janeiro, Bairro Gamek, Luanda, Angola. Email: contacto@ns2innovation.com.',
            en: 'NS2 Innovation — Avenida 21 de Janeiro, Gamek, Luanda, Angola. Email: contacto@ns2innovation.com.',
          },
        ],
      },
    ],
  },
  terms: {
    title: { pt: 'Termos e Condições', en: 'Terms and Conditions' },
    lead: {
      pt: 'Condições gerais de utilização do site da NS2 Innovation.',
      en: 'General terms for using the NS2 Innovation website.',
    },
    reviewNotice: {
      pt: 'Este texto base requer revisão jurídica antes da publicação definitiva.',
      en: 'This draft requires legal review before final publication.',
    },
    sections: [
      {
        title: { pt: '1. Objecto e aceitação', en: '1. Purpose and acceptance' },
        paragraphs: [
          {
            pt: 'Este site apresenta informação institucional, produtos e serviços da NS2 Innovation. A utilização do site pressupõe a leitura destes termos.',
            en: 'This site presents information about NS2 Innovation, its products and services. By using the site, you acknowledge these terms.',
          },
        ],
      },
      {
        title: { pt: '2. Informação do site', en: '2. Website information' },
        paragraphs: [
          {
            pt: 'A informação é disponibilizada para fins informativos. Os valores apresentados como “a partir de” são indicativos e não constituem uma proposta vinculativa; cada pedido será avaliado antes da apresentação de uma proposta.',
            en: 'Information is provided for general purposes. Prices shown as “starting at” are indicative and are not binding offers; each request will be assessed before a proposal is issued.',
          },
        ],
      },
      {
        title: { pt: '3. Propriedade intelectual', en: '3. Intellectual property' },
        paragraphs: [
          {
            pt: 'A marca, o logótipo e os conteúdos próprios da NS2 Innovation não podem ser reproduzidos sem autorização.',
            en: 'The NS2 Innovation brand, logo and original content may not be reproduced without permission.',
          },
        ],
      },
      {
        title: { pt: '4. Ligações externas', en: '4. External links' },
        paragraphs: [
          {
            pt: 'O site pode incluir ligações para serviços externos, como WhatsApp e Google Maps. A utilização desses serviços rege-se pelos termos dos respectivos fornecedores.',
            en: 'The site may link to external services such as WhatsApp and Google Maps. Use of those services is governed by their providers’ terms.',
          },
        ],
      },
      {
        title: { pt: '5. Limitação de responsabilidade', en: '5. Limitation of liability' },
        paragraphs: [
          {
            pt: 'A NS2 Innovation procura manter a informação actualizada, mas não garante que esteja sempre completa ou livre de interrupções.',
            en: 'NS2 Innovation aims to keep information up to date but does not guarantee that it will always be complete or uninterrupted.',
          },
        ],
      },
      {
        title: { pt: '6. Produtos e serviços', en: '6. Products and services' },
        paragraphs: [
          {
            pt: 'A disponibilização de produtos e serviços depende de confirmação e de proposta específica. O site não processa pagamentos nem conclui compras.',
            en: 'Product and service availability requires confirmation and a specific proposal. The site does not process payments or complete purchases.',
          },
        ],
      },
      {
        title: { pt: '7. Lei aplicável', en: '7. Governing law' },
        paragraphs: [
          {
            pt: 'A interpretação destes termos rege-se pela legislação angolana. Os litígios serão submetidos aos tribunais competentes em Luanda, nos termos legais aplicáveis.',
            en: 'These terms are governed by Angolan law. Disputes will be submitted to the competent courts in Luanda, as provided by applicable law.',
          },
        ],
      },
      {
        title: { pt: '8. Alterações', en: '8. Changes' },
        paragraphs: [
          {
            pt: 'Estes termos poderão ser actualizados. A versão publicada nesta página será a aplicável à utilização do site.',
            en: 'These terms may be updated. The version published on this page applies to use of the site.',
          },
        ],
      },
      {
        title: { pt: '9. Contactos', en: '9. Contact' },
        paragraphs: [
          {
            pt: 'Para esclarecimentos sobre estes termos, contacte contacto@ns2innovation.com.',
            en: 'For questions about these terms, contact contacto@ns2innovation.com.',
          },
        ],
      },
    ],
  },
} as const satisfies Record<'privacy' | 'terms', LegalDocument>;

export const legalPageContent = {
  homeLabel: { pt: 'Início', en: 'Home' } satisfies LocalizedText,
  breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' } satisfies LocalizedText,
} as const;

export const notFoundContent = {
  title: '404',
  lead: {
    pt: 'Esta página não existe ou foi movida.',
    en: 'This page does not exist or has been moved.',
  } satisfies LocalizedText,
  homeLabel: { pt: 'Voltar ao início', en: 'Back to home' } satisfies LocalizedText,
  whatsappLabel: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' } satisfies LocalizedText,
  breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' } satisfies LocalizedText,
} as const;
