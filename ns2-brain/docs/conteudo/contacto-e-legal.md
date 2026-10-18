# Contacto, formulário e páginas legais

## Dados oficiais
- **Morada:** Avenida 21 de Janeiro, Bairro Gamek (próximo da Organizações Chana), n.º s/n, Município de Luanda, Província de Luanda, Angola.
- **Telefones / WhatsApp:** +244 924 666 323 (principal para WhatsApp) · +244 935 898 513
- **Email:** contacto@ns2innovation.com
- **Site:** www.ns2innovation.com
- **Redes sociais:** o material tem os identificadores `@Ns2_Innovation`, `@Ns2Innovation` e `Ns2_Innovation`, **sem indicar a plataforma**. → `data/contacto.ts` tem um array `redes` com `{plataforma, handle, url}`; **deixar `url` vazio e NÃO mostrar** até o utilizador confirmar. Registar pergunta em PROGRESSO.md.
- **Horário de atendimento:** não fornecido → não mostrar. 
- **Mapa:** botão "Abrir no Google Maps" com `https://www.google.com/maps/search/?api=1&query=Avenida+21+de+Janeiro+Gamek+Luanda` (sem iframe).

## WhatsApp (canal principal)
- Link base: `https://wa.me/244924666323?text=<mensagem codificada>`.
- Botão flutuante em todas as páginas (canto inferior direito, ícone WhatsApp, rótulo "Falar no WhatsApp" ao expandir). Mensagem padrão: "Olá! Vim pelo site da NS2 Innovation e gostaria de mais informações."
- Cada CTA de serviço/pacote/produto usa a sua mensagem (ver ficheiros de conteúdo).

## Formulário (`/contacto`) — sem servidor
Campos (Reactive Forms tipados): **Nome** (obrigatório) · **Empresa** (opcional) · **Telefone** (obrigatório, validação simples) · **Email** (opcional, formato válido) · **Interesse** (select: Infraestrutura de redes e servidores · Suporte e manutenção · Contratos de TI · Consultoria (Construtoria) · Sistemas e software · Locação de equipamentos · Produtos (portáteis, desktops, peças, acessórios, móveis, consumíveis) · Websites · Loja online · Sistema web · Outro) · **Mensagem** (obrigatório, mínimo 10 caracteres) · consentimento ("Concordo em usar estes dados apenas para contactar-me", obrigatório).
Aceita `?servico=<slug>` para pré-seleccionar interesse.
Dois botões de envio:
1. **Enviar por WhatsApp** (primário): abre `wa.me` com mensagem formatada:
   ```
   Olá! Sou {nome}{ da empresa {empresa}}.
   Interesse: {interesse}
   Telefone: {telefone}
   {mensagem}
   ```
2. **Enviar por email** (secundário): `mailto:contacto@ns2innovation.com?subject=<Interesse> - Pedido de contacto&body=<mesmo texto + email>`.
Validação visível, mensagem de sucesso "A abrir o WhatsApp…" com `aria-live`. Nada é guardado nem enviado a servidores.
Layout: coluna esquerda com cartões de contacto (WhatsApp, telefone, email, morada, mapa); coluna direita com o formulário; `PageHero` com título "Vamos conversar." 

## Política de Privacidade (`/politica-de-privacidade`) — texto base (rever com assessoria jurídica)
Secções: 1. Quem somos (NS2 Innovation, contactos) · 2. Dados que recolhemos (apenas os que o visitante escolhe incluir ao contactar-nos por WhatsApp/email; o site não recolhe dados em servidores próprios nem usa cookies de seguimento) · 3. Armazenamento local (preferência de tema e idioma no navegador) · 4. Finalidade (responder a pedidos e orçamentos) · 5. Serviços de terceiros (WhatsApp/Meta e o cliente de email do utilizador têm as suas próprias políticas) · 6. Direitos (acesso, rectificação, eliminação — contactar contacto@ns2innovation.com; referir a legislação angolana de protecção de dados pessoais) · 7. Segurança · 8. Alterações · 9. Contactos. Data de actualização.

## Termos e Condições (`/termos-e-condicoes`) — texto base (rever com assessoria jurídica)
Secções: 1. Objecto e aceitação · 2. Informação do site (carácter informativo; valores "a partir de" são indicativos e não constituem proposta vinculativa) · 3. Propriedade intelectual (marca, logótipo, conteúdos da NS2) · 4. Ligações externas · 5. Limitação de responsabilidade · 6. Produtos e serviços (sujeitos a disponibilidade e proposta) · 7. Lei aplicável (lei angolana) e foro (Luanda) · 8. Alterações · 9. Contactos.

## 404
Título grande "404", texto "Esta página não existe ou foi movida.", botões "Voltar ao início" e "Falar no WhatsApp"; diagonal animada.
