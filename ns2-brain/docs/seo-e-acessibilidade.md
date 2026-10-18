# SEO, acessibilidade e desempenho

## SEO técnico (Fase 12; preparar desde a Fase 00)
- `lang="pt-AO"` no `<html>` (alterado dinamicamente na Fase 13).
- Por rota: `title` único (`<Página> | NS2 Innovation`), `meta description` 140–160 caracteres, `canonical` (`https://www.ns2innovation.com/...`), Open Graph e Twitter Card.
- JSON-LD: `Organization`/`LocalBusiness` (nome NS2 Innovation, endereço, telefones, email, url) na Home; `BreadcrumbList` em detalhes; `Article` nas notícias; `Service` nos serviços. **Só dados confirmados.**
- `sitemap.xml` e `robots.txt` gerados (script de build ou ficheiros em `public/`), com todas as rotas (sem `/ui-kit`).
- Hierarquia de títulos: um `<h1>` por página, ordem lógica.
- URLs em português, minúsculas, sem acentos.

## Acessibilidade (WCAG 2.2 AA)
- Landmarks (`header`, `nav`, `main`, `footer`), *skip link* "Saltar para o conteúdo".
- Foco visível em todos os interactivos (anel `accent`), ordem de tabulação lógica, menu móvel com *focus trap* e `Esc`.
- Contraste AA nos dois temas; não depender só da cor.
- Formulários: `label` associado, mensagens de erro ligadas por `aria-describedby`, `aria-live` para estado de envio.
- Animações: `prefers-reduced-motion`; sem *flashes*; nada em movimento > 5 s sem pausa (marquee pausa no hover/foco).
- Imagens decorativas `alt=""`; informativas com alt descritivo.
- Alvos de toque ≥ 44×44 px.

## Desempenho
- Meta Lighthouse (mobile, produção): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- LCP < 2.5 s, CLS < 0.05, INP < 200 ms.
- Fontes auto-alojadas, subset latino; pré-carregar só a fonte de títulos.
- Imagens responsivas (`srcset`/`NgOptimizedImage`), `loading="lazy"`, `fetchpriority="high"` só na imagem LCP.
- Carregar GSAP/Lenis apenas no browser e depois da hidratação; plugins só os usados.
- Orçamento inicial: respeitar `budgets` do `angular.json` (500 kB aviso / 1 MB erro).
