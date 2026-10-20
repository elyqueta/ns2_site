# Fase 09 — Parceiros e marcas

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Situação actual
- Faixa da home com nomes em texto: DELL, LENOVO, HP, APPLE, SAMSUNG, KNUP, MULTILASER.
- Página **Parceiros**: o hero **não leva fotografia, leva a logomarca** (decisão do utilizador; documentar no progresso).

## Logótipos fornecidos (`public/images/parceiros/`)
Convertidos para **branco com transparência** (WebP sem perdas). Um único ficheiro serve os dois temas: no tema claro aplicar `filter: brightness(0)` (fica preto) e, se quiser, `opacity: .75`.

| Ficheiro | Marca | Está na faixa actual? |
|---|---|---|
| `dell.webp` | Dell | Sim |
| `lenovo.webp` | Lenovo | Sim |
| `apple.webp` | Apple | Sim |
| `samsung.webp` | Samsung | Sim |
| `multilaser.webp` | Multilaser | Sim (existe também `multilaser-original.svg`, a cores) |
| `thinkpad.webp` | ThinkPad (linha Lenovo) | Não |
| `asus.webp` | ASUS | Não |
| `infinix.webp` | Infinix | Não |
| *(em falta)* | **HP** | Sim, **logótipo não fornecido** |
| *(em falta)* | **KNUP** | Sim, **logótipo não fornecido** |

Um ficheiro enviado com a palavra "LATITUDE" **não é o logótipo da Dell** e não foi usado (está em `_referencias-nao-publicar/`).

## Perguntas (ronda 1)

**Q1. Que marcas mostrar**
- A) As 7 da faixa actual; HP e KNUP ficam em texto até haver logótipo *(recomendado)*
- B) As 8 logos disponíveis (incluir ASUS e Infinix, perguntar se vendem) + texto nas em falta
- C) Só as que têm logótipo
- D) Saltar

**Q2. Legenda da faixa**
- A) "Marcas que comercializamos" *(recomendado)*
- B) "Parceiros"
- C) Sem legenda
- D) Saltar

**Q3. Movimento**
- A) Estático *(recomendado)*
- B) Marquee lento (parado com `prefers-reduced-motion` e no hover/foco)
- C) Saltar

**Q4. Hero da página Parceiros**
- A) Logomarca grande (`/brand/logo-mark.svg`), opacidade 6–10%, recorte diagonal *(recomendado, decisão do utilizador)*
- B) Imagem de fundo
- C) Saltar

## Notas legais e de honestidade
- Uso dos logótipos para indicar marcas que a NS2 **vende** (uso descritivo). Confirmar as directrizes de cada marca.
- Não sugerir parceria oficial ou revenda autorizada se não existir: por isso a legenda "Marcas que comercializamos".
- Se a página Parceiros listar parceiros reais, **perguntar quais** (nomes e logótipos próprios). Não inventar parceiros.

## Implementação
- Altura uniforme (22–28px), alinhamento vertical ao centro, espaçamento regular. A Dell tem formato quase quadrado: limitar por altura.
- `alt` com o nome da marca; ligação só se existir página da marca.
- A 320px: 2 ou 3 colunas, sem scroll horizontal.

## Critérios de aceitação
- Logótipos nítidos e legíveis nos dois temas.
- Nenhuma marca sem logótipo parece "partida" (texto com estilo equivalente).
