# Assets

## 1. Logo (já fornecido em `public/brand/`, vectorizado a partir do `logo.png`)
Cores: azul `#437BC7`, preto `#231F20`. Todos sem fundo (transparente).

| Ficheiro | Conteúdo | Usar em |
|---|---|---|
| `logo-horizontal.svg` | símbolo NS² + "Innovation" (cores originais) | **Header/footer em tema claro** |
| `logo-horizontal-dark.svg` | idem, texto/S a branco | **Header/footer em tema escuro** |
| `logo-mark.svg` | só símbolo NS² (cores originais) | favicon alternativo, selos, avatares em claro |
| `logo-mark-dark.svg` | símbolo com S branco | preloader, hero, selos em escuro |
| `logo-mark-white.svg` / `logo-mark-black.svg` | símbolo monocromático | marcas de água, sobre imagens, impressão |
| `logo-full*.svg` | versão com a linha "Técnologia e comércio…" | **NÃO USAR no site** até o logo ser corrigido (tem "Técnologia"; o correcto é "Tecnologia") |

Regras: não alterar formas/cores; respeitar área de respiro; altura mínima do horizontal 28 px; do símbolo 20 px. Nos `<img>` incluir `alt="NS2 Innovation"` e `width/height`.

## 2. Favicon
- `public/favicon.ico` (16, 32, 48, 64 px): símbolo NS² sobre quadrado arredondado azul-marinho `#0A0E1A`. Já referenciado por `index.html` (`<link rel="icon" type="image/x-icon" href="favicon.ico">`).
- Acrescentar na Fase 12 apenas se o utilizador pedir: `apple-touch-icon` e imagem OG 1200×630 (gerada a partir do logo).

## 3. Ilustrações e ícones
- Tudo SVG, desenhado em código ou à mão: ícones (ver lista no `design-system.md`), formas de arame/malha abstractas (inspiração WaveNet), diagonais, padrões de grelha. Componente `Icon` + SVGs em `public/images/ilustracoes/`.
- Cores via `currentColor` ou variáveis CSS (`var(--accent)`).

## 4. Fotografia e pessoas
- **Pessoas devem reflectir Angola**: pessoas angolanas (maioritariamente de pele negra ou mestiça), profissionais, em ambientes reais de trabalho/escritório de Luanda, vestuário contemporâneo. **Sem aparência europeia, sem fotos de banco de imagens genéricas.**
- Idealmente fotos reais da equipa/instalações/trabalhos da NS2. Enquanto não existirem: usar `MediaSlot` (sem pessoas).
- Se o utilizador gerar imagens com IA, usar prompts do tipo: *"Angolan IT technician (Black Angolan man/woman) configuring a network rack in a modern Luanda office, natural light, documentary style, no text"*.
- Ficheiros: `public/images/<secção>/<nome>.webp` (largura máx. 2000 px, qualidade ~80), com variante `-mobile` quando relevante.

## 5. Imagens necessárias (lista mestra — o agente actualiza o estado)
| Ficheiro sugerido | Onde | Descrição | Estado |
|---|---|---|---|
| `hero/hero-home.webp` | Home hero (opcional; o hero base é gradiente+SVG) | Ambiente tecnológico escuro, sem pessoas ou com técnicos angolanos | pendente |
| `public/images/equipa.jpeg` | Home / Sobre | Fotografia fornecida pelo utilizador para a secção da equipa na Home | disponível; usada na Home |
| `sobre/escritorio.webp` | Sobre | Escritório/loja NS2 | pendente |
| `servicos/<slug>.webp` ×8 | Detalhe de serviço | Uma por serviço (rack, técnico, manutenção, contrato, consultoria, código, equipamentos) | pendente |
| `produtos/<categoria>.webp` ×6 | Produtos | Notebooks, desktops, peças, acessórios, móveis, consumíveis | pendente |
| `projectos/grafica-viva.webp` | Projectos | Captura do site da Gráfica Viva | pendente |
| `noticias/<slug>.webp` ×3 | Notícias | Capas | pendente |
| `parceiros/<marca>.svg` | Parceiros | Logótipos oficiais **fornecidos pelo utilizador** (não descarregar) | pendente |
| `og/og-default.png` | SEO | 1200×630 | Fase 12 |
