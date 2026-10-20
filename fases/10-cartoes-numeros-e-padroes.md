# Fase 10 — Cartões, números e padrões "de template"

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Contexto
O utilizador concordou, em princípio, com remover os números e melhorar os cartões, mas quer **escolher** o que se aplica. O site usa o mesmo molde de cartão em serviços, produtos, pacotes e notícias, o que torna a página monótona e denuncia um padrão gerado.

Padrões observados: eyebrows numerados ("01 — QUEM SOMOS", "02 — O QUE FAZEMOS"…), números dentro dos cartões, "Saber mais →" em todos, brilho radial azul nos cartões, secções com título à esquerda e direita vazia.

## Perguntas (ronda 1)

**Q1. Eyebrows numerados**
- A) Remover os números e manter só o rótulo ("Quem somos") *(recomendado)*
- B) Manter
- C) Substituir o número por um pequeno sinal da marca (a diagonal)
- D) Saltar

**Q2. Números dentro dos cartões**
- A) Remover em todos, excepto em "Como trabalhamos", onde há sequência real *(recomendado)*
- B) Remover em todos
- C) Manter
- D) Saltar

**Q3. Brilho radial azul**
- A) Remover *(recomendado)*
- B) Manter só no hover, muito subtil
- C) Saltar

**Q4. "Saber mais →" repetido**
- A) Cartão inteiro clicável com uma seta única *(recomendado)*
- B) Manter
- C) Saltar

## Perguntas (ronda 2)

**Q5. Variedade de formatos**
- A) Introduzir 3 formatos: lista editorial (serviços), mosaico assimétrico (projectos) e cartão destaque (pacote principal) *(recomendado)*
- B) Só ajustes ligeiros nos cartões actuais
- C) Saltar

**Q6. Tipografia dos títulos**
- A) Manter a actual
- B) Mostrar 2 ou 3 alternativas num protótipo antes de decidir *(não alterar sem aprovação)*
- C) Saltar

**Q7. Preços**
- A) Formato "50.000 Kz" em todo o site *(recomendado; coordenar com a fase 07)*
- B) Manter
- C) Saltar

## Implementação
- Alterar os componentes do `/ui-kit` primeiro e propagar; evitar estilos soltos por página.
- Manter `border`, `--line` e `--surface` do sistema; hover discreto, sem sombras pesadas.
- Respeitar `prefers-reduced-motion`.

## Critérios de aceitação
- A página mostra pelo menos 3 ritmos visuais diferentes.
- Nenhum cartão perde acessibilidade (foco visível, um único link).
