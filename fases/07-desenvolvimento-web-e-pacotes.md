# Fase 07 — Desenvolvimento web e pacotes

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Situação actual
Secção "Uma presença digital à sua medida" com 4 pacotes: Landing Page (50 000,00 Kz), Site Institucional (100 000,00 Kz), Site Profissional (150 000,00 Kz) e Site Empresarial (200 000,00 Kz), todos "a partir de". Cada cartão tem descrição curta e ligação. Nota abaixo sobre domínio, alojamento, email e integrações orçamentados à parte.

Problemas observados: os quatro cartões são iguais (nenhum guia a escolha); alturas desiguais; preço com ",00"; brilho radial azul em cada cartão; sem lista do que está incluído, sem prazo, sem CTA directo.

## Perguntas (ronda 1)

**Q1. Destaque de um pacote**
- A) Destacar o Site Profissional com borda e etiqueta "Mais escolhido" *(recomendado)*
- B) Sem destaque
- C) Destacar outro pacote (indicar qual)
- D) Saltar

**Q2. Ilustração em cada cartão**
- A) Mini-wireframe em CSS que mostra a escala do pacote (uma secção, várias páginas, com blog) *(recomendado, substitui o brilho radial)*
- B) Ícones do ui-kit
- C) Sem ilustração
- D) Saltar

**Q3. Formato do preço**
- A) "50.000 Kz" *(recomendado)*
- B) "50 000 Kz"
- C) Manter "50 000,00 Kz"
- D) Saltar

**Q4. Conteúdo do cartão**
- A) "Ideal para…" + 3 a 5 itens incluídos + prazo estimado *(recomendado)*
- B) Só a descrição actual
- C) Saltar

## Perguntas (ronda 2)

**Q5. Extras (domínio, alojamento, email, integrações)**
- A) Linha própria dentro de cada cartão ou faixa "Extras" com ícone *(recomendado)*
- B) Manter a nota pequena no fim
- C) Saltar

**Q6. CTA de cada cartão**
- A) "Pedir orçamento deste pacote" abre o WhatsApp com mensagem preenchida com o nome do pacote *(recomendado)*
- B) Ligação para a página de Desenvolvimento web
- C) Manter como está
- D) Saltar

**Q7. Tabela comparativa**
- A) Recolhida abaixo dos cartões ("Comparar pacotes") *(recomendado)*
- B) Sempre visível
- C) Sem tabela
- D) Saltar

## Dados que o agente **não pode inventar** (perguntar ao utilizador)
- O que cada pacote **realmente inclui** (nº de páginas, formulário, SEO básico, blog, painel, etc.).
- Prazo estimado de cada pacote.
- Número de WhatsApp a usar no CTA (usar o já existente no site se for o mesmo).

## Implementação
- Cartões com altura igual (grid com `align-items: stretch`), sem desfasamentos.
- Remover o brilho radial; hover discreto (elevação ou borda).
- A 320px: coluna única, pacote destacado primeiro; lista de itens recolhida em acordeão.
- A secção continua a incluir "Explorar desenvolvimento web →".

## Critérios de aceitação
- O visitante identifica em 5 segundos qual pacote escolher e como pedir orçamento.
- Preços e prazos coincidem com o que o utilizador confirmou.
