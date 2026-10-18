# Fase 04 — Página Início

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- conteudo/empresa.md
- conteudo/servicos.md
- conteudo/produtos.md
- conteudo/desenvolvimento-web.md (resumo)
- design-system.md §1–2, §7
- animacoes.md §3 (2, 4, 5, 6)

## Tarefas
1. Implementar `/` com secções, cada uma um componente em `pages/home/`: **Hero** (título/subtítulo de `empresa.md`, 2 CTAs, mesh+diagonal+formas de arame SVG, indicador de scroll) · **Faixa de marcas** (marquee) · **Quem somos** (resumo + `MediaSlot`) · **Serviços** (9 cartões; pin + scroll horizontal no desktop, lista no móvel) · **Websites e sistemas web** (4 pacotes em resumo, "a partir de") · **Produtos** (6 categorias em grelha) · **Como trabalhamos** (4 passos) · **Porquê a NS2** (valores) · **Notícias** (3 últimas, a partir de `data/noticias.ts` — criar os dados desta fase) · `CtaBand`.
2. Criar `data/servicos.ts`, `data/produtos.ts`, `data/web-pacotes.ts`, `data/noticias.ts` (tipados, conforme `conteudo/*`) — serão reutilizados nas fases seguintes.
3. SEO da página (`title`, description, JSON-LD `Organization`/`LocalBusiness` com dados confirmados).

## Fora do âmbito
- Páginas internas.
- Métricas/contadores (não há números reais).

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] A Home transmite "agência premium": hierarquia forte, ritmo, animações elegantes.
- [ ] Sem conteúdo inventado; textos de `docs/conteudo/`.
- [ ] Pin/horizontal só no desktop; móvel limpo.
- [ ] Lighthouse mobile ≥ 85 nesta fase (afinar na Fase 12).
- [ ] Definition of Done de `AGENTS.md §8`.
