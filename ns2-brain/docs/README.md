# docs/ — Plano de execução do site NS2 Innovation

Esta pasta é o "cérebro" do projecto. Vai na **raiz do repositório** (ao lado de `AGENTS.md`, `package.json`, `src/`).
Os ficheiros `public/brand/*` e `public/favicon.ico` que acompanham esta entrega vão para a pasta `public/` do projecto.

## Protocolo

1. O utilizador diz: **"executa a fase NN"**.
2. O agente lê `AGENTS.md`, a ficha `fases/fase-NN-*.md` e os documentos indicados em "Ler antes".
3. Implementa só essa fase, valida (`npm run build`), actualiza `PROGRESSO.md`, faz commit local e **para**.
4. O utilizador avalia no browser (`npm start`, `http://localhost:4200`):
   - **Aprovado** → diz "avança para a fase NN+1".
   - **Não aprovado** → lista correcções. O agente corrige só isso e volta a parar.

## Formato do Relatório de fase (o agente termina sempre com isto)

```
## Relatório — Fase NN: <nome>
**Estado:** concluída, a aguardar aprovação
**O que foi feito:** (5–10 linhas)
**Ficheiros criados/alterados:** (lista curta por pasta)
**Como avaliar:** (URLs/rotas a abrir, o que testar, em claro e escuro, mobile e desktop)
**Decisões que tomei:** (e porquê)
**Pendências / conteúdo em falta:** (o que precisa do utilizador)
**Não fiz de propósito (fora do âmbito):** (lista)
Build: ✅/❌ · Commit: <hash>
```

## Fases

| # | Fase | Resultado visível |
|---|---|---|
| 00 | Fundações e limpeza | Projecto limpo, tokens, estrutura, rotas vazias |
| 01 | Design system e UI kit | `/ui-kit` com todos os componentes, claro/escuro |
| 02 | Motor de animação | Lenis + GSAP + directivas, demonstradas no UI kit |
| 03 | Layout global | Header, menu móvel, footer, WhatsApp, preloader, transições |
| 04 | Início | Home completa |
| 05 | Sobre | Página Sobre |
| 06 | Serviços | Lista + 8 páginas de detalhe |
| 07 | Produtos | Catálogo por categorias |
| 08 | Desenvolvimento web + Projectos | "A partir de", FAQ, projectos |
| 09 | Notícias | Lista + artigos |
| 10 | Parceiros | Lista + páginas de marca |
| 11 | Contacto, legais e 404 | Formulário WhatsApp/email, legais |
| 12 | SEO, acessibilidade e desempenho | Meta, JSON-LD, sitemap, auditoria |
| 13 | Tradução PT/EN | Botão de idioma |
| 14 | Revisão final e entrega | Limpeza, build final, notas de deploy |

## Documentos

`arquitectura.md` · `design-system.md` · `animacoes.md` · `assets.md` · `seo-e-acessibilidade.md` · `conteudo/*` · `fases/*` · `referencias/*` (imagens de inspiração e logo original)
