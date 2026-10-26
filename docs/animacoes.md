# Animações — NS2 Innovation

## Directivas de animação

Toda a animação no site usa **GSAP** (ScrollTrigger, SplitText, DrawSVGPlugin, etc.) e **Lenis** para smooth scroll ligado ao ticker do GSAP. Sem outras bibliotecas de animação. Sem animações CSS decorativas além de transitions simples de hover.

A animação vive em **serviço + directivas** reutilizáveis, nunca espalhada em componentes.

Se anima apenas `transform`, `opacity`, `clip-path`, `filter` leve. Nunca `top/left/width/height`.

`prefers-reduced-motion: reduce` → sem parallax, sem pin, sem split; apenas fades curtos. Obrigatório.

Limpeza: `gsap.context()` + `ctx.revert()` e `ScrollTrigger.kill()` em `ngOnDestroy`/`DestroyRef`. `ScrollTrigger.refresh()` após fontes/imagens e mudança de rota.

Alvo de desempenho: 60 fps em telemóvel médio.

---

## Directiva `appHeroVideo`

Ficheiro: `src/app/shared/directives/hero-video.directive.ts`

Aplica movimento de vídeo de fundo ao hero da home. Segue o padrão do repo (`registerAnimationDirective` + `AnimationService`).

### Funcionalidades

- **HTML do servidor (prerender):** `<video>` com `poster`, `muted`, `playsinline`, `loop`, `preload="none"`, `aria-hidden="true"`, `tabindex="-1"`, `width="1280"`, `height="720"`, classes `absolute inset-0 size-full object-cover`, e SEM `<source>`. O poster é o que se vê até o vídeo carregar. Zero flash e zero layout shift.
- **Quando reproduzir:** injecta os `<source>` e chama `play()` só se:
  1. não `reducedMotion` (AnimationService);
  2. viewport `desktop` (≥1024 px, AnimationService);
  3. `navigator.connection?.saveData` não é `true`;
  4. `navigator.connection?.effectiveType` não é `slow-2g`, `2g` nem `3g`.
  Caso contrário, fica o poster e NENHUM pedido de vídeo é feito.
- **Ordem dos `<source>`:** primeiro `video/webm; codecs="vp9"`, depois `video/mp4`. Depois de injectar, chama `video.load()`.
- **Pausa inteligente:** `IntersectionObserver` pausa quando o hero sai do ecrã; `visibilitychange` pausa com o separador oculto e retoma ao voltar (só se o utilizador não tiver pausado manualmente).
- **Fade-in:** quando `canplay` dispara, anima o `opacity` do vídeo de 0 → 1 sobre o poster (GSAP, ~0.6 s; com reduced-motion não há vídeo, logo não há animação).
- **Erros:** se `play()` rejeitar ou o vídeo der `error` (ex.: 404), mantém o poster em silêncio, sem `console.log` nem excepções não tratadas.
- **Estado exposto:** `playing` (signal), `active` (signal, true se o vídeo está a ser usado) e `toggle()`.
- **Limpeza:** observer, listeners, `pause()`, `removeAttribute('src')` no destroy.

### Seletor CSS

`[appHeroVideo]` — aplicado ao elemento `<video>` do hero.

### Exemplo de uso

```html
<video
  appHeroVideo
  class="absolute inset-0 size-full object-cover"
  poster="/images/heros/home-poster.webp"
  muted
  playsinline
  loop
  preload="none"
  aria-hidden="true"
  tabindex="-1"
  width="1280"
  height="720"
></video>
```

---

## Outras directivas

- `appSplitText` — divide texto em linhas com animação de entrada (SplitText GSAP)
- `appReveal` — revela elemento ao entrar no ecrã
- `appRevealChildren` — revela filhos de um elemento escalonado
- `appMobileMenuMotion` — animação de abertura/fecho do menu móvel
- `appParallax` — efeito parallax (apenas desktop)
- `appMagnetic` — botão magnético
- `appCountUp` — contador animado
- `appTilt` — inclinação 3D (apenas desktop)
- `appDrawLine` — desenho de linha SVG
- `appAccordionHeight` — altura animada de accordion
- `appMarquee` — carrossel infinito de texto/imagens
- `appHeaderMotion` — controlo de visibilidade do header por scroll
- `appHeaderOffset` — ajuste de offset de navegação fixa
- `appHomeServicesPin` — pin da faixa de serviços na home
- `appPreloaderMotion` — animação do preloader de sessão
- `appPageTransitionMotion` — cortina de transição entre rotas
- `appMaskImage` — máscara de imagem
- `appSpotlight` — luz de destaque
- `appTypewriter` — efeito máquina de escrever palavra por palavra (animação de texto)

### Directiva `appTypewriter`

Ficheiro: `src/app/shared/directives/typewriter.directive.ts`

Aplica animação de máquina de escrever a texto. Segue o padrão do repo (`registerAnimationDirective` + `AnimationService`).

### Funcionalidades

- **Entrada:** `@Input() words: LocalizedWords` — recebe objeto com campos `pt: readonly string[]` e `en?: readonly string[]`.
- **Comportamento:** escreve a primeira palavra completa, depois apaga letra a letra, escreve a seguinte palavra letra a letra, repete em loop infinito.
- **Tempos:** escrever ~80 ms/letra, apagar ~45 ms/letra, pausa com palavra completa ~1,8 s, pausa com palavra vazia ~0,35 s.
- **Cursor:** visível enquanto escreve e apaga; pisca (autoAlpha 1↔0, ~0,5 s, yoyo) apenas nas pausas.
- **`prefers-reduced-motion: reduce`:** mostra a primeira palavra estática, sem animação, cursor fixo.
- **Pausa inteligente:** `IntersectionObserver` pausa quando o elemento sai do ecrã; `visibilitychange` pausa com o separador oculto e retoma ao voltar.
- **Estado exposto:** `playing` (signal), `active` (signal, true se o texto está a ser animado) e `toggle()`.
- **Limpeza:** `gsap.context()` + `ctx.revert()` e `ScrollTrigger.kill()` em `ngOnDestroy`/`DestroyRef`.

### Seletor CSS

`[appTypewriter]` — aplicado a um elemento `<span>` dentro de um `<h1>`.

### Exemplo de uso

```html
<span class="block" appTypewriter [appTypewriter]="copy.titleHighlightWords" aria-hidden="true"></span>
```

---

