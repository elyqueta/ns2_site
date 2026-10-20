# Fase 05 — Produtos: imagens e cartões

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Imagens fornecidas (`public/images/produtos/`)
Nenhuma imagem enviada era uma fotografia de produto "limpa". Estado de cada slot:

| Ficheiro | Estado | O que é | Nota |
|---|---|---|---|
| `acessorios.webp` | Razoável | Secretária escura com teclado, caderno e caneca | Licença "Foto Premium" (paga): confirmar |
| `consumiveis.webp` | Razoável | Parede de tinteiros e impressoras | Mostra uma **loja** e marcas (HP, Epson). Pode sugerir espaço físico |
| `notebooks.webp` | **Provisória** | Loja com portáteis expostos | Sugere loja física. Trocar por foto de um portátil |
| `pecas.webp` | **Provisória** | Linhas de circuito azuis (vector), formato 3:1 | Simbólica. Licença "Premium Vector": confirmar |
| `moveis.webp` | **Provisória** | Escritório desfocado (provável IA) | Pouco específica de mobiliário |
| `desktops.webp` | **Placeholder gerado** | Gradiente do sistema com diagonal da marca | Não há imagem de desktop. Trocar por foto |

## Perguntas (ronda 1)

**Q1. Como tratar as provisórias**
- A) Usar já e marcar para substituição *(recomendado para lançar)*
- B) Usar só as razoáveis; nas restantes, placeholder da marca
- C) Placeholder da marca em todas até haver fotografias próprias
- D) Saltar

**Q2. Layout do cartão**
- A) Imagem no topo (16:10, cantos arredondados) + título + texto *(recomendado)*
- B) Imagem como fundo com overlay de gradiente
- C) Manter só o ícone e mostrar a imagem ao passar o rato
- D) Saltar

**Q3. Fotografias próprias**
- A) Criar `docs/guia-fotografia-produtos.md` com um guia curto (fundo neutro, luz de janela, ângulo de três quartos, 1600px, nomes dos ficheiros) *(recomendado)*
- B) Não criar o guia
- C) Saltar

## Implementação
- Mesmo `aspect-ratio` e `object-fit: cover` em todos; `object-position` por ficheiro (ex.: `notebooks` tem o assunto à esquerda, usar `left 45%`).
- `notebooks` é vertical (3:4) e `pecas` é 3:1: ambos são cortados. Confirmar que o assunto fica visível.
- Se os cartões passarem a ter imagem, perguntar se o ícone actual fica redundante.
- Evitar marcas visíveis, a não ser as que a NS2 realmente vende.

## Critérios de aceitação
- Seis cartões com altura uniforme e nenhuma imagem esticada.
- Placeholder legível nos dois temas.
