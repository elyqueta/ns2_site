# Fase 02 — Motor de animação

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- AGENTS.md §4.4
- animacoes.md (completo)
- arquitectura.md §2

## Tarefas
1. `AnimationService` e `ScrollService` (Lenis + GSAP ticker + ScrollTrigger) conforme `animacoes.md §1`; inicialização só no browser após hidratação; `matchMedia` para reduced-motion/desktop/móvel.
2. Directivas de `animacoes.md §2`: `appReveal`, `appSplitText`, `appMaskImage`, `appParallax`, `appMagnetic`, `appSpotlight`, `appCountUp`, `appMarquee`, `appDrawLine` (+ `appTilt` opcional). Cada uma `.ts` isolado, tipada, com limpeza.
3. Ligar `Button` (magnético), `Card` (spotlight), `Marquee` (loop com reacção ao scroll) e `Accordion` (altura animada) às directivas.
4. Secção de demonstração no `/ui-kit` para cada efeito, com interruptor "simular reduced-motion".
5. Garantir que sem JS/antes da hidratação o conteúdo está visível, e que não há *flash* ao animar.

## Fora do âmbito
- Preloader e transições de página (Fase 03).
- Animações específicas de páginas.

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] Scroll suave, sem *jank*; ScrollTrigger sincronizado com Lenis.
- [ ] Todas as directivas demonstradas e a desfazerem-se ao sair da rota.
- [ ] Com `prefers-reduced-motion` o movimento desaparece (só fades curtos).
- [ ] Build com prerender sem erros (nada acede a `window` no servidor).
- [ ] Definition of Done de `AGENTS.md §8`.
