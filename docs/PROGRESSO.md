# Progresso — NS2 Innovation Site

## Correcção: preview de projectos e categoria activa

- **Estado:** concluída
- O preview de projectos da Home passou a permitir navegar entre os projectos confirmados através de chevrons acessíveis, mantendo cada cartão ligado à sua página interna de detalhe.
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
