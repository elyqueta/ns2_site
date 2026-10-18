# PROGRESSO (o agente actualiza no fim de cada fase)

| Fase                               | Estado                  | Aprovada pelo utilizador                    | Notas                                                                                                                                                                                                                                        |
| ---------------------------------- | ----------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00 Fundações                       | ✅ aprovada             | Sim — avançar para fase 01                  | Implementada em `outher_dev`; build e testes aprovados. Rotas parametrizadas são prerenderizadas nas fases em que os dados correspondentes ficam disponíveis.                                                                                |
| 01 Design system e UI kit          | ✅ aprovada             | Sim — avançar para fase 02                  | UI kit com componentes reutilizáveis, pipes, ícones e temas; build, testes e validação visual aprovados.                                                                                                                                     |
| 02 Motor de animação               | ✅ aprovada             | Sim — aprovada pelo utilizador a 2026-10-18 | AnimationService, ScrollService, directivas GSAP/Lenis e demonstração no UI kit; build e testes aprovados.                                                                                                                                   |
| 03 Layout global                   | ✅ aprovada             | Sim — aprovada pelo utilizador a 2026-10-18 | Header com navegação responsiva, menu móvel acessível, footer, WhatsApp flutuante, preloader de sessão e cortina de transição; build, testes e validação runtime aprovados.                                                                  |
| 04 Início                          | ✅ aprovada             | Sim — aprovada pelo utilizador a 2026-10-18 | Indicador com scroll suave, botões/menu sem quebra de linha, pin dos serviços revisto, marcas adaptadas ao mobile e fotografia local fornecida pelo utilizador.                                                                              |
| 05 Sobre                           | ✅ aprovada             | Sim — aprovada pelo utilizador a 2026-10-18 | Página Sobre com conteúdo oficial, processo animado por scroll, valores, diferenciais e CTA; build, testes e validação responsiva aprovados.                                                                                                 |
| 06 Serviços                        | ✅ aprovada             | Sim — aprovada pelo utilizador a 2026-10-18 | Lista com 9 serviços e 8 páginas de detalhe prerenderizadas; SEO e JSON-LD Service por detalhe, CTAs específicos e navegação anterior/seguinte; build e testes aprovados.                                                                    |
| 07 Produtos                        | ✅ aprovada             | Sim — avançar para fase 08                  | Catálogo com 6 categorias, cartões por marca/linha e tipo, CTAs WhatsApp, âncoras com scroll spy e carrossel infinito de marcas; menu de categorias acompanha o header no scroll.                                                            |
| 08 Desenvolvimento web + Projectos | ✅ aprovada             | Sim — aprovado pelo utilizador a 2026-10-18 | Páginas `/desenvolvimento-web` e `/projectos`; pacotes com valores "a partir de", nota legal, FAQ, diagnóstico e timeline animada. Ligações do diagnóstico preservam a rota. Conteúdo de IA aguarda confirmação; Gráfica Viva usa MediaSlot. |
| 09 Notícias                        | ✅ aprovada             | Sim — aprovada pelo utilizador a 2026-10-18 | Lista com artigo em destaque e filtros por categoria; três detalhes com partilha, relacionados e JSON-LD Article; slugs prerenderizados.                                                                                                     |
| 10 Parceiros                       | 🟡 a aguardar aprovação | Não                                         | Lista de marcas e sete detalhes; links para categorias de produtos e pedidos de orçamento por marca; páginas de detalhe prerenderizadas.                                                                                                     |
| 11 Contacto, legais e 404          | ⬜ pendente             | —                                           |                                                                                                                                                                                                                                              |
| 12 SEO, a11y, desempenho           | ⬜ pendente             | —                                           |                                                                                                                                                                                                                                              |
| 13 Tradução PT/EN                  | ⬜ pendente             | —                                           |                                                                                                                                                                                                                                              |
| 14 Revisão final                   | ⬜ pendente             | —                                           |                                                                                                                                                                                                                                              |

Legenda: ⬜ pendente · 🟡 a aguardar aprovação · ✅ aprovada · 🔧 em correcção

## Decisões registadas

- Conteúdo longo em `data/*.ts` usará campos `{ pt: string, en?: string }`; textos de interface usam chaves do dicionário. A tradução inglesa será acrescentada na Fase 13.
- As rotas usam um componente de página mínimo comum, com título e metadados definidos pelos dados da rota.
- O SSR permite apenas `localhost` e `127.0.0.1` por omissão; domínios de deploy só serão configurados quando forem conhecidos.
- Para contraste AA, os tokens de azul em tema claro/escuro usam tonalidades ligeiramente mais escuras do azul da marca nos textos e botões; o azul original do logótipo mantém-se intacto.
- O `/ui-kit` inclui amostras neutras sem preços reais e aplica `noindex, nofollow`, removendo a meta tag quando se sai da rota.
- A Fase 02 foi aprovada pelo utilizador em 2026-10-18; as animações só são activadas após a aplicação ficar estável para não interferirem com a hidratação SSR.
- O layout global usa exclusivamente os contactos oficiais fornecidos; redes sociais e horário não são mostrados enquanto não houver confirmação.
- A Home usa apenas conteúdo oficial; os preços web aparecem como "a partir de" com a nota legal completa. A secção Notícias apresenta os três modelos educativos fornecidos nos documentos, pendentes de revisão/substituição.
- O JSON-LD `Organization`/`LocalBusiness` fica no documento base para ser emitido no HTML prerenderizado; os dados publicados limitam-se a nome, site, contacto e morada confirmados.
- Nas correcções da Fase 04, o indicador "Descer para explorar" usa scroll suave com easing gradual; o pin de serviços fixa só a faixa de cartões para mantê-los inteiros na área visível; a faixa de marcas fica centrada no desktop e permite deslize horizontal sem scrollbar visível no telemóvel; o menu móvel permite scroll pelo rato/toque e anima a abertura/fecho; a fotografia local fornecida é usada na secção "Quem somos".
- A Fase 05 usa a fotografia local fornecida pelo utilizador, conteúdo oficial de `empresa.md` e a directiva de progresso baseada em ScrollTrigger; sem métricas nem datas de fundação.
- A Fase 06 usa os textos oficiais de `servicos.md`; a página de detalhe de desenvolvimento web continua a ligar à rota `/desenvolvimento-web` sem criar um detalhe duplicado. O JSON-LD Service é emitido por detalhe.
- A Fase 07 usa apenas marcas, linhas e tipos de produto descritos em `produtos.md`; os pedidos de orçamento preenchem mensagens específicas por categoria ou opção. As âncoras são tratadas pelo Lenis e o scroll spy usa ScrollTrigger; a barra fixa acompanha o header quando ele entra/sai de vista e a faixa de marcas repete grupos suficientes para preencher todos os ecrãs. As imagens das seis categorias continuam em falta e usam MediaSlot.
- A Fase 08 usa os pacotes oficiais de desenvolvimento web; todos os preços publicados são apresentados como "a partir de", com a nota legal, e cada pacote liga ao WhatsApp e ao formulário com `?servico=`. A recomendação de automação/IA não é apresentada como serviço até confirmação do utilizador. A Gráfica Viva é o único projecto listado e não tem ligação externa publicada.
- A Fase 09 utiliza os três artigos-modelo fornecidos, sem HTML cru; as ligações de partilha são geradas no browser, cada artigo tem JSON-LD `Article` e os três slugs são prerenderizados. A cópia da ligação apresenta estado de sucesso ou instrução explícita caso o navegador não permita copiar.
- A Fase 10 apresenta as sete marcas com que a NS2 trabalha, sem declarar parcerias oficiais nem usar logótipos de terceiros; cada detalhe liga à categoria de produtos correspondente e inclui um CTA de orçamento por WhatsApp.

## Pendências de conteúdo (precisam do utilizador)

- Confirmar a plataforma correspondente aos identificadores de redes sociais oficiais antes de os publicar; até lá, permanecem ocultos.
- O horário de atendimento não foi fornecido e não é apresentado.
- Rever ou substituir os três artigos-modelo antes de os considerar conteúdo editorial final; faltam também as imagens de capa próprias, que permanecem em `MediaSlot`.
- Faltam fotografias próprias para os oito detalhes de serviço; cada página mantém o `MediaSlot` com o caminho esperado registado em `assets.md`.
- Faltam fotografias próprias para as seis categorias de produto; a página mantém MediaSlot com os caminhos registados em `assets.md`.
- Confirmar o texto da secção de agentes de IA e atendimento automático antes de o publicar em `/desenvolvimento-web`.
- Para completar o caso da Gráfica Viva, fornecer a descrição, tecnologias, funcionalidades, ligação pública e captura de ecrã; a imagem esperada está registada em `assets.md`.
- Os logótipos das sete marcas continuam pendentes; até serem fornecidos, os nomes são apresentados em tipografia.

## Imagens em falta

(vazio — ver `assets.md`)
