# Fase 01 — Design system e UI kit

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- AGENTS.md §4.1–4.2
- design-system.md (completo)
- assets.md §1, §3

## Tarefas
1. Implementar o `ThemeService` por completo e o componente `ThemeToggle` (sol/lua).
2. Criar os componentes de `design-system.md §6` em `shared/ui/` (cada um `.ts` + `.html`, `--style=none`): `Button`, `LinkArrow`, `SectionHeading`, `Card` (+ especializações como esqueleto tipado, sem dados reais), `Badge`, `Icon` (conjunto completo de ícones SVG desenhados por ti), `MediaSlot`, `Accordion` (sem animação GSAP ainda), `FormField`, `Breadcrumb`, `Marquee` (estático por agora), `CtaBand`, `PageHero`.
3. Pipes `kz` e `dataPt`.
4. Página `/ui-kit` (noindex) que mostra **todos** os componentes e estados, tipografia, paleta (com valores) e logos, com `ThemeToggle` no topo.
5. Garantir que tudo usa tokens semânticos e funciona nos dois temas, em 360 px e 1280 px.

## Fora do âmbito
- Animações GSAP/Lenis (Fase 02).
- Header/footer globais (Fase 03).
- Páginas reais.

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] `/ui-kit` bonito, coerente e sem *glitches* em claro e escuro.
- [ ] Contraste AA verificado nos pares principais.
- [ ] Navegação por teclado e foco visíveis nos componentes interactivos.
- [ ] Nenhum componente com lógica no `.html` nem estilos fora do Tailwind.
- [ ] Definition of Done de `AGENTS.md §8`.
