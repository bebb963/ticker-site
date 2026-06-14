# Kajo Studio — Design System
> Extraído diretamente do arquivo Figma via MCP  
> Arquivo: `hNIP09Gh73kM9L1SL9EHsX` · Versão: Community Portfolio · Data: 2025

---

## 1. Visão Geral

O Kajo Studio é um **portfolio de agência de design** com estética editorial extremamente minimalista. O site usa apenas **duas cores de fundo**, **duas famílias tipográficas** e um sistema de grid 50/50. Todo o impacto visual vem do tamanho massivo da tipografia e do uso criativo do espaço negativo.

**Stack recomendada para replicar:** Next.js + Tailwind CSS (o Figma já exporta em Tailwind)

---

## 2. Color Tokens

### Paleta Principal

| Token | Variável CSS | Hex | Uso |
|---|---|---|---|
| `Background/Primary` | `--color-bg-primary` | `#0E1011` | Background principal (dark), elementos sólidos |
| `Background/Muted` | `--color-bg-muted` | `#F8F8F8` | Background de seções alternativas (quase branco) |
| `Text/Default` | `--color-text-default` | `#0E1011` | Texto principal |
| `Text/Muted` | `--color-text-muted` | `rgba(14, 16, 17, 0.6)` | Labels de categoria, metadados, datas |
| `Icon/Default` | `--color-icon-default` | `#0E1011` | Ícones padrão |
| `Icon/Inverse` | `--color-icon-inverse` | `#FFFFFF` | Ícones sobre fundo escuro |

### CSS Custom Properties

```css
:root {
  --color-bg-primary: #0E1011;
  --color-bg-muted: #F8F8F8;
  --color-bg-white: #FFFFFF;

  --color-text-default: #0E1011;
  --color-text-muted: rgba(14, 16, 17, 0.6);
  --color-text-inverse: #FFFFFF;

  --color-icon-default: #0E1011;
  --color-icon-inverse: #FFFFFF;

  --color-border: #0E1011;
}
```

> ⚠️ **Nota:** A paleta é intencionalmente monocromática. Não há cores de acento (accent colors). Todo o contraste vem de tamanho tipográfico e peso.

---

## 3. Typography

### Famílias Tipográficas

| Família | Estilo | Peso | Uso Principal |
|---|---|---|---|
| **Anton SC** | Regular | 400 | Display / Hero headings — impacto máximo |
| **Inter** | Semi Bold | 600 | Subheadings, navegação, CTAs, corpo em destaque |
| **Inter** | Regular | 400 | Corpo de texto longo |
| **Gambetta** | Medium Italic | 500 | Labels de categoria entre parênteses — ex: `(About Us)` |

### Escala Tipográfica Completa

#### Anton SC (Display)

| Token | Tamanho | Line Height | Letter Spacing | Uso |
|---|---|---|---|---|
| `Heading/XXLarge` | 320px | 1.0 | 0 | Palavra de seção gigante (ex: "PROJECTS") |
| `Heading/Large` | 160px | 1.0 | 0 | Hero principal — nome da marca |
| `Heading/H2` | 80px | 1.1 | 0 | Títulos de seção |

#### Inter Semi Bold (Headings Alt)

| Token | Tamanho | Line Height | Letter Spacing | Uso |
|---|---|---|---|---|
| `Heading Alt/Small` | 80px | 1.2 | -2px | Subtítulo descritivo de seção |
| `Heading Alt/H2` | 48px | 1.3 | -0.5px | Hero tagline |
| `Heading Alt/H3` | 40px | 1.4 | -1px | Títulos de cards/projetos |
| `Components/Navbar` | 22px | 1.0 | 0 | Links de navegação |
| `Components/Button Text` | 22px | 1.0 | 0 | Texto de botão |

#### Inter Regular (Body)

| Token | Tamanho | Line Height | Letter Spacing | Uso |
|---|---|---|---|---|
| `Text/Medium` | 22px | 1.7 | 0 | Parágrafos de corpo de texto |

#### Gambetta Medium Italic (Meta/Labels)

| Token | Tamanho | Line Height | Letter Spacing | Uso |
|---|---|---|---|---|
| `Text/Meta` | 30px | 1.0 | 0 | Labels de seção: `(About Us)`, `(Our Partner)` |
| `Text/Meta Large` | 32px | 1.0 | 0 | Labels de seção maiores: `(Selected Work)`, `(01)` |

### CSS Typography Classes

```css
/* Anton SC — Display */
.text-display-xxl {
  font-family: 'Anton SC', sans-serif;
  font-size: 320px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}

.text-display-xl {
  font-family: 'Anton SC', sans-serif;
  font-size: 160px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}

.text-display-h2 {
  font-family: 'Anton SC', sans-serif;
  font-size: 80px;
  font-weight: 400;
  line-height: 1.1;
  text-transform: uppercase;
}

/* Inter Semi Bold — Headings Alt */
.text-heading-sm {
  font-family: 'Inter', sans-serif;
  font-size: 80px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -2px;
}

.text-heading-h2 {
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.text-heading-h3 {
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -1px;
}

.text-nav {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 1;
}

/* Inter Regular — Body */
.text-body {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.7;
}

/* Gambetta Medium Italic — Meta Labels */
.text-meta {
  font-family: 'Gambetta', sans-serif;
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  line-height: 1;
}

.text-meta-lg {
  font-family: 'Gambetta', sans-serif;
  font-size: 32px;
  font-weight: 500;
  font-style: italic;
  line-height: 1;
}
```

### Import de Fontes (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton+SC&family=Inter:wght@400;600&display=swap" rel="stylesheet">
```

> ⚠️ **Gambetta** não está disponível no Google Fonts. Alternativas: usar **DM Serif Text** em itálico, **Playfair Display** em itálico, ou adquirir a licença da fonte original em foundries como Fontshare.

---

## 4. Spacing System

O site usa múltiplos de **32px** como base do sistema de espaçamento.

| Token | Valor | Uso |
|---|---|---|
| `space-1` | 16px | Gap entre elementos pequenos, espaço interno mínimo |
| `space-2` | 32px | Gap entre elementos relacionados, padding de cards |
| `space-3` | 48px | Gap entre grupos de conteúdo |
| `space-4` | 64px | Espaçamento de componentes (ex: parceiros logos) |
| `space-5` | 96px | Padding interno das seções, margem lateral do grid |
| `space-6` | 128px | Gap entre seções internas maiores |
| `space-7` | 160px | Padding-top do hero, espaços maiores |

```css
:root {
  --space-1: 16px;
  --space-2: 32px;
  --space-3: 48px;
  --space-4: 64px;
  --space-5: 96px;
  --space-6: 128px;
  --space-7: 160px;
}
```

---

## 5. Layout & Grid

### Canvas Principal

| Propriedade | Valor |
|---|---|
| Largura total do canvas | 1920px |
| Grid principal | 50/50 (split screen) |
| Metade do grid | 960px |
| Margem interna (padding lateral) | 96px |
| Largura do conteúdo interno (half grid) | 768px |
| Largura do conteúdo interno (full) | 1400px (approx) |

### Sistema de Grid

```css
/* Grid 50/50 — usado no Hero e outras seções */
.grid-split {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 960px / 960px em 1920px */
}

/* Container interno com margens */
.container-inner {
  padding-left: 96px;
  padding-right: 96px;
}

/* Seção padrão */
.section {
  width: 100%;
  padding: 96px;
}
```

---

## 6. Components

### 6.1 Header / Navigation

**Estrutura:** Logo (esquerda) + Links de nav (centro-esquerda) + CTA (direita)  
**Background:** Transparente  
**Posição:** `position: sticky; top: 0` — sticky no scroll

```
[Logo/Nome] ........ [Projects] [Services] [Studio] [Journal] ........ [Let's Talk]
```

**Especificações:**
- Padding top: 64px, Padding horizontal: 96px
- Font: Inter Semi Bold, 22px
- CTA "Let's Talk": texto com linha embaixo (2px border-bottom `#0E1011`)
- Nenhum background, sem blur — totalmente transparente

### 6.2 Seção Hero

**Estrutura:** Split 50/50

| Coluna Esquerda (960px) | Coluna Direita (960px) |
|---|---|
| Imagem full-cover com `position: sticky` | Nome da marca em Anton SC 160px |
| Background: `#0E1011` | Localização em Gambetta italic |
| | Tagline em Inter Semi Bold 48px |
| | Seção About Us |
| | Parceiros (logos) |

**Sticky scroll:** A coluna esquerda (imagem) tem `position: sticky; top: 0` enquanto o conteúdo da direita scrollas.

### 6.3 Labels de Seção (Meta Labels)

Padrão de label que aparece antes de cada título de seção. Sempre entre parênteses.

```html
<span class="text-meta text-muted">(About Us)</span>
<span class="text-meta text-muted">(Selected Work)</span>
<span class="text-meta text-muted">(01)</span>
```

**Numeração de seção:** Gambetta italic, aparece alinhada à direita na mesma linha do label.

### 6.4 Project Card

**Tamanho:** 960×960px (metade do grid)  
**Estrutura:** Imagem de fundo com overlay escuro + logo do cliente centralizado + rodapé com nome e ano

```
┌─────────────────────────────────┐
│                                 │
│        [LOGO DO CLIENTE]        │  ← Logo centralizado, branco
│                                 │
├─────────────────────────────────┤
│  Nome do Projeto    (Ano)       │  ← Inter SemiBold 40px / Gambetta italic 32px
└─────────────────────────────────┘
```

**Overlay:** `opacity: 0.7` na imagem

**Nome do projeto:** Inter Semi Bold, 40px, tracking: -1px  
**Ano:** Gambetta Medium Italic, 32px, cor: `rgba(14,16,17,0.6)`  
**Padding do rodapé:** 32px

### 6.5 Service Item

**Estrutura:** Título do serviço → Descrição curta → Label de categoria → Lista de sub-serviços (duas colunas)

```
Brand Strategy
Build a strong, cohesive brand identity to connect with your audience.

(Branding Services)
Brand Discovery         Visual Identity Design
Brand Positioning       Brand Guidelines
```

### 6.6 Testimonial Card

**Estrutura:** Aspas abertas + texto do depoimento + nome + empresa entre parênteses  
**Bordas:** Borda sutil separando os cards

### 6.7 Button Text (CTA)

Apenas texto + sublinhado. **Sem background, sem border-radius, sem padding.**

```css
.btn-text {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 1;
  color: var(--color-text-default);
  text-decoration: none;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 2px;
}
```

---

## 7. Seções da Página (Mapa)

| # | Seção | Background | Largura | Notas especiais |
|---|---|---|---|---|
| 1 | **Header** | Transparente | 100% | Sticky |
| 2 | **Section Hero** | `#F8F8F8` (direita) / `#0E1011` (esquerda) | 1920px | Split 50/50, sticky image |
| 3 | **Section Projects** | `#F8F8F8` | 1920px | Grid 2×2 de cards 960px |
| 4 | **Section Service** | Branco/`#F8F8F8` | 1920px | Lista de serviços |
| 5 | **Section Testimonials** | — | 1920px | Cards com depoimentos |
| 6 | **Footer** | `#0E1011` (dark) | 1920px | Logos de empresas + links |

---

## 8. Efeitos Visuais

| Efeito | Onde | CSS |
|---|---|---|
| Sticky image no scroll | Hero — coluna esquerda | `position: sticky; top: 0` |
| Overlay em imagens | Project Cards | `opacity: 0.7` em `<img>` |
| Uppercase tipografia | Todos os Anton SC | `text-transform: uppercase` |
| Tracking negativo | Inter nos headings | `letter-spacing: -2px` até `-0.5px` |
| Aspas em depoimentos | Testimonial cards | `"` como primeiro caractere |

---

## 9. Responsividade

O design original é desktop-first em 1920px. Para adaptar:

| Breakpoint | Ajuste sugerido |
|---|---|
| `< 1280px` | Reduzir tipografia display ~50%, manter split grid |
| `< 1024px` | Abandonar split 50/50, seções em coluna única |
| `< 768px` | Tipografia display escalonada (vw units), padding 24px |
| `< 480px` | Anton SC hero em `clamp(48px, 15vw, 120px)` |

```css
/* Escala responsiva para tipografia display */
.text-display-xl {
  font-size: clamp(48px, 10vw, 160px);
}

.text-display-xxl {
  font-size: clamp(80px, 16vw, 320px);
}

.text-heading-sm {
  font-size: clamp(32px, 6vw, 80px);
}
```

---

## 10. Assets Externos (7 dias de validade)

Os assets extraídos do Figma MCP expiram em 7 dias. Para uso permanente, baixe e hospede:

- Imagem Hero (mockup books): substituir por imagem própria
- Logos de clientes: Acme, Kanba, Goldline, Asgardia, Utosia, Circle — são fictícios no template
- Fotos dos projetos: 4 imagens de projeto (960×960px)

---

*Design System gerado por extração automatizada via Figma MCP · Kajo Studio Portfolio*
