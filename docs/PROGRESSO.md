# Progresso — NS2 Innovation Site

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

