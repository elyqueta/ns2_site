# Fase 08 — Projectos e cartões "Brevemente"

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Situação actual
Página "Projectos": hero "Soluções web que já estão no ar", etiqueta "PROJECTO CONFIRMADO" e dois cartões lado a lado: um grande com o site da **Gráfica Viva** (pré-visualização em vídeo/captura com menu e botões "Pedir orçamento" e "Ver serviços") e um cartão pequeno quase vazio ("Website desenvolvido pela NS2 Innovation — Desenvolvimento do website da Gráfica Viva.").

Projectos apresentáveis (e **só estes**):
1. **Gráfica Viva** — website (já no ar).
2. **Foco** — plataforma de gestão de tarefas pessoais, profissionais e colectivas, com tema claro e escuro.

Os restantes projectos ainda não estão prontos e podem aparecer como "Brevemente".

## Imagens em falta (o utilizador tem de fornecer)
Não estão no pacote. Pedir ao utilizador capturas de ecrã reais, com estes nomes:
- `public/images/projectos/grafica-viva-desktop.webp` (cerca de 1600×1000)
- `public/images/projectos/grafica-viva-mobile.webp` (cerca de 750×1500)
- `public/images/projectos/foco-dashboard-claro.webp` e `foco-dashboard-escuro.webp` (cerca de 1600×1000)

Enquanto não existirem, o agente usa a pré-visualização actual (Gráfica Viva) e um placeholder da marca (Foco) e regista a pendência.

## Perguntas (ronda 1)

**Q1. Layout da página**
- A) Gráfica Viva em destaque (largura total) + Foco + 2 cartões "Brevemente" *(recomendado)*
- B) Grelha 2×2 de cartões iguais
- C) Lista editorial (um projecto por linha)
- D) Saltar

**Q2. Cartões "Brevemente"**
- A) 2 cartões com borda tracejada, tipo de projecto e estado "Em desenvolvimento" *(recomendado)*
- B) 1 cartão "Quer ser o próximo?" com CTA para orçamento
- C) Nenhum
- D) Saltar

**Q3. Conteúdo de cada projecto**
- A) Desafio → Solução → Resultado, **só com dados reais** + tecnologias *(recomendado)*
- B) Só descrição curta e tecnologias
- C) Saltar

**Q4. Imagem do Foco conforme o tema**
- A) Trocar entre captura clara e escura consoante o tema do site *(recomendado)*
- B) Uma única captura
- C) Saltar

## Perguntas (ronda 2)

**Q5. Etiqueta "PROJECTO CONFIRMADO"**
- A) Substituir por "No ar" *(recomendado)*
- B) Manter
- C) Saltar

**Q6. Projectos na home**
- A) Mostrar os 2 projectos numa secção "Projectos" na home, depois dos pacotes *(recomendado)*
- B) Só na página Projectos
- C) Saltar

## Dados que o agente **não pode inventar** (perguntar)
- Nome e tipo dos projectos "Brevemente" (se escolher Q2-A). Não usar nomes de clientes sem autorização.
- Resultados, métricas, prazos ou testemunhos: só se o utilizador fornecer.
- Tecnologias usadas em cada projecto.

## Implementação
- Cartões de projecto reutilizam a diagonal da marca na máscara da imagem.
- Moldura de browser/telemóvel em CSS (sem imagens extra) nas capturas.
- Cartões "Brevemente": sem imagem inventada, com estado claro e acessível (`aria-label`).
- Cada projecto com ligação "Ver projecto" (externa com `rel="noopener"` se aplicável).

## Critérios de aceitação
- A página mostra 2 provas reais sem parecer vazia.
- Nenhum cartão "Brevemente" parece um projecto concluído.
