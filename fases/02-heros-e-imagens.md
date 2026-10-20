# Fase 02 — Heros e imagens de fundo

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Situação actual
Páginas interiores: breadcrumb, título gigante, subtítulo e uma forma diagonal suave. A metade direita está vazia. A home tem um hero escuro com uma mancha azul difusa.

Ideia de marca: o **corte diagonal do logótipo** (a barra do "NS") pode ser a máscara das imagens (`clip-path`), tornando o padrão próprio da NS2.

## Imagens disponíveis (`public/images/heros/`)
Ampliadas para 1920px a partir de originais de cerca de 735px, com grão leve. Usar sempre com overlay forte e substituir por originais de alta resolução quando existirem.

| Ficheiro | Para | Notas |
|---|---|---|
| `home-a-rede.webp` | Home (opção A) | Nós de rede azuis, esquerda livre para texto. Melhor encaixe em 16:9 |
| `home-b-portatil.webp` | Home (opção B) | Portátil sobre circuitos, formato banner 3:1 |
| `home-c-cidade.webp` | Home (opção C) | Cidade em wireframe. Fonte Freepik/Magnific gratuita: **exige atribuição** |
| `sobre.webp` | Sobre | Ondas azuis abstractas, neutro |
| `servicos.webp` | Serviços | Rede de pontos a preto e branco (tingir com `--accent` por CSS) |
| `produtos.webp` | Produtos | Secretária escura vista de cima, espaço central livre |
| `desenvolvimento-web.webp` | Desenvolvimento web | Código num portátil |
| `noticias.webp` | Notícias | Secretária azul com teclado (provável IA, licença "Premium") |
| `contacto.webp` | Contacto | Telemóvel com ícones de contacto |
| *(sem imagem)* | **Projectos** | Usar capturas/mockups dos projectos (fase 08) |
| *(sem imagem)* | **Parceiros** | **Logomarca** (`/brand/logo-mark.svg`) grande, com opacidade de 6–10% e recorte diagonal |
| *(sem imagem)* | Política de privacidade, Termos | Gradiente do sistema visual |

## Perguntas (ronda 1)

**Q1. Estilo do hero da home**
- A) Rede de nós (`home-a-rede`) *(recomendado)*
- B) Portátil sobre circuitos (`home-b-portatil`)
- C) Cidade em wireframe (`home-c-cidade`; requer atribuição)
- D) Sem fotografia: mockups dos projectos (fase 08) + diagonal da marca
- E) Saltar

**Q2. Como a imagem entra no hero**
- A) Painel à direita recortado na diagonal da marca *(recomendado)*
- B) Fundo a toda a largura atrás do texto, com overlay
- C) Imagem só nas páginas interiores; a home fica sem foto
- D) Saltar

**Q3. Modo claro**
- A) Hero escuro nos dois temas (mais simples e coerente) *(recomendado)*
- B) Versão clara: overlay claro e imagem esbatida
- C) Imagem só no escuro; no claro, gradiente do sistema
- D) Saltar

**Q4. Tamanho do título (H1)**
- A) Reduzir com `clamp()` para dar espaço à imagem *(recomendado)*
- B) Manter o tamanho actual
- C) Saltar

## Pergunta (ronda 2)

**Q5. Âmbito**
- A) Home primeiro; as interiores numa segunda passagem *(recomendado)*
- B) Home + Sobre
- C) Todas as páginas agora
- D) Saltar

## Implementação
- Imagem do hero visível: `fetchpriority="high"`, sem `lazy`; as restantes com `lazy`. `alt=""` (decorativa).
- Overlay a partir de `var(--bg)` para garantir contraste do texto (mínimo 4.5:1, medido sobre a imagem). No escuro, reduzir ligeiramente o brilho. Tingir com `--accent` se a paleta destoar.
- `object-fit: cover` e `object-position` definidos por página (ex.: `home-a-rede` → `right center`).
- Em ecrãs até 480px, imagem mais pequena ou só gradiente, para não pesar nem tapar o texto.
- Se for escolhida a diagonal: criar uma variável CSS única para o ângulo, reutilizável (hero, cartões de projecto, CTA final).
- **Documentar no progresso** que páginas têm imagem, quais usam a logomarca (Parceiros) e quais não têm imagem.

## Critérios de aceitação
- Título legível sobre a imagem nos dois temas.
- Sem imagem pixelizada à vista (se houver, aumentar o overlay ou trocar por gradiente e registar a pendência).
- O LCP da home não piora.
