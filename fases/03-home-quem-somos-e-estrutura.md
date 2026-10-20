# Fase 03 — Home: estrutura e "Quem somos"

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Situação actual (home)
Hero → faixa de marcas (só texto) → Quem somos (fotografia de stock de pessoas a festejar) → Serviços (carrossel) → Desenvolvimento web (pacotes) → Produtos → Como trabalhamos → Porquê a NS2 → Notícias → CTA final → rodapé.

Problemas observados:
- A fotografia sugere uma equipa que não existe.
- O desenvolvimento web (o foco pretendido) aparece a meio da página.
- "Descer para explorar" é um cliché de landing page.
- Muitas secções têm título à esquerda e a direita vazia.
- Durante o scroll, o texto de "Desenvolvimento web" chegou a aparecer sobreposto a "Conheça a NS2" (verificar na fase 12).

## Perguntas (ronda 1)

**Q1. Imagem de "Quem somos"**
- A) Fotografia real dos dois fundadores a trabalhar, tirada com telemóvel (`public/images/sobre/fundadores.webp`, a fornecer) *(recomendado)*
- B) Composição sem pessoas: mockups dos projectos + diagonal da marca
- C) Manter a fotografia de stock actual por agora
- D) Sem imagem (tipografia e factos)
- E) Saltar

**Q2. Texto de posicionamento**
- A) "Equipa pequena, atendimento directo e parceiros especializados quando o projecto pede" *(recomendado, honesto)*
- B) Manter o texto actual
- C) O utilizador escreve outro
- D) Saltar

**Q3. Ênfase no desenvolvimento web**
- A) Subir "Desenvolvimento web" para logo a seguir ao hero *(recomendado)*
- B) Manter a ordem actual
- C) Hero com dois caminhos: "Web e sistemas" | "TI e equipamentos"
- D) Saltar

**Q4. "Descer para explorar"**
- A) Remover *(recomendado)*
- B) Manter
- C) Saltar

## Pergunta (ronda 2)

**Q5. CTA final ("Precisa de soluções de TI?")**
- A) Manter e aplicar a diagonal da marca
- B) Mudar o texto para reforçar web ("Tem um projecto em mente?")
- C) Manter como está
- D) Saltar

## Notas
- Não inventar números ("mais de 10 anos", "mais de 50 clientes"). Se o utilizador quiser factos em destaque, **perguntar que valores reais existem**.
- Se Q1-A for escolhida e a fotografia ainda não existir, usar a opção B temporariamente e registar a pendência.
- Qualquer imagem nova: `.webp`, com pelo menos 1200px de largura e `alt` descritivo.

## Critérios de aceitação
- Nos primeiros dois ecrãs, a home comunica o que a empresa faz e como contactar.
- Nenhuma imagem sugere equipa ou espaço físico que não existem.
