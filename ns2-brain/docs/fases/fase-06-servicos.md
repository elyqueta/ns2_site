# Fase 06 — Serviços

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- conteudo/servicos.md
- design-system.md
- animacoes.md

## Tarefas
1. `/servicos`: PageHero, introdução, grelha/lista dos 9 serviços (o 9.º liga a `/desenvolvimento-web`), CtaBand.
2. `/servicos/:slug` (8 detalhes): breadcrumb, hero, descrição, "O que inclui", "Para quem", CTA WhatsApp com a mensagem do serviço, FAQ opcional, serviços relacionados (anterior/seguinte), CtaBand.
3. Prerender de todos os slugs (`getPrerenderParams`); `title`/description por serviço; JSON-LD `Service`.
4. Ícone e `MediaSlot` por serviço.

## Fora do âmbito
- Preços de serviços de rede (não existem; sempre "sob orçamento").

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] 8 páginas de detalhe geradas no prerender.
- [ ] Navegação anterior/seguinte e CTAs correctos.
- [ ] Nenhum texto fora de `conteudo/servicos.md`.
- [ ] Definition of Done de `AGENTS.md §8`.
