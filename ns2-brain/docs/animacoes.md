# Animações — catálogo e regras (GSAP + Lenis)

Referência de qualidade: sites Awwwards de agências tech. **Subtileza, ritmo e precisão** acima de quantidade.

## 1. Base técnica
- Pacotes: `gsap` (plugins `ScrollTrigger`, `SplitText`, `DrawSVGPlugin`, `Flip` — gratuitos nas versões actuais) e `lenis`.
- `AnimationService.init()` (só browser, `afterNextRender` na raiz): regista plugins; liga Lenis ao ticker (`lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t*1000))`, `gsap.ticker.lagSmoothing(0)`).
- Easings padrão do site: entrada `power3.out` / `expo.out`; saída `power2.in`; elásticos proibidos. Durações: micro 0.25–0.4 s, revelações 0.8–1.2 s, transições de página 0.7–0.9 s. Stagger 0.04–0.1 s.
- `gsap.matchMedia()` com três condições: `(prefers-reduced-motion: reduce)`, `(min-width: 1024px)` (efeitos pesados), `(max-width: 1023px)` (versões leves).
- Estado inicial "escondido" só aplicado por JS no browser (nunca em CSS global), para o conteúdo prerender continuar visível sem JS.

## 2. Directivas reutilizáveis (`shared/directives/`, cada uma `.ts` isolado)
| Directiva | Efeito | Uso |
|---|---|---|
| `appReveal` | fade + `y:40`→0 com ScrollTrigger (`start:'top 85%'`), opção `delay`, `stagger` nos filhos (`appRevealChildren`) | blocos de texto, cartões |
| `appSplitText` | SplitText por linhas/palavras; linhas sobem de máscara (`yPercent:110`→0, `overflow:hidden` na linha) | títulos display e h2 |
| `appMaskImage` | imagem revela com `clip-path` (diagonal ou inset) + escala 1.15→1 | fotos/MediaSlot |
| `appParallax` | `y` a variar com `scrub` (±8–12%) | imagens, formas de fundo |
| `appMagnetic` | botão atraído pelo cursor (±12px) com retorno suave; só ponteiro fino | botões primários |
| `appSpotlight` | actualiza `--mx/--my` em cartões para brilho que segue o cursor | `Card` |
| `appCountUp` | contagem de números ao entrar | **só com números reais fornecidos** |
| `appTilt` | inclinação 3D leve em cartões (±4°) | opcional, desktop |
| `appMarquee` | loop infinito horizontal com `gsap.to` e `modifiers`; velocidade reage ao scroll (±) | faixa de marcas |
| `appDrawLine` | DrawSVG em linhas/diagonais ao entrar | hero, CTA, divisores |

Todas: aceitam inputs tipados, limpam-se no `DestroyRef`, e **não correm no servidor**.

## 3. Momentos de assinatura
1. **Preloader** (1.ª visita da sessão, `sessionStorage`; ≤ 1.6 s): marca "NS" desenha-se (DrawSVG), contador 0→100 discreto, cortina sobe com diagonal. Saltar se reduced-motion ou visita repetida. Nunca bloquear acesso ao conteúdo por mais de 2 s.
2. **Hero da Home:** título em linhas com SplitText; subtítulo e botões a seguir; fundo com *mesh* de gradiente que deriva lentamente (GSAP `to` em loop, `sine.inOut`); linha diagonal desenhada; indicador de scroll. Parallax subtil de formas de arame/SVG ao rato (desktop).
3. **Transições de página:** cortina (painel `surface` com diagonal) cobre → rota muda → descobre; Lenis `scrollTo(0,{immediate:true})` a meio. Implementação via `PageTransitionService` + componente `PageTransition` em `layout/`; usar `provideRouter(..., withViewTransitions())` **só** se não conflituar; caso contrário, orquestrar com `router.events` e `CanDeactivate`/`resolve` leve. Duração total ≤ 0.9 s.
4. **Serviços (Home):** secção com **pin** + scroll horizontal de cartões (desktop); em móvel, lista vertical normal. Barra de progresso fina.
5. **Números/valores:** letras gigantes em contorno que preenchem ao scroll (efeito `scrub` de `clip-path`/`background-position`), útil para o lema ou índices `01–08`.
6. **Cartões de projecto/notícia:** hover revela imagem com `clip-path` diagonal e seta; cursor personalizado "Ver" (círculo) no desktop.
7. **Cursor personalizado** (opcional, desktop, ponteiro fino): círculo 12 px que cresce em links/cartões; oculto em toque. Sem esconder o cursor nativo em campos de formulário.
8. **Menu móvel:** abre com cortina + links em *stagger* vindos de baixo; fecha ao navegar.
9. **Footer:** wordmark gigante revela por linhas; botão "Voltar ao topo" com Lenis.
10. **Marquee de marcas**, **acordeão FAQ** (altura animada), **toggle de tema** (ícone rotaciona/troca; a mudança de tema faz *cross-fade* de 300 ms via View Transition API quando disponível, sem bloquear).

## 4. Regras de desempenho e robustez
- Registo único de plugins; reutiliza *timelines*; `will-change` só durante a animação.
- `ScrollTrigger.refresh()` após `document.fonts.ready` e após cada mudança de rota/imagem relevante.
- Evita `pin` em páginas longas com muitas secções animadas; máximo **1 pin** por página.
- Em `max-width:1023px`: sem parallax, sem tilt, sem cursor, sem pin horizontal.
- Testa com CPU 4× throttle no DevTools; sem quedas visíveis.
- Cada animação tem de se **desfazer** (`ctx.revert()`) ao sair da página.
- Nunca deixar conteúdo importante invisível se o JS falhar: usa `gsap.set` no arranque (browser) e `autoAlpha`; `<noscript>` não necessário porque o estado inicial é aplicado por JS.
