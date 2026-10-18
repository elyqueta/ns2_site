# Fase 03 — Layout global

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- AGENTS.md (§4, §5)
- design-system.md §8–9
- animacoes.md §3 (1, 3, 8, 9)
- conteudo/contacto-e-legal.md (WhatsApp, dados)

## Tarefas
1. `Header`: logo (troca por tema), navegação (`data/navegacao.ts`), `ThemeToggle`, botão "Pedir orçamento" (WhatsApp); comportamento de esconder/mostrar ao rolar; estado activo da rota; espaço reservado para `LangToggle` (Fase 13, ainda **não** implementar).
2. `MobileMenu` em ecrã inteiro (focus trap, `Esc`, bloqueio de scroll via Lenis, animação *stagger*).
3. `Footer` grande conforme `design-system.md §8` (só dados confirmados; redes ocultas até confirmação).
4. `WhatsappFab` global com expansão do rótulo.
5. `Preloader` (1.ª visita da sessão) e `PageTransition` (cortina diagonal) conforme `animacoes.md §3`; `ScrollService` repõe o topo e faz `ScrollTrigger.refresh()` a cada rota.
6. *Skip link*, landmarks e `app.html` final: `<app-preloader/> <app-header/> <main id="conteudo"><router-outlet/></main> <app-footer/> <app-whatsapp-fab/> <app-page-transition/>`.

## Fora do âmbito
- Conteúdo das páginas.
- Botão de idioma.

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] Navegar entre todas as rotas (vazias) com transição suave e sem saltos de scroll.
- [ ] Header/menu móvel/footer perfeitos em claro/escuro, 360 → 1920 px.
- [ ] Preloader curto, ignorado com reduced-motion e em visitas repetidas.
- [ ] Link do WhatsApp abre com a mensagem padrão.
- [ ] Foco e teclado correctos no menu.
- [ ] Definition of Done de `AGENTS.md §8`.
