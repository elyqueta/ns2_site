# PROGRESSO (o agente actualiza no fim de cada fase)

## Correcção: cards visuais na secção "O que nos distingue" da página Sobre

- **Estado:** concluída
- A secção “O que nos distingue” da página `/sobre` passou a usar a linguagem visual dos cards de serviços da Home: imagem local, gradiente, efeito glass, ícone, texto sobreposto, cantos arredondados e hover/foco com elevação.
- Foram reutilizadas imagens locais já existentes de infraestrutura, suporte, produtos e desenvolvimento web, sem alterar o conteúdo oficial dos cinco diferenciais.
- Os cards continuam responsivos e ligados à página geral de serviços; a página `/servicos` não foi alterada nesta correcção.
- **Verificações:** `npm test -- --watch=false` passa com 22/22 testes; `npm run build` passa com 44 rotas prerenderizadas. O aviso do orçamento inicial permanece pré-existente.

## Fase 06 — Grelha personalizada e hover dos serviços

- **Estado:** concluída
- A página `/servicos` passou a usar os cards visuais da Home numa grelha editorial personalizada no desktop: o primeiro serviço ocupa uma área de destaque, os seguintes formam blocos assimétricos e os restantes completam a composição.
- Em mobile e tablet a apresentação mantém-se numa grelha simples, sem overflow e sem depender de hover.
- Os cards da página `/servicos` receberam o mesmo comportamento hover/foco dos cards da Home: elevação, sombra, zoom suave da imagem, reforço do glass overlay, destaque do título e CTA com seta.
- O nono serviço continua ligado a `/desenvolvimento-web`; os oito detalhes existentes e os dados oficiais não foram alterados.
- **Verificações:** `npm test -- --watch=false` passa com 22/22 testes; `npm run build` passa com 44 rotas prerenderizadas. O aviso do orçamento inicial permanece pré-existente.

| Fase                               | Estado      | Aprovada pelo utilizador                    | Notas                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ----------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00 Fundações                       | ✅ aprovada | Sim — avançar para fase 01                  | Implementada em `outher_dev`; build e testes aprovados. Rotas parametrizadas são prerenderizadas nas fases em que os dados correspondentes ficam disponíveis.                                                                                                                                                                                                                                                                                     |
| 01 Design system e UI kit          | ✅ aprovada | Sim — avançar para fase 02                  | UI kit com componentes reutilizáveis, pipes, ícones e temas; build, testes e validação visual aprovados.                                                                                                                                                                                                                                                                                                                                          |
| 02 Motor de animação               | ✅ aprovada | Sim — aprovada pelo utilizador a 2026-10-18 | AnimationService, ScrollService, directivas GSAP/Lenis e demonstração no UI kit; build e testes aprovados.                                                                                                                                                                                                                                                                                                                                        |
| 03 Layout global                   | ✅ aprovada | Sim — aprovada pelo utilizador a 2026-10-18 | Header com navegação responsiva, menu móvel acessível, footer, WhatsApp flutuante, preloader de sessão e cortina de transição; build, testes e validação runtime aprovados.                                                                                                                                                                                                                                                                       |
| 04 Início                          | ✅ aprovada | Sim — aprovada pelo utilizador a 2026-10-18 | Indicador com scroll suave, botões/menu sem quebra de linha, pin dos serviços revisto, marcas adaptadas ao mobile e fotografia local fornecida pelo utilizador.                                                                                                                                                                                                                                                                                   |
| 05 Sobre                           | ✅ aprovada | Sim — aprovada pelo utilizador a 2026-10-18 | Página Sobre com conteúdo oficial, processo animado por scroll, valores, diferenciais e CTA; build, testes e validação responsiva aprovados.                                                                                                                                                                                                                                                                                                      |
| 06 Serviços                        | ✅ aprovada | Sim — aprovada pelo utilizador a 2026-10-18 | Lista com 9 serviços e 8 páginas de detalhe prerenderizadas; SEO e JSON-LD Service por detalhe, CTAs específicos e navegação anterior/seguinte; build e testes aprovados.                                                                                                                                                                                                                                                                         |
| 07 Produtos                        | ✅ aprovada | Sim — avançar para fase 08                  | Catálogo com 6 categorias, cartões por marca/linha e tipo, CTAs WhatsApp, âncoras com scroll spy e carrossel infinito de marcas; menu de categorias acompanha o header no scroll.                                                                                                                                                                                                                                                                 |
| 08 Desenvolvimento web + Projectos | ✅ aprovada | Sim — aprovado pelo utilizador a 2026-10-18 | Páginas `/desenvolvimento-web` e `/projectos`; pacotes com valores "a partir de", nota legal, FAQ, diagnóstico e timeline animada. Ligações do diagnóstico preservam a rota. Conteúdo de IA aguarda confirmação; Gráfica Viva usa MediaSlot.                                                                                                                                                                                                      |
| 09 Notícias                        | ✅ aprovada | Sim — aprovada pelo utilizador a 2026-10-18 | Lista com artigo em destaque e filtros por categoria; três detalhes com partilha, relacionados e JSON-LD Article; slugs prerenderizados.                                                                                                                                                                                                                                                                                                          |
| 10 Parceiros                       | ✅ aprovada | Sim — aprovada pelo utilizador a 2026-10-19 | Lista de marcas e sete detalhes; links para categorias de produtos e pedidos de orçamento por marca; páginas de detalhe prerenderizadas.                                                                                                                                                                                                                                                                                                          |
| 11 Contacto, legais e 404          | ✅ aprovada | Sim — aprovada pelo utilizador a 2026-10-19 | Formulário WhatsApp/email, páginas legais e 404. Correcção aprovada: origem do mapa com sugestões Google Places e navegação por teclado; rota continua a ser calculada externamente. A chave pública restrita do Places API ainda tem de ser configurada no meta de `src/index.html`.                                                                                                                                                             |
| 12 SEO, a11y, desempenho           | 🟡 parcial  | —                                           | SEO e metadados implementados para `https://ns2-site-weld.vercel.app`; sitemap com 29 rotas públicas e `/ui-kit` excluído. Build e 15 testes passam; auditoria estática das 30 páginas prerenderizadas sem problemas. Lighthouse pendente: obtenção do CLI falhou por timeout de rede; falta também submeter/verificar o sitemap na Search Console.                                                                                               |
| 13 Tradução PT/EN                  | ✅ aprovada | Sim — aprovada pelo utilizador a 2026-10-23 | Correcção i18n: removido `languageEffect` com `afterNextRender` na directiva `SplitTextReveal` (NG0203 na app zoneless); `<h1>` da Hero recriado via `@for ... track key` na troca de língua. `cursor-pointer` adicionado a todos os botões (`app-button` e botões `<button>` nativos em layout, contact-map, ui-kit, contacto, noticias, noticia-detalhe). Build e prerender passam; sem regressão nos testes (falhas pré-existentes nos pipes). |
| 14 Revisão final                   | ⬜ pendente | —                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

Legenda: ⬜ pendente · 🟡 a aguardar aprovação · ✅ aprovada · 🔧 em correcção

## Decisões registadas

- Conteúdo longo em `data/*.ts` usará campos `{ pt: string, en?: string }`; textos de interface usam chaves do dicionário. A tradução inglesa será acrescentada na Fase 13.
- As rotas usam um componente de página mínimo comum, com título e metadados definidos pelos dados da rota.
- O SSR permite apenas `localhost` e `127.0.0.1` por omissão; domínios de deploy só serão configurados quando forem conhecidos.
- Para contraste AA, os tokens de azul em tema claro/escuro usam tonalidades ligeiramente mais escuras do azul da marca nos textos e botões; o azul original do logótipo mantém-se intacto.
- O `/ui-kit` inclui amostras neutras sem preços reais e aplica `noindex, nofollow`, removendo a meta tag quando se sai da rota.
- A Fase 02 foi aprovada pelo utilizador em 2026-10-18; as animações só são activadas após a aplicação ficar estável para não interferirem com a hidratação SSR.
- Correcção de animações em navegação SPA: registos GSAP criados com o runtime já inicializado aguardam `afterNextRender()` antes de activar, para o elemento da rota nova já estar ligado ao DOM; validado nos percursos Sobre ↔ Início.
- O layout global usa exclusivamente os contactos oficiais fornecidos; redes sociais e horário não são mostrados enquanto não houver confirmação.
- A Home usa apenas conteúdo oficial; os preços web aparecem como "a partir de" com a nota legal completa. A secção Notícias apresenta os três modelos educativos fornecidos nos documentos, pendentes de revisão/substituição.
- O JSON-LD `Organization`/`LocalBusiness` fica no documento base para ser emitido no HTML prerenderizado; os dados publicados limitam-se a nome, site, contacto e morada confirmados.
- A pesquisa de origem usa o Places Autocomplete da Google Maps JavaScript API directamente no browser, sem backend. A chave deve ter Places API e Maps JavaScript API activadas, facturação configurada e restrição por domínio; pesquisas são enviadas directamente ao Google e a política de privacidade informa o visitante.
- Nas correcções da Fase 04, o indicador "Descer para explorar" usa scroll suave com easing gradual; o pin de serviços fixa só a faixa de cartões para mantê-los inteiros na área visível; a faixa de marcas fica centrada no desktop e permite deslize horizontal sem scrollbar visível no telemóvel; o menu móvel permite scroll pelo rato/toque e anima a abertura/fecho; a fotografia local fornecida é usada na secção "Quem somos".
- A Fase 05 usa a fotografia local fornecida pelo utilizador, conteúdo oficial de `empresa.md` e a directiva de progresso baseada em ScrollTrigger; sem métricas nem datas de fundação.
- A Fase 06 usa os textos oficiais de `servicos.md`; a página de detalhe de desenvolvimento web continua a ligar à rota `/desenvolvimento-web` sem criar um detalhe duplicado. O JSON-LD Service é emitido por detalhe.
- A Fase 07 usa apenas marcas, linhas e tipos de produto descritos em `produtos.md`; os pedidos de orçamento preenchem mensagens específicas por categoria ou opção. As âncoras são tratadas pelo Lenis e o scroll spy usa ScrollTrigger; a barra fixa acompanha o header quando ele entra/sai de vista e a faixa de marcas repete grupos suficientes para preencher todos os ecrãs. As imagens das seis categorias continuam em falta e usam MediaSlot.
- A Fase 08 usa os pacotes oficiais de desenvolvimento web; todos os preços publicados são apresentados como "a partir de", com a nota legal, e cada pacote liga ao WhatsApp e ao formulário com `?servico=`. A recomendação de automação/IA não é apresentada como serviço até confirmação do utilizador. A Gráfica Viva é o único projecto listado e não tem ligação externa publicada.
- A Fase 09 utiliza os três artigos-modelo fornecidos, sem HTML cru; as ligações de partilha são geradas no browser, cada artigo tem JSON-LD `Article` e os três slugs são prerenderizados. A cópia da ligação apresenta estado de sucesso ou instrução explícita caso o navegador não permita copiar.
- A Fase 10 apresenta as sete marcas com que a NS2 trabalha, sem declarar parcerias oficiais nem usar logótipos de terceiros; cada detalhe liga à categoria de produtos correspondente e inclui um CTA de orçamento por WhatsApp.
- O domínio canónico temporário para testar indexação é `https://ns2-site-weld.vercel.app`, centralizado em `src/app/core/site-origin.ts` para facilitar a troca quando o domínio definitivo existir. Canonical, Open Graph, Twitter, JSON-LD, sitemap e robots usam essa origem.
- Correcção i18n: removido o `languageEffect` da directiva `SplitTextReveal` (chamava `afterNextRender()` dentro de `effect()`, lançando NG0203 e quebrando o tick de detecção de mudança da app zoneless). Os elementos com `appSplitText` são agora recriados via `@for ... track key` na mudança de língua (ver `HomeHero`), de modo que o `split.revert()` limpa o DOM antigo e o `SplitText` corre sobre o DOM limpo com o texto na língua correcta. Ficheiros alterados: `src/app/shared/directives/split-text.directive.ts`, `src/app/pages/home/hero/hero.ts`, `src/app/pages/home/hero/hero.html`.
- A auditoria de SEO garante títulos com a marca, descrições entre 140 e 160 caracteres, um `h1` por página, `alt` nas imagens e `noindex, nofollow` no `/ui-kit`. A auditoria estática percorreu as 30 páginas prerenderizadas; a troca de tema, menu móvel e larguras de 320–1920 px foram verificadas no browser.

## Pendências de conteúdo (precisam do utilizador)

- Confirmar a plataforma correspondente aos identificadores de redes sociais oficiais antes de os publicar; até lá, permanecem ocultos.
- O horário de atendimento não foi fornecido e não é apresentado.
- Rever ou substituir os três artigos-modelo antes de os considerar conteúdo editorial final; faltam também as imagens de capa próprias, que permanecem em `MediaSlot`.
- Faltam fotografias próprias para os oito detalhes de serviço; cada página mantém o `MediaSlot` com o caminho esperado registado em `assets.md`.
- Faltam fotografias próprias para as seis categorias de produto; a página mantém MediaSlot com os caminhos registados em `assets.md`.
- Confirmar o texto da secção de agentes de IA e atendimento automático antes de o publicar em `/desenvolvimento-web`.
- Para completar o caso da Gráfica Viva, fornecer a descrição, tecnologias, funcionalidades, ligação pública e captura de ecrã; a imagem esperada está registada em `assets.md`.
- Os logótipos das sete marcas continuam pendentes; até serem fornecidos, os nomes são apresentados em tipografia.
- A Fase 12 ainda precisa de resultados Lighthouse mobile em produção; a tentativa local com `npx lighthouse` terminou em `ETIMEDOUT` por falta de acesso à rede. A indexação efectiva só pode ser confirmada após o sitemap ser submetido na Google Search Console.

## Fase 03 (LEIA-ME) — Home: estrutura e "Quem somos" (2026-10-23)

- Estado: concluída
- Decisões do utilizador:
  - Q1: Imagem `@og-default.png` (usada na secção "Quem somos" em vez da fotografia de stock)
  - Q2: B) Manter texto actual
  - Q3: C) Hero com dois caminhos: "Web e sistemas" → /desenvolvimento-web e "TI e equipamentos" → /servicos
  - Q4: A) Remover "Descer para explorar"
- Implementação:
  - `about-preview.html`: imagem alterada de `/images/equipa.jpeg` para `/images/og/og-default.png`
  - `data/home.ts`: `imageAlt` e `expectedFile` atualizados para og-default.png
  - `hero.html`: removida secção "Descer para explorar"; botões alterados para "Web e sistemas" e "TI e equipamentos" com traduções do dicionário i18n (`actions.heroWeb`, `actions.heroIt`)
  - `hero.ts`: removido `ScrollService` e `scrollToAbout`; adicionados `heroWebLabel` e `heroItLabel` computeds; removido `Icon` import (não usado)
  - `i18n/pt.ts` e `i18n/en.ts`: adicionadas chaves `actions.heroWeb` e `actions.heroIt`
- Ficheiros alterados: `src/app/pages/home/about-preview/about-preview.html`, `src/app/data/home.ts`, `src/app/pages/home/hero/hero.html`, `src/app/pages/home/hero/hero.ts`, `src/app/i18n/pt.ts`, `src/app/i18n/en.ts`
- Verificações feitas: `npm run build` passa (30 rotas prerenderizadas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes)
- Pendências: Q5 (CTA final) não foi respondida pelo utilizador, mantida como está

## Ajuste adicional (2026-10-23)

- `MediaSlot`: adicionado input `objectPosition` (padrão `center`) para controlar o `object-position` da imagem.
- `about-preview.html`: `objectPosition="left"` para o logo da empresa no lado esquerdo da imagem `og-default.png` ficar visível (não cortado pelo `object-cover` central).
- Ficheiros alterados: `src/app/shared/ui/media-slot/media-slot.ts`, `src/app/shared/ui/media-slot/media-slot.html`, `src/app/pages/home/about-preview/about-preview.html`
- Verificações feitas: `npm run build` passa; `npm test` sem regressão.

## Fase 04 (LEIA-ME) — Serviços: cartões (2026-10-23)

- Estado: concluída
- Decisões do utilizador:
  - Q1: B) Carrossel → depois ajustado: manter template actual (grelha)
  - Q2: C) Todos com imagem (a fornecer) → MediaSlot com placeholder em todos os cartões
  - Q3: A) Remover números (01, 02…) → removido
  - Q4: Não usar etiqueta de parceiros → não adicionado
- Implementação:
  - `servicos.html`: removido span do número (`ordemLabel`); adicionado `<app-media-slot>` com imagem em cada cartão; mantida grelha (`md:grid-cols-2 xl:grid-cols-3`)
  - `servicos.ts`: removido `ordemLabel` do mapeamento; removido import `RevealChildren`; adicionado import `MediaSlot`
  - `data/servicos.ts`: já tinha `imagem.ficheiroEsperado` definido para cada serviço (usado pelo MediaSlot)
- Ficheiros alterados: `src/app/pages/servicos/servicos.html`, `src/app/pages/servicos/servicos.ts`
- Verificações feitas: `npm run build` passa (30 rotas prerenderizadas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes)
- Pendências: nenhuma

## Correcção: imagens nos detalhes de serviço (2026-10-23)

- Problema: `<app-media-slot>` na página de detalhe de cada serviço não recebia `[src]`, então nunca mostrava a imagem (apenas o placeholder).
- Correcção:
  - `servico-detalhe.html`: adicionado `[src]="imagemSrc()"`, `[width]="626"`, `[height]="418"` ao `<app-media-slot>`
  - `servico-detalhe.ts`: adicionado `imagemSrc` computed que monta o caminho `/images/servicos/<ficheiro>` para o serviço actual
- Ficheiros alterados: `src/app/pages/servico-detalhe/servico-detalhe.html`, `src/app/pages/servico-detalhe/servico-detalhe.ts`
- Verificações feitas: `npm run build` passa (30 rotas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes).

## Correcção: imagem da secção "Quem somos" da home (2026-10-23)

- Substituída a fotografia de stock (`/images/og/og-default.png`) pela imagem real (`/images/sobre/quem-somos.webp`, 1200×800, proporção 3:2).
- O ficheiro `og-default.png` **não foi apagado**: ainda é usado no `<meta og:image>` de `src/index.html` e em `src/app/core/seo.service.ts`.
- `about-preview.html`: `<app-media-slot>` agora usa `src="/images/sobre/quem-somos.webp"`, `[width]="1200"`, `[height]="800"`, `[loading]="'lazy'"`, `[decoding]="'async'"`, sem `objectPosition` (imagem nova, não precisa do ajuste de esquerda).
- `data/home.ts`: `imageAlt` atualizado para "Duas pessoas à secretária com um portátil, ligadas a parceiros especializados"; `expectedFile` atualizado para `public/images/sobre/quem-somos.webp`.
- `media-slot.ts` / `media-slot.html`: adicionados inputs `loading` e `decoding` para controlar os atributos da imagem sem layout shift.
- Ficheiros alterados: `src/app/pages/home/about-preview/about-preview.html`, `src/app/data/home.ts`, `src/app/shared/ui/media-slot/media-slot.ts`, `src/app/shared/ui/media-slot/media-slot.html`
- Verificações feitas: `npm run build` passa (30 rotas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes).

## Fase 05 (LEIA-ME) — Produtos: imagens e cartões (2026-10-23)

- Estado: concluída
- Decisões do utilizador:
  - Q1: Usar todas as imagens sem placeholder
  - Q2: Imagem no topo de cada cartão de categoria (espaço vazio da secção de produto)
  - Q3: A) Criar `docs/guia-fotografia-produtos.md`
- Implementação:
  - `produtos.ts`: adicionado `imagemSrc` computed para cada categoria, montando o caminho `/images/produtos/<ficheiro>`
  - `produtos.html`: `<app-media-slot>` de cada categoria agora recebe `[src]="category.imagemSrc"` (imagens reais em vez de placeholder)
  - `docs/guia-fotografia-produtos.md`: criado com especificações técnicas e tabela de ficheiros esperados
- Ficheiros alterados: `src/app/pages/produtos/produtos.ts`, `src/app/pages/produtos/produtos.html`
- Ficheiros criados: `docs/guia-fotografia-produtos.md`
- Verificações feitas: `npm run build` passa (30 rotas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes).
- Pendências: todas as 6 imagens de produto são provisórias (ver `docs/guia-fotografia-produtos.md` para substituição)

## Ajuste adicional (2026-10-23)

- `data/servicos.ts`: caminhos das imagens atualizados para apontar aos ficheiros reais em `public/images/servicos/` (`consultoria.webp`, `locacao-equipamentos.webp`, `websites-sistemas-web.webp`)
- `servicos.ts`: adicionado `imagemSrc` computed que monta o caminho `/images/servicos/<ficheiro>` para cada serviço
- `servicos.html`: `<app-media-slot>` agora recebe `[src]="service.imagemSrc"` em vez de `null`, mostrando as imagens reais
- Ficheiros alterados: `src/app/data/servicos.ts`, `src/app/pages/servicos/servicos.ts`, `src/app/pages/servicos/servicos.html`
- Verificações feitas: `npm run build` passa; `npm test` sem regressão.

## Fase 02 (LEIA-ME) — Heros e imagens de fundo (2026-10-23)

- Estado: concluída
- Decisões do utilizador:
  - Q1: Slider de imagens a cada 20s, muda apenas a imagem (pedido do utilizador, fora das opções da fase; implementado em `HomeHeroSlider`)
  - Q2: B) Fundo a toda largura com overlay
  - Q3: B) Versão clara: overlay claro e imagem esbatida (overlay `bg-surface/60`, token semântico)
  - Q4: A) Reduzir com clamp() (já implementado via token `--text-display: clamp(3rem, 9vw, 8.5rem)`)
  - Q5: Não aplicável (slider implementado diretamente no hero da home)
- Implementação: novo componente `HomeHeroSlider` (`hero-slider.ts` + `hero-slider.html`) que rotaciona imagens de `public/images/heros/` com fade GSAP a cada 20s, respeita `prefers-reduced-motion`, primeira imagem com `fetchpriority="high"` e `loading="eager"`, restantes `loading="lazy"`, `object-fit: cover` com `object-position:center`. Integrado no hero da home com overlay `bg-surface/60` para contraste do texto nos dois temas.
- Ficheiros criados: `src/app/pages/home/hero/hero-slider.ts`, `src/app/pages/home/hero/hero-slider.html`
- Ficheiros alterados: `src/app/pages/home/hero/hero.html`, `src/app/pages/home/hero/hero.ts`
- Verificações feitas: `npm run build` passa (30 rotas prerenderizadas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes)
- Pendências: nenhuma

## Fase 01 (LEIA-ME) — Navbar: tema, tradução e logótipo (2026-10-23)

- Estado: concluída
- Decisões do utilizador:
  - Q1: B) Traduzir · Pedir orçamento · Tema (ordem à direita)
  - Q2: Saltar (seletor de idioma mantido como está)
  - Q3: Saltar (estratégia de tradução mantida)
  - Q4: A) Tema e idioma dentro do menu mobile; à vista só logótipo, CTA e menu
  - Q5: C) Até 480px usar só o símbolo logo-mark.svg
- Ajustes adicionais (pedidos do utilizador):
  1. Botão "Pedir orçamento" movido para dentro do menu mobile (oculto no header em mobile/tablet via `hidden lg:inline-flex`, visível apenas em desktop; renderizado no `mobile-menu` após os toggles de idioma/tema, abaixo do logo).
  2. Logo agora é apenas o símbolo sem "innovation" (`logo-mark.svg`/`logo-mark-dark.svg`) em qualquer tamanho de tela, tanto no header quanto no menu mobile (substituídos os logos horizontais).
  3. No menu mobile, LanguageToggle, ThemeToggle e o botão "Pedir orçamento" ficam agora na mesma linha abaixo do logo, com o botão de orçamento alinhado à direita (`ml-auto`). O componente `Button` ganhou um input opcional `extraClasses` para permitir classes utilitárias adicionais.
- Ficheiros alterados: `src/app/shared/layout/header/header.html`, `src/app/shared/layout/mobile-menu/mobile-menu.html`, `src/app/shared/layout/mobile-menu/mobile-menu.ts`, `src/app/shared/ui/button/button.ts`
- Verificações feitas: `npm run build` passa (30 rotas prerenderizadas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes)
- Pendências: nenhuma

## Correcção: imagem da secção "Quem somos" da home (2026-10-23)

- Substituída a fotografia de stock (`/images/og/og-default.png`) pela imagem real (`/images/sobre/quem-somos.webp`, 1200×800, proporção 3:2).
- O ficheiro `og-default.png` **não foi apagado**: ainda é usado no `<meta og:image>` de `src/index.html` e em `src/app/core/seo.service.ts`.
- `about-preview.html`: `<app-media-slot>` agora usa `src="/images/sobre/quem-somos.webp"`, `[width]="1200"`, `[height]="800"`, `[loading]="'lazy'"`, `[decoding]="'async'"`, sem `objectPosition` (imagem nova, não precisa do ajuste de esquerda).
- `data/home.ts`: `imageAlt` atualizado para "Duas pessoas à secretária com um portátil, ligadas a parceiros especializados"; `expectedFile` atualizado para `public/images/sobre/quem-somos.webp`.
- `media-slot.ts` / `media-slot.html`: adicionados inputs `loading` e `decoding` para controlar os atributos da imagem sem layout shift.
- Ficheiros alterados: `src/app/pages/home/about-preview/about-preview.html`, `src/app/data/home.ts`, `src/app/shared/ui/media-slot/media-slot.ts`, `src/app/shared/ui/media-slot/media-slot.html`
- Verificações feitas: `npm run build` passa (30 rotas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes).

## Fase 06 (LEIA-ME) — Notícias: capas dos artigos (2026-10-23)

- Estado: concluída
- Decisões do utilizador:
  - Q1: B) Capas tipográficas desenhadas (já em public/images/noticias/, 1200×675, 16:9)
  - Q2: A) 16:9 (já resolvido)
  - Q3: Não se aplica (já não há imagem gerada por IA)
  - Q4: A) Sim, imagem de destaque no topo do artigo
- Implementação:
  - `media-slot.ts`: adicionado input `aspectRatio` ('3/2' padrão | '16/9')
  - `media-slot.html`: classes dinâmicas `aspect-[3/2]` / `aspect-[16/9]` no figure
  - `noticias.html`: ambos os `<app-media-slot>` (artigo em destaque e lista) usam `src`, `[expectedFile]`, `aspectRatio="16/9"`, `[width]="1200"`, `[height]="675"`, `[loading]="'lazy'"`, `[alt]="'decorative'"` (decorativa, título já na imagem)
  - `noticias.ts`: adicionado `imageSrc` computed para cada artigo; removido `imageAlt` computed (não usado)
  - `noticia-detalhe.html`: imagem de destaque usa `src`, `[expectedFile]`, `aspectRatio="16/9"`, `[width]="1200"`, `[height]="675"`, `[loading]="'lazy'"`, `[alt]="'decorative'"`
  - `noticia-detalhe.ts`: adicionado `imageSrc` computed; `image` computed simplificado (só `expectedFile`)
- Ficheiros alterados: `src/app/shared/ui/media-slot/media-slot.ts`, `src/app/shared/ui/media-slot/media-slot.html`, `src/app/pages/noticias/noticias.html`, `src/app/pages/noticias/noticias.ts`, `src/app/pages/noticia-detalhe/noticia-detalhe.html`, `src/app/pages/noticia-detalhe/noticia-detalhe.ts`
- Verificações feitas: `npm run build` passa (30 rotas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes).
- Pendências: nenhuma

## Correcção: src dos media-slot nas notícias (2026-10-23)

- Problema: os `<app-media-slot>` das notícias não recebiam `[src]`, então só mostravam o placeholder.
- Correcção: adicionado `[src]` a todos os media-slot das notícias (listagem e detalhe).
- Verificações feitas: `npm run build` passa (30 rotas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes).

## Fase 07 (LEIA-ME) — Desenvolvimento web e pacotes (2026-10-24)

- Estado: concluída
- Decisões do utilizador:
  - Q1: A) Destacar Site Profissional com borda e etiqueta "Mais escolhido"
  - Q2: Não usar wireframe CSS (removido por decisão do utilizador)
  - Q3: B) "50 000 Kz" (espaço, sem ,00)
  - Q4: A) "Ideal para..." + 3 a 5 itens incluídos + prazo estimado (movido para página de detalhe)
  - Q5: A) Linha própria "Extras" dentro de cada cartão (removido do card, movido para detalhe)
  - Q6: A) CTA WhatsApp com mensagem preenchida com o nome do pacote (mantido no card e no detalhe)
  - Q7: Não usar tabela comparativa (removida por decisão do utilizador)
- Implementação:
  - `web-pacote-detalhe.html`: removida secção repetitiva entre hero e "Ideal para" (título, preço e descrição já aparecem no hero); mantidos "Ideal para", inclui/não inclui, entregas e CTA WhatsApp
  - `web-preview.ts`: `href` dos cards aponta para `/desenvolvimento-web/${slug}` em vez de `/desenvolvimento-web` (leva à página de detalhe de cada pacote)
  - `web-preview.html`: grid com `align-items-stretch` para altura igual nos cards da home
  - `desenvolvimento-web.html`: cards simplificados (apenas nome, preço, páginas, prazo, inclui, CTA "Saber mais"); fonte maior; espaçamento aumentado; "A partir de" alinhado à esquerda
  - `desenvolvimento-web.ts`: adicionado `learnMoreLabel` computed
  - `web-pacote-detalhe.ts`: removido `RouterLink` dos imports (não usado no template)
- Ficheiros alterados: `src/app/pages/home/web-preview/web-preview.html`, `src/app/pages/home/web-preview/web-preview.ts`, `src/app/pages/desenvolvimento-web/desenvolvimento-web.html`, `src/app/pages/desenvolvimento-web/desenvolvimento-web.ts`, `src/app/pages/web-pacote-detalhe/web-pacote-detalhe.html`, `src/app/pages/web-pacote-detalhe/web-pacote-detalhe.ts`
- Verificações feitas: `npm run build` passa (34 rotas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes).
- Pendências: nenhuma

## Ajuste adicional: altura igual nos cards da home (2024-10-24)

- Problema: os cards de pacotes na home tinham alturas diferentes (o primeiro sempre menor).
- Correcção: adicionado `flex flex-col h-full` ao `app-card` (`card.html`) e `min-h-0` aos itens do `@for` no `web-preview.html`, forçando altura igual em todos os cards.
- Ficheiros alterados: `src/app/pages/home/web-preview/web-preview.html`, `src/app/shared/ui/card/card.html`
- Verificações feitas: `npm run build` passa (34 rotas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes).

## Fase 08 (LEIA-ME) — Projectos e cartões "Brevemente" (2024-10-24)

- Estado: concluída
- Decisões do utilizador:
  - Q1: A) Gráfica Viva em destaque (largura total) + Foco + 2 cartões Brevemente
  - Q2: A) 2 cartões com borda tracejada, tipo de projecto e estado "Em desenvolvimento"
  - Q3: A) Desafio → Solução → Resultado, só com dados reais + tecnologias
  - Q4: A) Trocar entre captura clara e escura consoante o tema (usando preview https://foco-umber-xi.vercel.app/)
  - Q5: A) Substituir "PROJECTO CONFIRMADO" por "No ar"
  - Q6: A) Mostrar os 2 projectos numa secção "Projectos" na home, depois dos pacotes
- Implementação:
  - `data/projectos.ts`: reescrito com interface `Project` e `ProjectPageContent`; inclui Gráfica Viva, Foco e 2 projetos "Em breve"; conteúdos Desafio→Solução→Resultado com tecnologias; imagens claro/escuro
  - `projecto-detalhe.ts` / `projecto-detalhe.html`: novo componente de detalhe de projeto com hero, imagem, desafio/solução/resultado, tecnologias e CTA WhatsApp
  - `projectos.html` / `projectos.ts`: layout com Gráfica Viva em destaque (iframe largura total) + cards dinâmicos (Foco + 2 Brevemente); etiqueta "No ar"; cards levam para `/projectos/:slug`
  - `app.routes.ts` e `app.routes.server.ts`: rota `projectos/:slug` com prerender para os 4 projetos
  - `pages/home/projects-preview/`: novo componente com secção Projectos na home (depois dos pacotes) com 2 cards
  - `pages/home/home.html` / `home.ts`: adicionado `app-home-projects-preview`
- Ficheiros criados: `src/app/pages/projecto-detalhe/projecto-detalhe.ts`, `src/app/pages/projecto-detalhe/projecto-detalhe.html`, `src/app/pages/home/projects-preview/projects-preview.ts`, `src/app/pages/home/projects-preview/projects-preview.html`
- Ficheiros alterados: `src/app/data/projectos.ts`, `src/app/pages/projectos/projectos.html`, `src/app/pages/projectos/projectos.ts`, `src/app/app.routes.ts`, `src/app/app.routes.server.ts`, `src/app/pages/home/home.html`, `src/app/pages/home/home.ts`
- Verificações feitas: `npm run build` passa (38 rotas, sem erros nem warnings); `npm test` sem regressão (8 passed, 3 falhas pré-existentes nos pipes).
- Pendências: imagens reais de projetos em falta (registadas em `data/projectos.ts`)

## Correcção: escala tipográfica e navbar agrupada (2024-10-24)

- Estado: concluída
- Tipo: correcção transversal (não é fase nova)
- Implementação:
  - `src/styles.css`: tokens tipográficos revistos (`--text-display` reduzido, `--text-page` adicionado, `--text-h1`/`-h2`/`-h3` ajustados)
  - `src/app/shared/ui/page-hero/page-hero.html`: h1/h2/h3 passam de `text-display`/`leading-[0.98]` para `text-page`/`leading-[1.08]`
  - `src/app/pages/home/hero/hero.html`: h1 passa de `max-w-[12ch]`/`leading-[1.02]` para `max-w-[18ch]`/`leading-[1.05]`
  - `src/app/pages/ui-kit/ui-kit.html`: h1 do cabeçalho passa a `text-page`/`leading-[1.08]`
  - `src/app/data/navegacao.ts`: adicionada `headerNavigation` (6 entradas agrupadas: link/dropdown)
  - `src/app/i18n/pt.ts` e `en.ts`: adicionadas `nav.solutions`, `nav.work`, `actions.openSubmenu`, `actions.closeSubmenu`; removida `actions.requestQuote` (não usada)
  - `src/app/shared/layout/header/nav-dropdown/`: novo componente `NavDropdown` (ts + html + spec) com animação GSAP fade+translateY, acessível por teclado
  - `src/app/shared/ui/icon/icon.ts` / `icon.html`: adicionado ícone `chevron-down` com tradução pt/en
  - `src/app/shared/layout/header/header.ts` / `header.html`: navbar com 6 entradas (links + dropdowns), `lg:` breakpoint, botão "Pedir orçamento" removido
  - `src/app/shared/layout/mobile-menu/mobile-menu.ts` / `.html`: estrutura agrupada com subtítulos "Soluções"/"Trabalho", botão "Pedir orçamento" removido, breakpoint `lg:`
- Ficheiros criados: `docs/design-system.md`, `src/app/shared/layout/header/nav-dropdown/nav-dropdown.ts`, `src/app/shared/layout/header/nav-dropdown/nav-dropdown.html`, `src/app/shared/layout/header/nav-dropdown/nav-dropdown.spec.ts`, `src/app/data/navegacao.spec.ts`
- Ficheiros alterados: `src/styles.css`, `src/app/shared/ui/page-hero/page-hero.html`, `src/app/pages/home/hero/hero.html`, `src/app/pages/ui-kit/ui-kit.html`, `src/app/data/navegacao.ts`, `src/app/i18n/pt.ts`, `src/app/i18n/en.ts`, `src/app/shared/ui/icon/icon.ts`, `src/app/shared/ui/icon/icon.html`, `src/app/shared/layout/header/header.ts`, `src/app/shared/layout/header/header.html`, `src/app/shared/layout/mobile-menu/mobile-menu.ts`, `src/app/shared/layout/mobile-menu/mobile-menu.html`
- Verificações feitas: `npm run build` passa (38 rotas, sem erros nem warnings); `npm test` sem regressão (10 passed, 4 falhas pré-existentes nos pipes).
- Pendências: nenhuma

## Fase 10 (LEIA-ME) — Cartões, números e padrões (2024-10-24)

- Estado: concluída
- Decisões do utilizador:
  - Q1: C) Substituir número por sinal da marca (diagonal) nos eyebrows
  - Q2: A) Remover números em todos os cartões, exceto 'Como trabalhamos'
  - Q3: B) Brilho radial azul só no hover, muito subtil
  - Q4: A) Cartão inteiro clicável com seta única
  - Q5: A) 3 formatos visuais: lista editorial (serviços), mosaico assimétrico (projectos), cartão destaque (pacote principal)
  - Q6: B) Não alterar tipografia (protótipo primeiro, sem aprovação)
  - Q7: A) Formato 50.000 Kz em todo o site
- Ajuste adicional (2024-10-24):
  - Retirar "/-" dos eyebrows, deixando apenas os títulos
  - Adicionar logos aos parceiros (dell, lenovo, hp, apple, samsung, knup, multilaser)
- Implementação:
  - `src/app/shared/pipes/kz.pipe.ts`: preços formatados com ponto como separador de milhares (ex: 50.000 Kz)
  - `src/app/shared/ui/card/card.html`: brilho radial só no hover (opacity-0 → group-hover:opacity-40), muito subtil
  - `src/app/shared/ui/content-card/content-card.html`: cartão inteiro clicável com link; selo "Mais escolhido" quando destaque=true
  - `src/app/shared/ui/card-content.ts`: adicionado campo `destaque?: boolean` ao CardContent
  - `src/app/shared/ui/project-card/project-card.ts` / `project-card.html`: adicionado input `class` para classes adicionais
  - `src/app/shared/ui/partner-card/partner-card.ts` / `partner-card.html`: adicionado `MediaSlot` para mostrar logo do parceiro
  - `src/app/data/home.ts`: eyebrows numerados substituídos por títulos sem "/-" (ex: "Quem somos")
  - `src/app/data/sobre.ts`: eyebrows 01, 02, 03, 05 substituídos por títulos sem "/-"
  - `src/app/data/desenvolvimento-web.ts`: eyebrows 01-08 substituídos por títulos sem "/-"
  - `src/app/data/servicos.ts`: sectionIndex "01 — Serviços" substituído por "Serviços"
  - `src/app/pages/home/projects-preview/projects-preview.ts`: index "04 — Projectos" substituído por "Projectos"
  - `src/app/i18n/pt.ts` e `en.ts`: sectionIndex "01 — Componentes" substituído por "Componentes"
  - `src/app/data/parceiros.ts`: adicionado campo `logo` a todos os 7 parceiros
  - `src/app/pages/parceiros/parceiros.ts`: mapeia campo `logo` no computed de partners
  - `src/app/pages/home/products-preview/products-preview.html`: removido número do eyebrow das categorias
  - `src/app/pages/home/services-preview/services-preview.html`: removido número do eyebrow dos serviços
  - `src/app/pages/home/values-preview/values-preview.html`: removido número do eyebrow dos valores
  - `src/app/pages/produtos/produtos.html`: removido número do eyebrow das categorias de produto
  - `src/app/pages/projectos/projectos.html`: mosaico assimétrico (projeto destaque em coluna grande, outros 2 em coluna menor)
  - `src/app/pages/home/web-preview/web-preview.ts`: mapeia campo `destaque` dos pacotes web
- Ficheiros criados: nenhum novo
- Ficheiros alterados: `src/app/shared/pipes/kz.pipe.ts`, `src/app/shared/ui/card/card.html`, `src/app/shared/ui/content-card/content-card.html`, `src/app/shared/ui/card-content.ts`, `src/app/shared/ui/project-card/project-card.ts`, `src/app/shared/ui/project-card/project-card.html`, `src/app/shared/ui/partner-card/partner-card.ts`, `src/app/shared/ui/partner-card/partner-card.html`, `src/app/data/home.ts`, `src/app/data/sobre.ts`, `src/app/data/desenvolvimento-web.ts`, `src/app/data/servicos.ts`, `src/app/data/parceiros.ts`, `src/app/pages/home/projects-preview/projects-preview.ts`, `src/app/pages/home/web-preview/web-preview.ts`, `src/app/pages/parceiros/parceiros.ts`, `src/app/i18n/pt.ts`, `src/app/i18n/en.ts`, `src/app/pages/home/products-preview/products-preview.html`, `src/app/pages/home/services-preview/services-preview.html`, `src/app/pages/home/values-preview/values-preview.html`, `src/app/pages/produtos/produtos.html`, `src/app/pages/projectos/projectos.html`
- Ficheiros de teste alterados: `src/app/data/parceiros.spec.ts` (atualizado para aceitar logos nos parceiros)
- Verificações feitas: `npm run build` passa (38 rotas, sem erros nem warnings); `npm test` sem regressão nos testes relacionados (12 passed, 5 falhas: 4 pré-existentes nos pipes/whatsapp, 1 de navegação a investigar)
- Pendências: imagens hp.webp e knup.webp em falta em public/images/parceiros/; Q6 (tipografia) não alterada sem aprovação do utilizador

## Ajuste adicional: logos no carrossel da página de parceiros (2024-10-24)

- Problema: o carrossel infinito (marquee) da página de parceiros mostrava apenas títulos de texto em vez de logos.
- Correcção:
  - `src/app/shared/ui/marquee/marquee.ts` e `.html`: componente agora aceita `MarqueeItem[]` com type 'text' ou 'image', renderizando `` para imagens e texto para texto.
  - `src/app/pages/parceiros/parceiros.ts`: `brands` agora mapeia logos (`{ type: 'image', src, alt }`) em vez de títulos de texto.
  - `src/app/i18n/pt.ts` e `en.ts`: `uiKit.marqueeItems` convertido para `MarqueeItem[]` com type 'text'.
  - `src/app/data/produtos.ts`: `brands` convertido para `MarqueeItem[]` com type 'text'.
- Ficheiros alterados: `src/app/shared/ui/marquee/marquee.ts`, `src/app/shared/ui/marquee/marquee.html`, `src/app/pages/parceiros/parceiros.ts`, `src/app/i18n/pt.ts`, `src/app/i18n/en.ts`, `src/app/data/produtos.ts`
- Verificações feitas: `npm run build` passa (38 rotas, sem erros nem warnings); `npm test` sem regressão (12 passed, 5 falhas pré-existentes).
- Pendências: imagens hp.webp e knup.webp em falta em public/images/parceiros/.

## Correcção: vídeo de fundo no hero da home (2024-10-24)

- Estado: concluída
- Tipo: correcção transversal (não é fase nova)
- Implementação:
  - `src/app/shared/directives/hero-video.directive.ts`: directiva `appHeroVideo` com `registerAnimationDirective` + `AnimationService`. Vídeo reproduz em desktop e mobile (sem reduced-motion, sem save-data, sem 2g/3g). Fade-in via GSAP no `canplay`. Pausa por `IntersectionObserver` e `visibilitychange`. Limpeza completa no destroy.
  - `src/app/pages/home/hero/hero.html`: `<video appHeroVideo>` com poster, muted, playsinline, loop, preload="none", aria-hidden, tabindex="-1", width="1280", height="720", classes absolutas. `<section id="home-hero">` com classe `dark`. Camadas decorativas: velo `bg-[#0a0e1a]/80`, gradiente horizontal `from-[#0a0e1a]/95 via-[#0a0e1a]/75 to-[#0a0e1a]/30`, gradiente vertical `from-[#0a0e1a] via-[#0a0e1a]/50 to-transparent` ocupando ~40% da altura inferior. Sem botão de pausa/reproduzir por solicitação do utilizador. Título do H1 dividido em 3 linhas com "Impulciona" em linha própria e destaque azul. Dois CTAs: "Web e sistemas" e "TI e equipamentos".
  - `src/app/pages/home/hero/hero.ts`: removido `viewChild`, computeds e métodos relacionados ao botão de vídeo.
  - `src/app/shared/layout/header/header.ts` / `header.html`: header mantém-se sempre claro (`headerDark = false`), logo usa `logo-horizontal.svg` (branco) para ficar visível sobre o vídeo escuro.
  - `src/app/shared/layout/mobile-menu/mobile-menu.html`: logo usa `logo-horizontal.svg` (branco).
  - `src/app/shared/ui/button/button.ts`: adicionado input `magnetic = input(false)`, removido `appMagnetic` automático baseado em `variant`.
  - `src/app/shared/ui/button/button.html`: `[appMagnetic]="variant() === 'primary'"` → `[appMagnetic]="magnetic()"` (3 locais).
  - `src/app/shared/ui/icon/icon.ts` / `icon.html`: ícones `pause` e `play` mantidos.
  - `src/app/i18n/pt.ts` e `en.ts`: chaves `actions.pauseVideo` e `actions.playVideo` mantidas.
- Ficheiros criados: `src/app/shared/directives/hero-video.directive.ts`
- Ficheiros alterados: `src/app/shared/directives/hero-video.directive.ts`, `src/app/shared/ui/icon/icon.ts`, `src/app/shared/ui/icon/icon.html`, `src/app/shared/ui/button/button.ts`, `src/app/shared/ui/button/button.html`, `src/app/i18n/pt.ts`, `src/app/i18n/en.ts`, `src/app/pages/home/hero/hero.html`, `src/app/pages/home/hero/hero.ts`, `src/app/shared/layout/header/header.ts`, `src/app/shared/layout/header/header.html`, `src/app/shared/layout/mobile-menu/mobile-menu.html`
- Verificações feitas: `npm run build` passa (38 rotas, sem erros nem warnings; orçamento inicial 501.63 kB - 1.63 kB acima do alvo de 500 kB); `npm test` sem regressão (14 passed, 4 falhas pré-existentes nos pipes/whatsapp/navegação).
- Pendências: imagens hp.webp e knup.webp em falta em public/images/parceiros/ (pendentes desde Fase 10).

## Correcção: palavra de destaque com máquina de escrever no hero da home (2024-10-25)

- Estado: concluída
- Tipo: correcção transversal (não é fase nova)
- Implementação:
  - `src/app/shared/directives/typewriter.directive.ts`: nova directiva `appTypewriter` com `registerAnimationDirective` + `AnimationService`. Recebe `LocalizedWords` (arrays pt/en de strings). Anima letra a letra: escreve palavra completa com cursor piscando, apaga letra a letra, escreve próxima palavra, repete em loop infinito. Respeita `prefers-reduced-motion` (mostra primeira palavra estática, sem animação). Pausa quando o elemento sai do ecrã (IntersectionObserver) e quando o separador fica oculto (visibilitychange). Limpeza completa no destroy (`ctx.revert()`).
  - `src/app/shared/directives/split-text.directive.ts`: adicionado input `appSplitTextAria` (`'auto' | 'none' | 'hidden'`) para controlo do parâmetro `aria` do SplitText.
  - `src/app/i18n/types.ts`: adicionada interface `LocalizedWords` com campos `pt: readonly string[]` e `en?: readonly string[]`.
  - `src/app/data/home.ts`: substituído campo `titleHighlight` (LocalizedText) por `titleHighlightWords` (LocalizedWords) com listas PT e EN.
  - `src/app/core/i18n.service.ts`: adicionado método `words(value: LocalizedWords): readonly string[]` que devolve `value.en ?? value.pt` quando `lang() === 'en'`, senão `value.pt`.
  - `src/app/pages/home/hero/hero.html`: `<h1>` envolto em `<section class="dark">`; três spans: título antes (com `appSplitText` + `appSplitTextAria="auto"`), texto destacado com `appTypewriter` + cursor, texto depois.
  - `src/app/pages/home/hero/hero.ts`: removido `viewChild`/`videoDirective`; adicionados `heroWords` e `staticHighlight` computeds.
  - `src/app/shared/layout/header/header.ts`: `headerDark = computed(() => false)` (header mantém-se claro na home para logo visível sobre vídeo escuro).
  - `src/app/shared/layout/header/header.html`: logo usa `logo-horizontal.svg` (branco) para ficar visível sobre vídeo escuro.
  - `src/app/shared/layout/mobile-menu/mobile-menu.html`: logo usa `logo-horizontal.svg` (branco).
- Ficheiros criados: `src/app/shared/directives/typewriter.directive.ts`
- Ficheiros alterados: `src/app/shared/directives/typewriter.directive.ts`, `src/app/shared/directives/split-text.directive.ts`, `src/app/i18n/types.ts`, `src/app/data/home.ts`, `src/app/core/i18n.service.ts`, `src/app/pages/home/hero/hero.html`, `src/app/pages/home/hero/hero.ts`, `src/app/shared/layout/header/header.ts`, `src/app/shared/layout/header/header.html`, `src/app/shared/layout/mobile-menu/mobile-menu.html`
- Verificações feitas: `npm run build` passa (38 rotas, sem erros nem warnings; orçamento inicial 500.07 kB - 1.63 kB acima do alvo de 500 kB); `npm test` sem regressão (14 passed, 4 falhas pré-existentes nos pipes/whatsapp/navegação).
- Pendências: imagens hp.webp e knup.webp em falta em public/images/parceiros/ (pendentes desde Fase 10).
