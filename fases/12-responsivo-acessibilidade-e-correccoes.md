# Fase 12 — Responsivo (320px), acessibilidade e correcções

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Problemas observados nas gravações (desktop 1920px)
Apanhados em frames isolados; **confirmar antes de corrigir**:
1. **Títulos cortados:** em vários frames, títulos como "Tecnologia para si e para…" aparecem cortados em baixo. Provável máscara de animação com `overflow: hidden` que corta descendentes (g, p). Corrigir com `padding-bottom` na máscara ou `line-height` maior.
2. **Sobreposição de secções:** o texto de "Desenvolvimento web" chegou a aparecer por trás de "Conheça a NS2" durante o scroll (possível problema de `sticky`, `pin` ou reveal).
3. **Cartões de pacotes com alturas desiguais** (coordenar com a fase 07).
4. **Botão flutuante do WhatsApp** sobreposto ao rodapé (coordenar com a fase 11).
5. **Texto pequeno** em descrições, legendas e rodapé nos dois temas, e bordas de cartões muito discretas.

## Perguntas (ronda 1)

**Q1. Ordem de trabalho**
- A) Primeiro os bugs (1 a 4), depois contraste e 320px *(recomendado)*
- B) Primeiro 320px
- C) Só os bugs
- D) Saltar

**Q2. Contraste**
- A) **Medir** o contraste real renderizado (incluindo opacidades) com uma ferramenta e corrigir só o que ficar abaixo de 4.5:1 (texto normal) ou 3:1 (texto grande e bordas de componentes) *(recomendado)*
- B) Subir de forma geral o texto secundário e as bordas
- C) Manter
- D) Saltar

**Q3. Verificação**
- A) Lighthouse + axe automatizados e depois teste manual em 320, 375, 768 *(recomendado)*
- B) Só manual
- C) Saltar

## Nota sobre contraste
Os tokens principais do `/ui-kit` (texto secundário claro sobre escuro e escuro sobre claro) parecem passar, pela estimativa. O que pareceu fraco nas gravações foi **o tamanho pequeno do texto, opacidades aplicadas por cima e bordas muito subtis**. Por isso o agente deve medir, não assumir.

## Checklist 320px
- Sem scroll horizontal em nenhuma página (incluindo carrosséis, tabelas e faixa de marcas).
- Corpo de texto com pelo menos 16px; títulos com `clamp()`, sem quebras estranhas de palavras.
- Alvos de toque com pelo menos 44×44px (menu, tema, idioma, WhatsApp, ligações do rodapé).
- Menu hambúrguer: abre, fecha com Esc e devolve o foco; CTA "Pedir orçamento" visível.
- Pacotes e cartões em coluna única; listas longas em acordeão.
- Botão flutuante do WhatsApp com margem de segurança (`env(safe-area-inset-bottom)`).
- Imagens com `max-width: 100%`, `aspect-ratio` definido e sem saltos de layout.

## Acessibilidade e desempenho
- Foco visível em todos os elementos interactivos; ordem de tabulação lógica; link "saltar para o conteúdo".
- `prefers-reduced-motion`: desactivar parallax, reveals e marquee.
- `<html lang>` correcto e actualizado com o idioma (fase 01).
- `alt` descritivo ou vazio, conforme a função da imagem.
- Imagens: `loading="lazy"` excepto o hero; `fetchpriority="high"` só no hero; tamanhos responsivos (`srcset`/`sizes` ou o componente de imagem do framework).
- Verificar LCP, CLS e tamanho total da home; registar os números antes e depois no progresso.

## Critérios de aceitação
- Os 4 bugs observados corrigidos ou desmentidos (registar).
- Nenhum problema crítico no axe; Lighthouse de Acessibilidade e Boas práticas ≥ 90, se viável.
- Páginas utilizáveis a 320px sem scroll horizontal.
