# Parceiros e marcas (`/parceiros`, `/parceiros/:slug`)

**Importante:** o material oficial indica as **marcas com que a NS2 trabalha**, não parcerias oficiais. Por isso a secção chama-se **"Marcas e parceiros"** e usa a expressão **"Trabalhamos com…"**. Nunca escrever "parceiro oficial"/"distribuidor autorizado" até o utilizador confirmar (registar em PROGRESSO.md). Logótipos: **só ficheiros fornecidos pelo utilizador** (`public/images/parceiros/<slug>.svg`); até lá, mostrar o nome em tipografia no `PartnerCard`.
Dados `Parceiro`: `slug`, `nome`, `categoria`, `resumo`, `descricao`, `produtos[]`, `logo?`, `site?`, `oficial: boolean` (todos `false` por agora).

| slug | Nome | Categoria | O que fornecemos (texto) |
|---|---|---|---|
| `dell` | Dell | Portáteis, desktops e acessórios | Portáteis **Latitude** (uso empresarial; acabamento e design muito resistentes) e **Inspiron** (desempenho para o dia-a-dia), novos e seminovos; desktops; acessórios. |
| `lenovo` | Lenovo | Portáteis e desktops | **ThinkPad** (mercado corporativo; leve, resistente) e **IdeaPad** (configuração robusta, experiência multimédia), novos e seminovos; desktops. |
| `hp` | HP | Portáteis e desktops | **EliteBook** (ambiente corporativo; elevado poder de processamento, durabilidade), novos e seminovos; desktops. |
| `apple` | Apple | MacBook | **MacBook Air** (portabilidade, bateria excelente, design ultrafino) e **MacBook Pro** (edição de vídeo, modelação e aplicações exigentes), novos e seminovos. |
| `samsung` | Samsung | Acessórios | Acessórios de várias linhas. |
| `knup` | Knup | Acessórios | Acessórios de informática. |
| `multilaser` | Multilaser | Acessórios | Acessórios de informática. |

Descrição genérica (para marcas com pouco detalhe): "Trabalhamos com produtos <Marca> para empresas e particulares. Peça-nos um orçamento e ajudamos a escolher o modelo mais adequado."
Layout lista: `PageHero` + marquee + grelha `PartnerCard` (hover: diagonal + seta). Detalhe: nome grande, categoria, o que fornecemos, ligação para `/produtos#<categoria>`, CTA "Pedir orçamento <Marca>" (WhatsApp), outras marcas.
Bloco final: "É parceiro ou fornecedor e quer colaborar connosco?" → contacto.
