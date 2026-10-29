# Progresso — NS2 Innovation Site

## Correcção: repouso dos cartões de produtos e categorias de desenvolvimento web

- **Estado:** concluída
- O estado de repouso do `ProductHighlightCard` passou a reservar uma zona independente para o pill de orçamento, que mantém `nowrap`, largura baseada no conteúdo e `flex-shrink: 0`. A descrição fica limitada a duas linhas, o título reserva uma linha mínima e a etiqueta permanece no painel, abaixo do recorte da imagem. O hover aprovado não foi alterado.
- Os cartões de categoria de `/desenvolvimento-web` usam agora título branco no canto inferior esquerdo sobre gradiente preto independente do tema. Em mobile/tablet a descrição e a acção ficam ocultas; em desktop entram no hover/foco com transição de 500ms, deslocamento curto e reforço do gradiente. O estado seleccionado mantém borda/ring accent.
- **Ficheiros alterados:** `src/styles.css`, `src/app/shared/ui/product-highlight-card/product-highlight-card.html`, `src/app/pages/desenvolvimento-web/desenvolvimento-web.html` e este ficheiro.
- **Verificações:** dimensões verificadas em 320, 768, 1024, 1280, 1440 e 1920px; cartões de produtos mantiveram 448px de altura, descrição com duas linhas e separação de 32px antes do botão; categorias verificadas com gradiente fixo e estados mobile/desktop. `npm run build` e `npm test -- --watch=false` passam após o último ajuste.
- **Pendências:** nenhuma específica desta correcção; permanecem apenas assets provisórios já registados.

## Correcção: cartão de produtos e salto dos testemunhos

- **Estado:** concluída
- O `ProductHighlightCard` foi redesenhado como uma composição de altura fixa e camadas estáveis: imagem recortada no repouso, preenchimento total no hover/foco, overlay, texto e pill de orçamento sem alteração de layout. O movimento usa uma curva única de 600ms, elevação máxima de 3px, suporte a reduced motion e estado `forceHover` no UI kit.
- A causa confirmada do salto vertical dos testemunhos era a combinação de refreshes globais do `ScrollTrigger` durante o carregamento inicial de imagens sem cache com feedback de scroll durante o tween do carrossel. O carregamento de imagens agora é filtrado para imagens visíveis, agrupado por debounce e suspenso durante a interacção do carrossel; a posição vertical é preservada em refreshes provocados por imagem. O carrossel também emite a interacção antes do movimento programático e ignora índices intermédios.
- **Ficheiros principais:** `src/styles.css`, `src/app/shared/ui/product-highlight-card/product-highlight-card.ts`, `src/app/shared/ui/product-highlight-card/product-highlight-card.html`, `src/app/pages/ui-kit/ui-kit.ts`, `src/app/pages/ui-kit/ui-kit.html`, `src/app/shared/directives/home-carousel.directive.ts` e `src/app/core/scroll.service.ts`.
- **Verificações:** cartões do UI kit verificados a 320px, com 448px de altura e estados de repouso/`forceHover`; cinco mudanças consecutivas de testemunho após carregamento da Home mantiveram `window.scrollY` sem salto. `npm run build` passou com 45 rotas prerenderizadas e o aviso conhecido do orçamento inicial (+51,89 kB); `npm test -- --watch=false` passou com 22/22 testes.
- **Pendências:** substituir as imagens provisórias dos testemunhos/produtos quando forem fornecidos assets finais; validação física em dispositivos touch.

### Reprodução adicional no desktop

- Após hard reload da Home, a primeira mudança de testemunho ainda expôs uma condição de corrida: um `ScrollTrigger.refresh()` de imagem já tinha sido agendado antes do clique e executava durante o tween/interacção. O bloqueio temporal era verificado apenas no evento `load`, demasiado cedo.
- O callback do refresh volta agora a verificar a janela de interacção imediatamente antes de recalcular o layout, evitando que esse refresh pendente altere a posição vertical durante a mudança do testemunho. Após hard reload e clique real no desktop, a posição manteve-se estável, com apenas variação residual de alguns pixels.

## Correcção transversal — responsivo, carrosséis, hovers e bugs

- **Estado:** concluída
- **Causas confirmadas:** (4) o `onScroll` emitia índices intermédios durante o tween GSAP, reactivando o `effect` e criando realimentação; a escrita repetida de padding e os refreshes globais de imagens agravavam o reflow. A diferença entre primeira visita e visitas seguintes era explicada pelo carregamento das imagens (sem cache há vários `load` e `ScrollTrigger.refresh()`); o viewport passou também a usar `data-lenis-prevent`. (6) o accordion dependia de altura GSAP apesar de o estado aberto ser apenas um signal. (10) `appHeaderOffset` aplicava o offset antes de a barra estar realmente sticky.
- A secção “O que nos distingue” passou a ter altura própria em mobile/tablet e carrossel com setas abaixo de `lg`; `/servicos` recebeu o mesmo comportamento, preservando a grelha editorial desktop.
- O carrossel comum agora desliga temporariamente o snap durante o tween, ignora feedback programático, sincroniza scroll manual por `requestAnimationFrame`/`scrollend`, usa duração de 0,85s e escalas/opacidades mais suaves; reduced motion usa alterações directas.
- Os cartões de categorias de `/desenvolvimento-web` mostram apenas o título abaixo de `lg`; no desktop a descrição entra por baixo no hover/foco. O accordion tem fallback declarativo com `grid-template-rows`.
- O último cartão desktop de `/servicos` ocupa a linha completa e recebeu enquadramento largo da imagem. Os destaques de `/produtos` passaram a preencher a altura da célula, limitar título/descrição e manter a imagem como camada de fundo sem alteração de layout no hover.
- `HomeServicesPin` passou a calcular foco a partir do progresso, usar `scrub: true`/`ease: none` e imagens eager. A barra sticky de `/produtos` só recebe offset quando está colada.
- **Verificações:** `npm run build` passa com 45 rotas prerenderizadas; permanece o aviso conhecido do orçamento inicial (+49,36 kB). `npm test -- --watch=false` passa com 22/22 testes. Verificação automatizada em 320, 375, 768, 1024, 1280 e 1920 px sem overflow horizontal da página; accordion testado em abertura após carregamento.
- **Pendências:** validação manual com cache desactivada em dispositivos físicos e substituição futura das imagens provisórias já registadas.

## Correcção: scroll nativo e inicialização dos carrosséis da Home

- **Estado:** concluída
- Os carrosséis passaram a usar `scrollLeft` e não `transform` na pista, permitindo arrastar e fazer rolagem horizontal nativa sem quebrar a lógica das secções.
- O cartão activo é recalculado a partir do centro real do viewport e sincroniza os controlos de navegação; a animação GSAP continua a tratar escala, opacidade e deslocamento.
- A inicialização deixou de esconder a pista dos testemunhos com `appReveal`; o `ResizeObserver` recalcula a geometria após o layout e o carregamento inicial.
- O carrossel de serviços mantém-se inactivo no desktop e ganhou `snap`, `touch-pan-x` e `overscroll-x-contain` apenas para a utilização mobile/tablet.
- O viewport de testemunhos foi recentrado no desktop e as scrollbars horizontais foram ocultadas visualmente, mantendo a navegação por gesto, trackpad e teclado.
- Removida a reposição posterior de `window.scrollTo` que causava um piscar; os controlos impedem apenas o foco automático do rato, preservando o foco por teclado.
- **Verificações:** `npm run build` passa com 45 rotas prerenderizadas; permanece apenas o aviso pré-existente do orçamento inicial. `npm test -- --watch=false` passa com 22/22 testes.

## Correcção: carrosséis de testemunhos e serviços na Home

- **Estado:** concluída
- Os testemunhos da Home passaram para um carrossel horizontal responsivo com o cartão activo centrado e destacado, cartões adjacentes parcialmente visíveis e transições GSAP coordenadas de posição, escala e opacidade.
- Os controlos de testemunhos são acessíveis, mantêm os limites do conjunto e não provocam navegação ou salto de scroll ao mudar de cartão.
- Os serviços usam o mesmo padrão apenas em mobile e tablet; o comportamento editorial/pin existente mantém-se no desktop.
- A geometria do carrossel passou a usar dimensões estruturais (`offsetWidth` e `gap`), evitando oscilações causadas por cartões já transformados. O `appReveal` deixou de disputar o `transform` dos cartões.
- **Verificações:** `npm run build` passa com 45 rotas prerenderizadas; permanece apenas o aviso pré-existente do orçamento inicial. `npm test -- --watch=false` passa com 22/22 testes.

## Correcção transversal — ajustes pontuais de UI

- **Estado:** concluída
- O preview de projectos da Home e de `/desenvolvimento-web` passou a usar o componente partilhado `ProjectPreviewCard`, com gradiente escuro fixo, altura ampliada e transição GSAP com suporte a reduced motion.
- Os testemunhos da Home deixaram o marquee e passaram a uma grelha estática responsiva com citação, nomes corrigidos e os textos autorizados expressamente pelo utilizador. A excepção foi registada em `AGENTS.md`.
- Foi adicionado o projecto Bravo Business ao catálogo, com campos ainda pendentes assinalados como `TODO(conteúdo)` e sem URL ou métricas inventadas.
- A secção “O que nos distingue” usa uma composição bento de 12 colunas apenas no desktop; o dropdown da navbar abre abaixo do trigger e o header recebeu vidro mais acentuado.
- A página `/parceiros` usa o padrão dos cards de produtos, com fallback de gradiente para marcas sem logótipo e grelha responsiva de 1 a 4 colunas.
- A pesquisa de `/desenvolvimento-web` mostra exclusivamente pacotes correspondentes de todas as categorias e esconde o banner/faixa de categorias enquanto há termo.
- **Verificações:** `npm run build` passa com 45 rotas prerenderizadas; permanece apenas o aviso pré-existente do orçamento inicial. `npm test -- --watch=false` passa com 22/22 testes.
- **Pendências:** substituir imagens provisórias dos testemunhos e do preview de projectos quando forem fornecidos assets finais; completar os campos TODO do Bravo Business.

## Correcção: impedir quebra do link de leitura

- **Estado:** concluída
- Os links “Ler artigo” dos cartões da Home e da página `/noticias` passaram a usar `whitespace-nowrap`, mantendo o texto e o ícone na mesma linha em qualquer largura.

## Correcção: proporção do destaque de notícias na Home

- **Estado:** concluída
- O cartão principal de notícias passou a organizar imagem e conteúdo em duas colunas a partir de `lg`, evitando o empilhamento vertical que o tornava excessivamente alto.
- Em mobile mantém uma única coluna, preservando a leitura e a responsividade.
- **Verificações:** `npm test -- --watch=false` passa com 22/22 testes; `npm run build` passa com 44 rotas prerenderizadas. O aviso do orçamento inicial permanece pré-existente.

## Fase 09 — Notícias

- **Estado:** concluída
- A Home passou a apresentar uma composição editorial com uma notícia principal em formato horizontal e dois destaques secundários, todos com imagens locais, categoria, data, resumo e ligação para o artigo.
- A página `/noticias` mantém o filtro por categoria e passou a usar uma grelha responsiva com quatro colunas em ecrãs grandes, duas em tablet e uma em ecrãs estreitos.
- Os cartões usam `MediaSlot`, garantindo fallback temático quando uma imagem não estiver disponível, sem ícones de imagem quebrada.
- Foram adicionados estados de hover/foco com elevação, sombra, zoom suave da imagem e gradiente discreto, respeitando a navegação por teclado e sem alterar os dados ou rotas existentes.
- **Verificações:** viewport de 320px sem overflow horizontal; viewport de 1280px com grelha de quatro colunas; `npm test -- --watch=false` passa com 22/22 testes; `npm run build` passa com 44 rotas prerenderizadas.
- **Pendências:** o catálogo contém actualmente três notícias; a grelha usa quatro colunas quando houver artigos suficientes.

## Correcção: proporções e transições dos cards de produtos

- **Estado:** concluída
- Os cards de destaque dos produtos passaram a ter uma altura mínima uniforme de `28rem`, com área visual superior ampliada e conteúdo distribuído de forma consistente.
- O estado normal recebeu espaçamento, sombra e fallback visual mais equilibrados, mantendo os tokens dos temas claro e escuro e sem alterar dados ou funcionalidades.
- O hover/foco desktop passou a usar uma transição coordenada de `400ms`, com curva suave, expansão visual por transformação, overlay gradual e barra de acção estável, sem alterar a altura da grelha.
- Mobile e tablet continuam a apresentar todo o conteúdo sem depender de hover; a redução de movimento mantém as transições desactivadas quando solicitada pelo sistema.
- **Verificações:** `npm test -- --watch=false` passa com 22/22 testes; `npm run build` passa com 44 rotas prerenderizadas. O aviso do orçamento inicial permanece pré-existente.

## Correcção: cards de destaque de produtos com hover imersivo

- **Estado:** concluída
- Os cards de destaque das categorias de produtos passaram a suportar imagem opcional no topo, conteúdo informativo em estado normal e composição imersiva sobre a imagem em hover/foco no desktop.
- Quando não existe imagem, é usado um fallback com gradiente baseado nos tokens do tema, sem espaço vazio nem imagem quebrada.
- O botão mantém a acção oficial de pedido de orçamento via WhatsApp e transforma-se numa barra com seta circular no estado imersivo.
- Mobile e tablet não dependem de hover; `prefers-reduced-motion` reduz as transições.
- Adicionado o ícone de favorito como elemento visual não interactivo, pronto para futura funcionalidade.
- **Verificações:** `npm test -- --watch=false` passa com 22/22 testes; `npm run build` passa com 44 rotas prerenderizadas.

## Correcção: UI dos destaques de produtos e links da Home

- **Estado:** concluída
- A UI solicitada foi aplicada aos cards de destaque dentro das categorias de `/produtos`, mantendo o estado normal da referência e acrescentando realce em hover/foco.
- A imagem principal de cada categoria voltou a usar `MediaSlot`; não é tratada como card de destaque.
- O preview de produtos da Home passou a ligar à rota existente `/produtos`, sem apontar para páginas individuais inexistentes.

## Correcção: cartões de produtos com estado hover

- **Estado:** concluída
- Criado o componente reutilizável `ProductCategoryCard`, com imagem local de categoria, título visível no estado normal e descrição/acção reveladas em hover ou foco no desktop.
- Em mobile e tablet, a informação permanece visível sem depender de hover.
- A mesma UI foi aplicada à secção de produtos da Home e aos cartões de categoria da página `/produtos`, mantendo os links, dados e imagens existentes.
- **Verificações:** `npm test -- --watch=false` passa com 22/22 testes; `npm run build` passa com 44 rotas prerenderizadas.

## Correcção: CTA de manutenção e overflow horizontal da Home

- **Estado:** concluída
- O botão “Pedir orçamento” da faixa de manutenção foi movido para o lado esquerdo, entre o preço e o último parágrafo, seguindo a referência visual.
- A raiz do template da Home passou a recortar overflow horizontal dos componentes full-bleed, removendo a scrollbar horizontal causada pelas pistas de serviços/testemunhos.

## Correcção: falhas da suite de testes

- **Estado:** concluída
- Os testes de `WhatsappService`, `KzPipe` e `DataPtPipe` passaram a criar dependências Angular através do `TestBed`, respeitando o uso de `inject()` nas classes.
- O teste de navegação passou a resolver correctamente chaves de tradução compostas, como `nav.home`, nos dicionários português e inglês.
- **Verificações:** `npm test -- --watch=false` passa com 22/22 testes; `npm run build` passa com 44 rotas prerenderizadas.

## Correcção: preview de projectos e categoria activa

- **Estado:** concluída
- O preview de projectos da Home passou a permitir navegar entre os projectos confirmados através de chevrons acessíveis, mantendo cada cartão ligado à sua página interna de detalhe.
- O card de projecto acima da pesquisa em `/desenvolvimento-web` usa agora os mesmos chevrons, projectos confirmados, links internos e fundos locais do preview da Home.
- Os fundos do carrossel usam apenas assets locais existentes: websites para a Gráfica Viva e sistemas/software para o projecto Foco. Não foi usada a URL externa que constava no registo do Foco.
- O banner de destaque de `/desenvolvimento-web` passou a actualizar imagem, título e descrição de acordo com a categoria seleccionada, mantendo o catálogo de pacotes sincronizado.
- **Pendências:** substituir os fundos provisórios pelos assets específicos dos projectos quando forem fornecidos.

## Correcção: categorias visuais e testemunhos pendentes

- **Estado:** concluída (refinamento visual e navegação)
- **Decisões tomadas:**
  - A área principal de `/desenvolvimento-web` segue a nova referência: pesquisa no topo, banner horizontal em destaque com navegação e cartões de categorias em grelha responsiva.
  - Os cartões de categorias foram estreitados em altura e passaram para proporção panorâmica `16:9`, evitando o aspecto quadrado e aproximando-se dos cartões largos da referência.
  - Em mobile e tablet, as categorias usam uma faixa horizontal com snap para evitar uma pilha vertical; em desktop continuam numa grelha.
  - O destaque da Gráfica Viva foi separado e colocado acima da pesquisa, com ligação clicável para `/projectos/grafica-viva`.
  - O preview de projectos da Home usa o mesmo projecto destacado da Gráfica Viva como card panorâmico clicável.
  - Botões e controlos com interacção apresentam cursor pointer globalmente.
  - Cada categoria mantém imagens locais, estado activo e chevron, e a selecção continua a controlar o catálogo de pacotes abaixo.
  - Foram adicionados os ícones `chevron-left` e `chevron-right`; a navegação deixou de usar a seta com linha.
  - As secções inferiores da página receberam hierarquia visual adicional através de superfícies, sombras e estados de hover, sem alterar o conteúdo oficial.
  - A home apresenta os testemunhos num trilho contínuo de cartões verticais inspirado na referência fornecida, com movimento GSAP suave e fallback sem movimento para `prefers-reduced-motion`.
  - Os textos não foram inventados: os cartões estão marcados como conteúdo pendente de aprovação.
- **Pendências:** fornecer e aprovar as frases exactas dos testemunhos; confirmar a função de Oswaldo Bravo.

## Refactor: catálogo de desenvolvimento web

- **Estado:** concluída
- **Decisões tomadas:**
  - A página `/desenvolvimento-web` passou a apresentar pesquisa, navegação por categorias e cartões de vidro.
  - As categorias Websites, Lojas online e Sistemas web usam exclusivamente `webPacotes`, `lojaPacotes` e `sistemaPacotes`.
  - IA e automação aparece como categoria futura com estado “Brevemente”, sem pacotes, preços ou promessas adicionais.
  - A pesquisa filtra nome, descrição, prazo, páginas e finalidade/ideal para.
  - Todos os pacotes existentes têm páginas de detalhe prerenderizadas; os dados de lojas e sistemas foram adaptados aos campos existentes, sem conteúdo comercial inventado.
  - O componente `PacoteVidroCard` suporta pacotes sem preço definido, apresentando “Sob orçamento”.
- **Ficheiros alterados:**
  - `src/app/pages/desenvolvimento-web/desenvolvimento-web.ts`
  - `src/app/pages/desenvolvimento-web/desenvolvimento-web.html`
  - `src/app/data/web-pacote-detalhe.ts`
  - `src/app/app.routes.server.ts`
  - `src/app/pages/web-pacote-detalhe/web-pacote-detalhe.ts`
  - `src/app/pages/web-pacote-detalhe/web-pacote-detalhe.html`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro-card.ts`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro-card.html`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro.mapper.ts`
  - `src/app/shared/ui/icon/icon.ts`
  - `src/app/shared/ui/icon/icon.html`
  - `src/app/pages/home/web-preview/web-preview.ts`
  - `src/app/pages/ui-kit/ui-kit.ts`
  - `src/app/i18n/pt.ts`
  - `src/app/i18n/en.ts`
- **Verificações feitas:**
  - `npm run build` passa, com 44 rotas prerenderizadas; mantém apenas o aviso de orçamento inicial já existente.
  - Browser: pesquisa, limpeza, mudança de categoria, estado “Brevemente” e links de detalhe verificados.
  - `npm test -- --watch=false`: 14 testes passam; 4 falhas pré-existentes não relacionadas.
- **Pendências:** nenhuma nova pendência de conteúdo; IA e automação continua deliberadamente sem pacotes.

## Fase 13 — Cartões de serviços da home: estilo "vidro" na secção com efeito pin

- **Estado:** concluída (inclui correcção 1)
- **Decisões tomadas (fase inicial):**
  - Q1: Paleta de 5 tons da marca a rotar pelos cartões (`63 111 181` · `84 94 214` · `36 140 156` · `120 82 200` · `46 125 168`)
  - Q2: Destaque contínuo (`--focus`) consoante a posição no scroll
  - Q3: Ilustrações actuais dos serviços como imagem provisória
  - Q4: Mobile sem pin: scroll horizontal nativo com snap e indicador de progresso
  - Q5: Títulos curtos da tabela da fase
  - Q6: Linha meta = descrição actual do serviço (2 linhas)
  - Q7: Ícone do ui-kit em quadrado de vidro ao lado do título
  - Q8: Botão "Saber mais" + seta
- **Decisões tomadas (correcção 1):**
  - Apresentação desktop: pin horizontal (opção A) — cada cartão passa completo, o último termina completo
  - Removido `mask-image`/`-webkit-mask-image` da pista (sem degradê nas laterais)
  - Pista full-bleed: wrapper `relative left-[50%] -mx-[50vw] w-[100vw] overflow-x-hidden` escapa do `max-w-[1440px]`
  - Track com `width: max-content` para acomodar todos os cards sem corte
  - `--svc-track-pad` fixo em `4vw` (não dinâmico, que estava a esmagar o espaço dos cards)
  - `--svc-track-pad-bottom: 60px` token
  - `scrollLength` = track.scrollWidth − window.innerWidth; medição após `document.fonts.ready` + `load` das imagens
  - Recalculo em `resize` e mudança de tema (`class` no `<html>` via `MutationObserver` + `ScrollTrigger.refresh()`)
  - Secção `overflow-x-clip` para evitar scroll horizontal da página
  - Secção `lg:pt-16 lg:pb-12` para remover vazio no fim
- **Ficheiros alterados:**
  - `src/styles.css` — tokens `--svc-*`, `.bg-svc-stage`, classes `.svc-*` (track `max-content`, overflow visível, sem máscara lateral)
  - `src/app/pages/home/services-preview/services-preview.html` — wrapper full-bleed, secção `overflow-x-clip`, `lg:pt-16 lg:pb-12`
  - `src/app/pages/home/services-preview/services-preview.ts` — mapeamento dos serviços (cor, título curto, imagem)
  - `src/app/shared/directives/home-services-pin.directive.ts` --foco contínuo + scrollLength correto + medição após fonts/imagens + recalculo em resize/tema via MutationObserver
  - `src/app/pages/ui-kit/ui-kit.html` + `ui-kit.ts` — cartão vidro no UI kit (com e sem badge)
  - `src/app/i18n/pt.ts` + `src/app/i18n/en.ts` — chaves `sectionServicoVidro`, `servicoVidroDescription`
- **Ficheiros criados:**
  - `src/app/shared/ui/servico-vidro-card/servico-vidro-card.ts`
  - `src/app/shared/ui/servico-vidro-card/servico-vidro-card.html`
- **Verificações feitas:** `npm run build` passa (38 rotas prerenderizadas); sem novos warnings. Testes: falhas pré-existentes não relacionadas.
- **Pendências:** fotografias reais dos serviços (fornecidas pelo utilizador, fase futura).
- **Próximos passos:** aguardar instrução para avançar para a fase seguinte.

---

## Correcção: Hero claro/escuro por tokens + typewriter funcional

- **Causas raiz:**
  1. `typewriter.directive.ts`: `if (!cursorEl) return;` impedia a animação de correr (sem `[data-typewriter-cursor]` no HTML); `onUpdate` lia `(ctxEl as any).n` inexistente → `slice(0, NaN)`; tweens de apagar/escrever fora da timeline; `@Input() ... any` viola AGENTS.md.
  2. `hero.html`: cores fixas (`bg-[#0a0e1a]`, `text-white`) tornam o modo claro ilegível (texto escuro sobre véu escuro).
  3. `header.html`: `logo-mark.svg` sempre visível, some no tema escuro (símbolo azul-marinho).

- **Ficheiros alterados:**
  - `src/app/shared/directives/typewriter.directive.ts` — reescrito por completo usando `registerAnimationDirective`, `input<LocalizedWords>`, sem `any`, sem `DestroyRef`/`PLATFORM_ID` manuais, cleanup via `gsap.context()` revert + destroy return; `effect()` recria animação na troca de idioma.
  - `src/app/pages/home/hero/hero.ts` — removido `heroWords`, `staticHighlight`, `heroItButtonClasses`; adicionado `firstHighlight`; `i18n` declarado antes dos `computed` que o usam.
  - `src/app/pages/home/hero/hero.html` — tokens semânticos (`bg-bg`, `text-fg`, `text-accent-bright`, `border-line`), sem `#hex`, sem `text-white`, `appTypewriter` uma só vez, cursor como irmão `[data-typewriter-cursor]`, `min-h-[1.05em]` na linha da palavra, botão secundário usa `variant="glass"`.
  - `src/app/shared/ui/button/button.ts` — variante `'glass'` adicionada a `ButtonVariant` e `variantClasses`.
  - `src/app/shared/layout/header/header.html` — logo com imagem clara (`dark:hidden`) + imagem escura (`dark:block`).
  - `src/app/pages/ui-kit/ui-kit.html` — botão `glass` adicionado na secção de botões.
  - `src/app/i18n/pt.ts` + `src/app/i18n/en.ts` — chave `buttonGlass` adicionada.

- **Verificações feitas:** `npm run build` passa (prerender 38 rotas, sem erros); `npm test` sem novas regressões (falhas pré-existentes em pipes/whatsapp/navegação). Sem `any`, sem `#hex` no `hero.html`, sem `text-white`, sem `console.log`.

---

## Correcção: Dropdowns com glassmorphism e blur do header numa camada própria

- **Causa raiz:** O `<header>` levava `backdrop-blur-xl`, tornando-se "backdrop root". O painel do dropdown (filho) com `backdrop-filter` não via o conteúdo da página por baixo — o efeito de vidro desaparecia com a página rolada.
- **Solução:** mover `bg-bg/85` + `backdrop-blur-xl` do `<header>` para uma camada irmã (`[data-header-surface]`, primeiro filho do header, `-z-10`), deixando o header sem `backdrop-filter`. Assim o dropdown pode desfocar a página livremente.
- **Ficheiros alterados:**
  - `src/app/shared/layout/header/header.html` — camada `[data-header-surface]` como primeiro filho; `<header>` fica apenas com `transition-[border-color]`.
  - `src/app/shared/directives/header-motion.directive.ts` — constante `SURFACE_CLASSES = ['bg-bg/85', 'backdrop-blur-xl']` aplicada à camada surface (nos 3 sítios de scroll + limpeza); `border-line` continua no header.
  - `src/app/shared/layout/header/nav-dropdown/nav-dropdown.html` — painel glass (`bg-surface/55` claro / `bg-surface/50` escuro, `backdrop-blur-2xl`, borda `white/60` / `white/10`, anel inset, brilho superior, fallback opaco em `contrast-more`/sem `supports-[backdrop-filter]`).
  - `src/app/pages/ui-kit/ui-kit.html` — amostra estática do painel glass sobre imagem de fundo, nos dois temas.
  - `src/app/i18n/pt.ts` + `src/app/i18n/en.ts` — chaves `sectionDropdownGlass`, `dropdownGlassDescription`.

- **Verificações feitas:** `npm run build` passa (prerender 38 rotas, sem erros); `npm test` sem novas regressões (falhas pré-existentes inalteradas; `nav-dropdown.spec.ts` verde). Sem `#hex`, sem `any`, sem `console.log`.

---

## Correcção: Navbar alinhada/centrada + botão magnético do hero

- **Causas raiz:**
  1. Links simples do header não tinham padding horizontal (`px-3`); os triggers dos dropdowns tinham `px-3` + `gap-2` com chevron, criando intervalos desiguais entre textos do menu.
  2. O contentor usava `flex justify-between` com logo estreito à esquerda e toggles largos à direita, descentrando o menu da página.
  3. O botão primário do hero não passava `[magnetic]="true"`, então não seguia o cursor.

- **Ficheiros alterados:**
  - `src/app/shared/layout/header/header.html` — `<nav>` `gap-8` → `gap-2`; links simples ganham `px-3` + `inline-flex items-center` (sem `content-center`); container ganha `lg:grid lg:grid-cols-[1fr_auto_1fr]` com logo `lg:justify-self-start` e bloco direito `lg:justify-self-end` (menu centrado na página abaixo de `lg` nada muda).
  - `src/app/shared/layout/header/nav-dropdown/nav-dropdown.html` — wrapper `relative group` → `inline-flex`; trigger `gap-2` → `gap-1.5`, `px-3` mantido (igual aos links); chevron `-mr-1`; painel ganha `left-0` (alinhado ao início do trigger).
  - `src/app/pages/home/hero/hero.html` — botão primário ganha `[magnetic]="true"`.

- **Verificações feitas:** `npm run build` passa (prerender 38 rotas, sem erros); `npm test` sem novas regressões (4 falhas pré-existentes não relacionadas; `nav-dropdown.spec.ts` verde).

---

## Correcção: vídeo de fundo não pausa ao rolar

- **Causa raiz:** `HeroVideoDirective` usava um `IntersectionObserver` que chamava `pause()` sempre que o vídeo saía do viewport (rolagem da página), interrompendo o `loop`.
- **Ficheiro alterado:** `src/app/shared/directives/hero-video.directive.ts` — removido o `IntersectionObserver` (`setupScrollAndVisibility`); mantido apenas o `visibilitychange` (pausa/retoma ao mudar de aba) e o `prefers-reduced-motion`. O `<video>` já tem `loop`+`autoplay` no HTML.
- **Verificações:** `npm run build` passa; `npm test` sem regressões novas.

---

## Adição: Métricas da Home

- **Valores:** fornecidos e confirmados pelo utilizador (mais de 2 anos de experiência; mais de 10 empresas; 95% de satisfação dos clientes). Excepção expressa à regra de não inventar estatística (`AGENTS.md` §4.5).
- **Ficheiros alterados:**
  - `src/app/data/home.ts` — interface `HomeMetric` + `homeContent.metrics` (label + 3 itens com prefix/value/suffix/description, tipados com `satisfies HomeMetric`).
  - `src/app/pages/home/home.ts` — importa `HomeMetricsPreview` e adiciona a `imports`; remove `HomeProjectsPreview` duplicado.
  - `src/app/pages/home/home.html` — `<app-home-metrics-preview />` imediatamente após `<app-home-hero />`.
  - `src/app/shared/directives/count-up.directive.ts` — reposõe texto a 0 antes do `ScrollTrigger` (sem piscar), restaura valor final no `onComplete` e na limpeza; `prefers-reduced-motion` mantém o valor final (apenas fade curto).
  - `AGENTS.md` §4.5 — linha de exceção para as métricas da Home.
- **Ficheiros criados:**
  - `src/app/pages/home/metrics-preview/metrics-preview.ts`
  - `src/app/pages/home/metrics-preview/metrics-preview.html`
  - `docs/conteudo/empresa.md`
- **Verificações feitas:** `npm run build` passa (prerender 38 rotas, sem erros); `npm test` sem novas regressões (4 falhas pré-existentes não relacionadas). Sem `#hex`, sem `any`, sem texto hardcoded no `.html`.

---

## Adição: Pacotes de web em estilo vidro na home, em /desenvolvimento-web e no ui-kit

- **Estado:** concluída
- **Decisões tomadas:**
  - Novo componente `app-pacote-vidro-card` em `src/app/shared/ui/pacote-vidro-card/` (`.ts`, `.html`, `.mapper.ts`), com CSS próprio `.pkg-*` em `@layer utilities` (bloco anterior `.svc-card-fluid`/`.svc-price*` removido).
  - Comportamento: em repouso mostra só a fotografia, o nome em baixo e o selo "Mais escolhido"; no hover/foco de teclado aparece o painel de vidro, o nome sobe e entram preço, páginas e prazo, mais o botão. Em ecrãs sem hover (`@media (hover: none)`) a informação fica sempre visível.
  - Tons da marca por slug: landing `63 111 181`, institucional `36 140 156`, profissional `84 94 214`, empresarial `120 82 200`.
  - Sem imagens ainda: `imagemSrc: null` mostra um gradiente na cor do pacote com o nome em baixo; preencher `/images/pacotes/<slug>.webp` (1200×1500 WebP) quando existirem.
  - `site-profissional` mantém o selo "Mais escolhido" (`destaque: true` nos dados).
  - Textos via dicionário i18n existente (`actions.startingAt`, `actions.maisEscolhido`, `actions.learnMore`); sem chaves novas.
  - Exemplo adicionado ao `/ui-kit` com e sem destaque.
- **Ficheiros alterados:**
  - `src/styles.css` — `.pkg-card`, `.pkg-media`, `.pkg-scrim`, `.pkg-glass`, `.pkg-body`, `.pkg-head`, `.pkg-title`, `.pkg-details`, `.pkg-price-label`, `.pkg-price-value`, `.pkg-meta` em `@layer utilities`; removido `.svc-card-fluid`, `.svc-media-fallback`, `.svc-price*`
  - `src/app/pages/home/web-preview/web-preview.ts` + `.html` — `PacoteVidroCard` + `criarPacoteVidro` na grelha de pacotes
  - `src/app/pages/desenvolvimento-web/desenvolvimento-web.ts` + `.html` — `websiteCards` na secção Websites; nota legal e nota de infraestrutura mantidas
  - `src/app/pages/ui-kit/ui-kit.ts` + `.html` — exemplo do cartão de pacote (com e sem selo)
  - `src/app/i18n/pt.ts` + `src/app/i18n/en.ts` — chaves `sectionPacoteVidro`, `pacoteVidroDescription`
- **Ficheiros criados:**
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro-card.ts`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro-card.html`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro.mapper.ts`
- **Verificações feitas:** `npm run build` passa (prerender 38 rotas, sem erros; aviso de orçamento inicial pré-existente). Sem `#hex`, sem `any`, sem texto hardcoded no `.html`.
- **Pendências:** fotografias reais dos pacotes (`public/images/pacotes/<slug>.webp`).

---

## Adição: Mosaico (bento) dos cartões de pacotes web na home, só desktop (≥1024px)

- **Estado:** concluída
- **Decisões tomadas:**
  - CSS grid de 12 colunas × 2 linhas implícitas com `auto-rows` apenas em `lg:` (≥1024px); abaixo mantém a grelha atual (2 colunas sm, 1 mobile).
  - `/desenvolvimento-web` não foi alterado.
  - `.pkg-card-bento` em `src/styles.css` (`@layer utilities`): `aspect-ratio: auto; height: 100%`, aplicado via input `bento()` só em lg.
  - `objectPosition` por slug no mapper (landing `center 35%`, profissional `center 30%`, institucional `center`, empresarial `center`), aplicado via `[style.object-position]`.
  - `gridPosition` por slug no mapper (Record de classes Tailwind lg:col-span/lg:row-start/lg:row-span), aplicado no `<li>` com `[class]`.
  - Removido `lg:grid-rows-2`: as duas linhas são implícitas e dimensionadas pelo `lg:auto-rows-[clamp(260px,22vw,320px)]`, evitando linhas explícitas de altura zero.
  - `bento: true` forçado no `web-preview.ts`; não altera `/desenvolvimento-web`.
  - Cartões baixos: se o painel de detalhes não couber, o preço reduz para 22px e o gap aperta (já no CSS `.pkg-*` existente); não corta o botão.
  - Exemplo do mosaico adicionado ao `/ui-kit` com `bentoPacotes` e secção própria.
  - Novas chaves i18n: `sectionPacoteMosaico`, `pacoteMosaicoDescription` (pt.ts e en.ts).
  - Novas imagens esperadas registadas em `docs/assets.md` (landing 2000×800, profissional 1200×1400, institucional 1000×1000, empresarial 1400×1000).
- **Ficheiros alterados:**
  - `src/styles.css` — `.pkg-card-bento` em `@layer utilities`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro-card.ts` — input `bento`, campos `objectPosition`/`gridPosition`/`bento` na interface
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro-card.html` — `[class.pkg-card-bento]="bento()"`, `[style.object-position]="item().objectPosition"`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro.mapper.ts` — `imagens`, `objectPositions`, `gridPositions`, campos novos no retorno
  - `src/app/pages/home/web-preview/web-preview.ts` — `bento: true` nos pacotes
  - `src/app/pages/home/web-preview/web-preview.html` — grid `lg:grid-cols-12 lg:auto-rows-[clamp(...)]`, `<li class="w-full" [class]="item.gridPosition">`
  - `src/app/pages/ui-kit/ui-kit.ts` — `bentoPacotes` computed
  - `src/app/pages/ui-kit/ui-kit.html` — secção mosaico do ui-kit com `[class]="card.gridPosition"` e `auto-rows` sem linhas explícitas
  - `src/app/i18n/pt.ts` + `src/app/i18n/en.ts` — chaves `sectionPacoteMosaico`, `pacoteMosaicoDescription`
  - `docs/assets.md` — registo das 4 imagens de pacotes web
- **Ficheiros criados:** nenhum
- **Verificações feitas:** `npm run build` passa (prerender 38 rotas, sem erros; aviso de orçamento inicial pré-existente). `npm test`: 14 passam, 4 falhas pré-existentes não relacionadas (whatsapp, navegação, pipes). Sem regressões novas. Sem `#hex` no .html, sem `any`, sem lógica complexa no template.
- **Pendências:** fotografias reais dos pacotes (`public/images/pacotes/<slug>.webp`).

---

## Correcção: mosaico dos pacotes web colapsado na home

- **Sintoma:** em desktop, os 4 cartões não apareciam (faixa fina ~35px à direita, ícone de imagem partida, cartões invisíveis).
- **Causas confirmadas e corrigidas:**
  1. `<app-pacote-vidro-card>` é `display: inline` por omissão → o `<a>` com `height: 100%` colapsava para altura 0. Corrigido com `app-pacote-vidro-card { display: block; height: 100%; }` em `src/styles.css` (`@layer utilities`).
  2. O `Record imagens` apontava para `/images/pacotes/<slug>.webp` que não existem → ícone de imagem partida. Corrigido: `imagens[slug] = null` para todos os pacotes (TODO comentado, registado em `PROGRESSO.md`). Defesa extra: `imageFailed` signal + `onImageError()` + `(error)` no template, para nunca mostrar imagem partida.
  3. `.pkg-card-bento` não limitado a ≥1024px → abaixo de 1024px o cartão perdia `aspect-ratio: 4/5`. Corrigido: `.pkg-card-bento` movido para dentro de `@media (min-width: 1024px)`.
  4. `class="w-full {{ item.gridPosition }}"` no `<li>` → substituído por `class="w-full" [class]="item.gridPosition"` (merge de classes mais seguro).
- **Ficheiros alterados:**
  - `src/styles.css` — `app-pacote-vidro-card { display: block; height: 100%; }`; `.pkg-card-bento` dentro de `@media (min-width: 1024px)`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro-card.ts` — `imageFailed` signal, `onImageError()`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro-card.html` — `@if (item().imagemSrc && !imageFailed())`, `(error)="onImageError()"`
  - `src/app/shared/ui/pacote-vidro-card/pacote-vidro.mapper.ts` — `imagens` agora `null` para todos (comentário TODO)
  - `src/app/pages/home/web-preview/web-preview.html` — `<li class="w-full" [class]="item.gridPosition">`
  - `src/app/pages/ui-kit/ui-kit.html` — `<li class="w-full" [class]="card.gridPosition">`
  - `docs/PROGRESSO.md` — registo da correcção, da pendência das imagens e da verificação responsiva
- **Verificações feitas:** `npm run build` passa (prerender 38 rotas; apenas o aviso de orçamento inicial já existente). Verificação no browser em 1024, 1280, 1440 e 1920px: os 4 cartões têm altura entre 260 e 320px nas linhas, e o cartão profissional ocupa duas linhas; 360 e 768px mantêm 1 e 2 colunas com proporção 4:5. `npm test`: 14 passam, 4 falhas pré-existentes não relacionadas (sem regressões).

---
