# Fase 13 — Tradução PT/EN

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- arquitectura.md §4
- AGENTS.md §4.8
- todo o conteudo/*

## Tarefas
1. `en.ts` completo (UI) e campos `en` em todos os `data/*.ts`; tradução natural e profissional (inglês internacional, sem calcar o português; nomes próprios inalterados).
2. `LangToggle` (PT | EN) no header e menu móvel, persistência em `localStorage`, `<html lang>`, `Title/Meta/JSON-LD` a reagir ao idioma, formatação de moeda/datas por idioma, mensagens WhatsApp traduzidas (o número e o destino mantêm-se).
3. Transição suave de conteúdo ao trocar idioma (fade curto, sem recarregar).
4. Revisão: nenhuma string PT esquecida (procurar por texto literal nos `.html`/`.ts`).

## Fora do âmbito
- Rotas `/en` (idioma é estado do cliente).

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] Alternância instantânea em todas as páginas, sem *flash* nem layout partido (textos mais longos).
- [ ] Prerender continua em PT e hidrata sem erros.
- [ ] Preferência lembrada na visita seguinte.
- [ ] Definition of Done de `AGENTS.md §8`.
