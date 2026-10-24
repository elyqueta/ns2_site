# Fase 13 — Cartões de serviços da home: estilo "vidro" na secção com efeito pin

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques outras.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit`.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório**.

## Objectivo
Substituir o aspecto actual dos cartões de serviços da **secção da home que tem o efeito pin** (carrossel que se desloca com o scroll) por um estilo de **cartões de vidro tingidos**, com mais vida e menos aspecto de template. As imagens finais de cada cartão serão **fornecidas mais tarde pelo utilizador**: o estilo tem de ficar pronto agora e funcionar com as ilustrações actuais (`public/images/servicos/*.webp`) como imagem provisória.

**Não alteres o mecanismo do pin** (timeline, duração, progresso, barra). Muda só o markup e o CSS dos cartões, mais uma variável de "foco" calculada dentro do que já existe.

Relação com outras fases: para a **home**, esta fase tem prioridade sobre Q1 e Q2 da fase 04. Se a fase 04 já foi feita, adapta; a página `/servicos` mantém o que foi escolhido nessa fase. Coerente com a fase 10 (sem números 01–08 nos cartões e sem brilho radial genérico).

## Implementação de referência (obrigatório consultar)
`demo/cards-servicos-demo.html` é um exemplo **funcional e testado** (tema escuro, claro e 320px). Copia a estrutura e o CSS para os componentes reais, trocando os valores fixos pelos tokens do `/ui-kit`. A pasta `demo/` não vai para produção. As capturas em `demo/prev/` mostram o resultado, mas **não precisas de as ler**: tudo está descrito abaixo.

## Descrição do estilo (a referência visual, em palavras)
A referência é uma fila de 4 cartões verticais com cantos muito arredondados, sobre um fundo claro e suave:
- Cada cartão tem uma **fotografia a toda a largura no topo**. A fotografia **dissolve-se para baixo** numa cor única que vem dela (azul, verde, roxo…), de modo que não há linha de corte entre foto e conteúdo.
- Na parte de baixo, sobre essa cor, há uma camada de **vidro fosco** (desfoque) e o texto em branco: **título em negrito** com um pequeno emblema ao lado (no exemplo, uma bandeira), uma **linha pequena e esbatida** com dados (número de hotéis e pacotes) e, no fim, um **botão de vidro** (fundo escuro translúcido, borda fina clara, cantos arredondados) com o texto "Explore Now" à esquerda e uma seta ">" à direita.
- As **sombras têm a cor do cartão** (um brilho colorido por baixo), em vez de cinzento neutro.
- O cartão **central** está **elevado cerca de 22px**, ligeiramente maior e mais saturado; os laterais são mais baixos e mais discretos. Os dos extremos aparecem **cortados** pelo limite do ecrã, a esvanecer.
- Espaçamento generoso entre cartões, tipografia limpa e pouco texto.

## Anatomia do cartão (ordem dos elementos)
1. `a.svc-card` (o cartão inteiro é **um único link**).
2. `.svc-badge` (opcional, canto superior esquerdo): "Com parceiros", só nos serviços terceirizados.
3. `.svc-media` com `<img>` (topo; ocupa 66% da altura; máscara que o dissolve).
4. `.svc-glass` (camada de vidro na metade inferior, com `backdrop-filter`).
5. `.svc-body`: `.svc-head` (emblema + título), `.svc-meta` (linha esbatida), `.svc-cta` (botão de vidro, **não é um link**; é só visual, para não haver links aninhados).

## Tokens e medidas (desktop 1440px; valores iniciais)
| Elemento | Valor |
|---|---|
| Largura do cartão | `clamp(240px, 78vw, 300px)` |
| Proporção | `300 / 440` |
| Raio do cartão | 22px |
| Espaço entre cartões | 28px (16px até 480px) |
| Elevação do cartão em foco | até −22px (−14px até 480px) |
| Escala em foco | até 1.04 |
| Imagem | `inset: 0 0 34% 0`; `object-fit: cover`; `object-position: center 30%`; máscara `linear-gradient(180deg, #000 58%, transparent)` |
| Fundo do cartão | gradiente vertical da cor do cartão (55% → 92%) até `#05070D` |
| Vidro | altura 62%, `backdrop-filter: blur(14px) saturate(1.15)` (8px até 480px), gradiente da cor do cartão para `#05070D` a 62% |
| Título | Sora 700, 22px (20px até 480px), máx. 2 linhas, sombra de texto suave |
| Linha meta | DM Sans 13px, branco a 74%, máx. 2 linhas |
| Botão | altura ~46px, raio 14px, fundo `rgb(5 7 13 / .30)`, borda `1px rgb(255 255 255 / .14)`, blur 10px, texto 15px/500, seta 16px |
| Emblema | 30×30px, raio 10px, vidro (fundo branco 14%, borda branca 22%), ícone de 16px do `/ui-kit` |
| Sombra | `0 22px 44px -16px` na cor do cartão, a 30%; em foco sobe a 60% e aumenta o desfoque |

Cor de cada cartão: variável `--tint-rgb` em formato `R G B` (ex.: `63 111 181`) para usar `rgb(var(--tint-rgb) / .5)`. **Não uses `color-mix`** como única solução (compatibilidade).

Paleta de reserva (tons da marca, sem arco-íris), rodar pela ordem dos cartões:
`63 111 181` (azul) · `84 94 214` (índigo) · `36 140 156` (azul-petróleo) · `120 82 200` (violeta) · `46 125 168` (azul-aço)

Fundo da secção: **escuro** `radial-gradient(...) #10203F → #05070D`; **claro** `linear-gradient(180deg, #F4F7FC, #E3E9F3)`. Os cartões continuam escuros nos dois temas (como a referência), com brilho colorido por baixo.

## Estados
- **Foco contínuo (`--focus`, 0 a 1):** calculado por cartão como `max(0, 1 − |centroDoCartão − centroDoEcrã| / larguraDoCartão)`. Dirige a elevação, a escala, a intensidade da sombra, a saturação (0.85 → 1.10) e o brilho (0.86 → 1.0) da imagem. É contínuo (não há saltos).
- **Hover/foco de teclado:** botão passa a vidro mais claro (fundo branco 16%, borda 28%) e a seta desloca-se 3px. Anel de foco visível de 3px (`#9CC0F5`, offset 4px).
- **`prefers-reduced-motion`:** `--focus` fixo em 0, sem transformações nem transições.
- **Extremos:** esvanecimento lateral com `mask-image` no **contentor visível** (não na pista que se desloca).

## Integração com o efeito pin
1. Inspecciona a implementação actual (GSAP/ScrollTrigger, CSS `position: sticky`, outra). **Não a substituas.**
2. A pista (elemento que se desloca) mantém-se. Os novos cartões entram nela.
3. Actualiza `--focus` dentro do callback de progresso que já existe (ex.: `onUpdate`) ou, se não houver, num único `requestAnimationFrame` ligado ao scroll. **Sem novos listeners de scroll duplicados.**
4. Ao início do pin, o primeiro cartão deve estar **centrado** (padding lateral suficiente); no fim, o último também.
5. A barra de progresso actual mantém-se.
6. **Até 768px:** sem pin (ver Q4). Scroll horizontal nativo com `scroll-snap-type: x mandatory`, `scroll-snap-align: center`.
7. Desempenho: `backdrop-filter` só em `.svc-glass`, `.svc-cta`, emblema e etiqueta; `will-change: transform` só nos cartões; nunca animar o desfoque.

## Adaptação do conteúdo dos serviços (sem quebrar o cartão)
Regras: **título e linha meta com `line-clamp: 2`** e altura do cartão fixa, para o layout nunca mudar; **reutilizar as descrições actuais do site** (cortadas por `line-clamp`); **não inventar texto, números nem prazos**; sem numeração 01–08; o botão chama-se "Saber mais" (ver Q8).

| Serviço (título actual) | Título curto proposto | Linha meta | Emblema (ícone do ui-kit) |
|---|---|---|---|
| Infraestrutura de redes e servidores | Redes e servidores | descrição actual do site | servidor/rede |
| Suporte remoto | Suporte remoto | descrição actual do site | auscultadores |
| Suporte on site | Suporte on site | "Equipa técnica que se desloca ao local…" (actual) | localização |
| Manutenção de equipamentos | Manutenção de equipamentos | "Manutenção preventiva e correctiva de computadores…" (actual) | ferramenta |
| Contratos de TI | Contratos de TI | "Manutenção continuada e alta disponibilidade…" (actual) | documento/escudo |
| Construtoria (consultoria) | Consultoria | "Análise das necessidades à implementação…" (actual) | lâmpada |
| Sistemas e software | Sistemas e software | descrição actual do site | código |
| Locação de equipamentos de TI | Locação de equipamentos | "Computadores, portáteis e periféricos modernos…" (actual) | portátil |
| Websites e sistemas web | Websites e sistemas web | "Do site institucional ao sistema de gestão…" (actual) | janela de browser |

Os textos da demo para "Redes e servidores" e "Suporte remoto" são **só de demonstração**: usar os do site.
Se existir a etiqueta "Com parceiros" (fase 04, Q4), mostra-a como `.svc-badge` apenas nos serviços que o utilizador indicar como terceirizados.

## Imagens
- **Agora:** usar `public/images/servicos/<slug>.webp` (ilustrações 16:10) como provisórias. Ficam recortadas ao centro e dissolvem-se na cor do cartão. Está testado.
- **Depois (fotografias do utilizador):** formato **4:5 (1200×1500)** ou **1:1 (1200×1200)**, WebP, com o assunto no **centro-superior**: os 35% inferiores ficam cobertos por vidro. Caminho: `public/images/servicos/cartoes/<slug>.webp`, mesmos slugs das ilustrações. A troca deve exigir **apenas** pôr o ficheiro e, se existir `foto` no dado do serviço, indicá-lo; o estilo não muda.
- `alt=""` na imagem (decorativa; o título está em texto).

## Perguntas (ronda 1)

**Q1. Cor de cada cartão (`--tint-rgb`)**
- A) Paleta de reserva de 5 tons da marca, a rodar pelos cartões *(recomendado agora)*
- B) Extraída automaticamente de cada fotografia (média da zona central, limitada em luminosidade para o texto continuar legível), com a paleta de reserva enquanto não houver foto
- C) Um só tom (azul de acento) em todos
- D) Saltar

**Q2. Destaque do cartão central**
- A) Contínuo, conforme a posição no scroll (`--focus`) *(recomendado)*
- B) Por saltos: só o cartão activo fica elevado
- C) Sem destaque: todos iguais
- D) Saltar

**Q3. Imagem enquanto não houver fotografias**
- A) Ilustrações actuais dos serviços *(recomendado)*
- B) Gradiente da cor do cartão com um ícone grande, sem imagem
- C) Esperar pelas fotografias antes de implementar
- D) Saltar

**Q4. Mobile (até 768px)**
- A) Sem pin: scroll horizontal nativo com snap e indicador de progresso *(recomendado)*
- B) Manter o pin também em mobile
- C) Uma coluna vertical de cartões
- D) Saltar

## Perguntas (ronda 2)

**Q5. Títulos**
- A) Títulos curtos da tabela acima *(recomendado)*
- B) Títulos completos actuais (máx. 2 linhas)
- C) Saltar

**Q6. Linha meta**
- A) Reutilizar a descrição actual, limitada a 2 linhas *(recomendado)*
- B) Tags curtas, tipo "Redes · Servidores · Cabeamento" (perguntar ao utilizador o texto)
- C) Sem linha meta
- D) Saltar

**Q7. Emblema ao lado do título (no lugar da bandeira da referência)**
- A) Ícone do `/ui-kit` em quadrado de vidro *(recomendado)*
- B) Sem emblema
- C) Saltar

**Q8. Botão do cartão**
- A) "Saber mais" + seta *(recomendado)*
- B) "Pedir orçamento" + seta
- C) Outro texto (perguntar)
- D) Saltar

## Critérios de aceitação
- Nenhum título ou descrição quebra o cartão; todos têm a mesma altura.
- Contraste do texto sobre o vidro **≥ 4.5:1 medido** em cada um dos 5 tons e nos dois temas (se falhar, escurecer o fim do gradiente, não o texto).
- Efeito pin igual ao anterior (duração, progresso, saída); sem saltos nem sobreposições.
- Foco contínuo fluido (sem engasgos) em desktop e num telemóvel de gama média; se houver quebras de fluidez, retirar o blur do botão e do emblema primeiro.
- 320px: um cartão central com cerca de 12% do vizinho à vista, sem scroll vertical dentro do carrossel.
- Teclado: Tab percorre os cartões por ordem; o cartão em foco fica visível; Enter abre o serviço.
- Trocar uma ilustração por uma fotografia não exige alterar CSS.
- `/ui-kit` actualizado com o novo cartão (com e sem etiqueta "Com parceiros") nos dois temas.
