# Fase 14 — Revisão final e entrega

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- AGENTS.md (completo)
- arquitectura.md §8
- PROGRESSO.md

## Tarefas
1. Remover `/ui-kit` e código/dados não usados; verificar que não restam `TODO(conteúdo)` sem registo; rever `PROGRESSO.md`.
2. Verificação cruzada com `AGENTS.md §4`: um só `.css`, `.ts`/`.html` separados, sem `console.log`, sem `any`, sem *inline templates/styles*, imagens com `alt`, pessoas só se reflectirem Angola.
3. Build de produção + teste local (`npm run serve:ssr:ns2_site`).
4. Propor (sem aplicar) a mudança para `outputMode: "static"` e o esquema de deploy; aplicar só com aprovação.
5. Escrever `docs/ENTREGA.md`: como correr, construir, onde editar conteúdo (`data/`), como trocar imagens, pendências finais, ideias para o backoffice.

## Fora do âmbito
- Funcionalidades novas.

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] Projecto limpo, build sem avisos, checklist final de `AGENTS.md §8` cumprida, `ENTREGA.md` escrito.
- [ ] Definition of Done de `AGENTS.md §8`.
