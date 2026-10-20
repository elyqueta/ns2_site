# Fase 06 — Notícias: capas dos artigos

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Imagens fornecidas (`public/images/noticias/`)

| Ficheiro | Artigo | Nota |
|---|---|---|
| `site-ou-landing-page-qual-escolher.webp` | Landing page, site institucional ou sistema web: qual escolher? | Código num portátil. **A mesma imagem é o hero de Desenvolvimento web** (páginas diferentes) |
| `cabeamento-estruturado-o-que-verificar.webp` | Cabeamento estruturado: o que verificar antes de montar a rede | Pessoa a ligar cabos. **Provável imagem gerada por IA**; formato vertical |
| `manutencao-preventiva-evita-paragens.webp` | Manutenção preventiva: como evitar paragens na sua empresa | Imagem **genérica** (secretária com teclado). É a mais fraca das três |

## Perguntas

**Q1. Tipo de capa**
- A) Fotografias fornecidas, com tratamento tonal comum *(recomendado para lançar)*
- B) Capas tipográficas desenhadas (título curto, categoria, cor de marca), sem fotografia
- C) Mistura: fotografia nas duas melhores, tipográfica na genérica
- D) Saltar

**Q2. Proporção das capas**
- A) 16:9 *(recomendado)*
- B) 3:2
- C) 4:3
- D) Saltar

**Q3. Imagem provavelmente gerada por IA (cabeamento)**
- A) Usar mesmo assim
- B) Trocar por capa tipográfica *(recomendado: uma pessoa a ligar cabos pode sugerir um serviço com equipa própria que a NS2 não tem)*
- C) Saltar

**Q4. Mostrar a imagem também dentro do artigo**
- A) Sim, como imagem de destaque no topo do artigo
- B) Não, só no cartão
- C) Saltar

## Notas
- Se escolher Q1-B ou C, criar um componente de capa reutilizável no `/ui-kit` (categoria + título + diagonal da marca).
- `alt` descritivo só se a imagem informar; caso contrário `alt=""`.
