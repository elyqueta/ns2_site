# Fase 12 — SEO, acessibilidade e desempenho

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- seo-e-acessibilidade.md (completo)
- assets.md §2
- AGENTS.md §4.9

## Tarefas
1. `SeoService` completo em todas as rotas (title, description, canonical, OG/Twitter, JSON-LD); imagem OG 1200×630 gerada a partir do logo.
2. `sitemap.xml` e `robots.txt` (excluir `/ui-kit`).
3. Auditoria e correcção de acessibilidade (teclado, foco, contraste, `aria`, ordem de títulos).
4. Optimização de desempenho: imagens, fontes, carregamento diferido de GSAP/Lenis, remoção de código morto, verificação dos `budgets`.
5. Executar Lighthouse (mobile, produção) nas páginas principais e registar resultados em `PROGRESSO.md`.

## Fora do âmbito
- Novas funcionalidades/páginas.

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] Metas de `seo-e-acessibilidade.md` atingidas ou justificadas por escrito.
- [ ] Sem erros no *Rich Results Test* de JSON-LD (verificação manual sugerida).
- [ ] Build limpo.
- [ ] Definition of Done de `AGENTS.md §8`.
