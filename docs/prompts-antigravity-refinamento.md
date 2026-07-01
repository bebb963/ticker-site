# Prompts de Refinamento — Antigravity (Site Ticker, Passada de Experiência)

> Esta é a passada de REFINAMENTO de experiência, feita depois da construção V2.
> Não é reconstrução. Cada prompt aqui POLE o que já existe em `src/`, mantendo
> copy e estrutura de conteúdo. Fonte da verdade do conteúdo: `docs/plano-site-v2.md`
> e `docs/prompts-antigravity.md`. Aqui tratamos só de ritmo, hierarquia, layout,
> tipografia, transições, componentes visuais e percepção premium.
>
> Rode um prompt, teste local (desktop e mobile), valide, e só então vá para o
> próximo. Não commitar até validar.

---

## CONTEXTO GLOBAL DO REFINAMENTO (vale para todos os prompts abaixo)

```
Projeto: site da Ticker, Next.js 14 (App Router), TypeScript, codigo em src/.
Esta e uma passada de refinamento visual sobre um site ja construido e funcional.
NAO reescreva copy. NAO remova secoes. NAO mude a ordem da home. Apenas refine
o que for pedido em cada prompt.

Regras que valem para TODA tarefa (herdadas do plano V2):
- Nunca usar o caractere de travessao. Use ponto, virgula, dois-pontos ou parenteses.
- Reusar o design system Kajo: fundo escuro #0E1011, fundo claro #F8F8F8, branco
  #FFFFFF so para elementos que flutuam (cards, inputs). Display em Anantason
  Expanded, texto em Open Sauce One, rotulos em serif italico "(nome)".
- Escala de espaco em multiplos de 32px (--space-1..7 = 16,32,48,64,96,128,160).
- Acento #FF5A00 SO em pontos-chave (estado ativo, progresso, numero de secao,
  vetor de crescimento, linha do CTA primario). Preto e branco dominam.
  NUNCA o acento como cor de area de fundo.
- Acessibilidade e performance: um unico h1 (Hero), headings em ordem, foco
  visivel, prefers-reduced-motion respeitado em TODA animacao/video/marquee,
  next/image sem layout shift.
- Ao terminar: rodar npm run dev, validar desktop e mobile, e NAO fazer commit.
  Listar arquivos alterados e aguardar validacao.
```

---

## R0 — Fundação do ritmo: token de claro único, mapa de cores e costuras

```
Objetivo: estabelecer o sistema de ritmo claro/escuro do site inteiro. Isto e a
base sobre a qual as demais secoes serao polidas. Alterar SO fundo, cor de texto
por contraste, e adicionar utilitarios de costura. NAO mudar conteudo.

1) TOKEN DE CLARO UNICO
   - Todas as secoes de fundo claro passam a usar #F8F8F8 (var --color-bg-muted).
   - Aposentar #FFFFFF como fundo de SECAO. O branco puro fica reservado a
     elementos que flutuam por cima (cards, inputs, o card do Mapa).
   - Secoes que hoje usam #FFFFFF como fundo e devem passar a #F8F8F8:
     PorOndeComecar (id="comecar") e Contato (id="contato").

2) MAPA DE FUNDOS FINAL (aplicar exatamente esta sequencia)
   Hero .................. escuro #0E1011
   Premissa .............. CLARO  #F8F8F8   (hoje esta escura: virar clara)
   MarketingInstintivo ... claro  #F8F8F8
   ComoOlhamos ........... escuro #0E1011
   OMapa ................. claro  #F8F8F8
   TresFases ............. escuro #0E1011
   FormasDeTrabalho ...... CLARO  #F8F8F8   (hoje esta escura: virar clara)
   TickerOS .............. escuro #0E1011
   PorOndeComecar ........ claro  #F8F8F8
   DiagnosticoEstrutura .. escuro #0E1011
   Manifesto ............. escuro #0E1011
   Contato ............... claro  #F8F8F8
   Footer ................ escuro #0E1011
   REGRA DE OURO: nunca mais que dois blocos da mesma cor seguidos.
   NESTE PROMPT so trocar o fundo/cor de Premissa e FormasDeTrabalho quando os
   prompts especificos delas rodarem. Aqui apenas unifique o token de claro
   (item 1) e crie os utilitarios de costura (item 3).

3) UTILITARIOS DE COSTURA (para juncoes de mesma cor)
   Sobram duas juncoes onde a cor NAO troca e a virada de capitulo precisa ser
   marcada de outro jeito:
     a) Premissa (claro) -> MarketingInstintivo (claro)
     b) Diagnostico (escuro) -> Manifesto (escuro)
   Criar em globals.css:
   - .section-seam  : filete horizontal 1px, largura total do container,
                      cor rgba(14,16,17,0.08) na versao clara e
                      rgba(255,255,255,0.08) na versao escura (.section-seam--dark),
                      com respiro vertical generoso (var(--space-4) acima e abaixo).
   - .chapter-index : numero da secao em serif italico (Anantason Expanded Italic),
                      tamanho ~18px, alinhado a direita, cor rgba(...,0.4),
                      posicionado junto ao .section-seam. Ex.: "03".
   As trocas de cor (escuro<->claro) permanecem como CORTE SECO, sem gradiente:
   essa borda nitida e o proprio marcador de capitulo.

Rode npm run dev. Nao commitar.
```

---

## R1 — Hero (Alternativa B: arquitetura em faixas, hierarquia corrigida)

```
Objetivo: refinar src/components/Hero.tsx mantendo a arquitetura atual em tres
faixas (video em cima, faixa preta com titulo/CTA no meio, marquee de logos
embaixo). NAO mover o titulo para cima do video. Corrigir a hierarquia de peso.

1) HEADLINE COM MAIS PRESENCA
   - Aumentar o h1 de clamp(28px,3vw,48px) para clamp(32px,4vw,60px).
   - Garantir respiro entre o h1 e o subtitulo (gap ~12 a 16px).
   - Manter a copy exatamente: "O marketing que vive seu negocio." e o subtitulo
     "Construimos sistemas de marketing, baseados no estudo profundo de cada
     negocio." NAO reescrever.
   - Validar alinhamento vertical da faixa com o titulo maior (o flex-wrap atual
     ja acomoda; conferir no mobile).

2) CTA VIRA BOTAO SOLIDO
   - Trocar o link de texto "Vamos conversar" por um BOTAO solido branco com
     texto preto (#0E1011), cantos retos, padding ~14px 28px, peso 600.
     Hover: leve reducao de opacidade (0.85). Continua apontando para #contato.
   - Motivo: alto contraste sobre o preto, leitura imediata de "aqui se clica".
     O laranja #FF5A00 NAO deve ser usado neste botao (fica reservado a acento).

3) PILULAS DO ECOSSISTEMA VIRAM UM UNICO ACESSO
   - Remover as 4 pilulas brancas flutuantes soltas.
   - Criar UM unico elemento discreto "Ecossistema" (rotulo curto, com uma seta),
     posicionado de forma sobria sobre/junto ao video, com peso visual MENOR que
     o headline e o CTA. Contorno translucido / vidro fosco, nao fundo branco solido.
   - Ao passar o mouse (desktop) ou tocar (mobile), esse acesso REVELA os 4 produtos
     do ecossistema em um pequeno painel/popover:
       Ticker OS (Acesse o app), Ticker News (Newsletter),
       Ticker Creators (Portal de influencers), Ticker Research (Pesquisa de mercado).
   - Cada produto revelado deve ser um LINK REAL. Enquanto as URLs nao forem
     fornecidas, renderizar cada um com estado "em breve" (selo discreto, sem link,
     cursor default). NUNCA deixar botao morto sem acao nem sem selo.
   - Acessivel: o acesso "Ecossistema" e um botao com aria-expanded; o painel
     fecha por ESC e por clique fora; navegavel por teclado.

4) MANTER
   - O video de fundo (desktop e mobile), poster, preload="metadata", pausa em
     prefers-reduced-motion.
   - A faixa de logos de clientes (marquee) como esta.
   - O corte seco na base do Hero para a Premissa clara (NAO adicionar gradiente
     de emenda: a troca de cor e o marcador de capitulo).

Rode npm run dev. Nao commitar.
```

> Pendencia para implementar R1: URLs reais dos 4 produtos do ecossistema
> (Ticker OS, News, Creators, Research) ou confirmacao de "em breve" para cada um.

---

## R2 — Premissa (Alternativa B: fundo claro + data-viz conceitual "potencial")

```
Objetivo: refinar src/components/Premissa.tsx. Duas mudancas: (1) recolorir de
escuro para CLARO #F8F8F8, e (2) substituir o placeholder "[ Elemento Visual /
Grafico ]" por uma data-viz conceitual sofisticada. Manter a copy exatamente
como esta. Manter o layout grid-split 50/50 (texto a esquerda, viz a direita).

--------------------------------------------------------------------
PARTE 1: RECOLORIR PARA CLARO
--------------------------------------------------------------------
- Fundo da secao: var(--color-bg-muted) #F8F8F8. Texto padrao #0E1011.
- Rotulo: manter o numero "01" em var(--accent) #FF5A00, e "(O ponto de partida)"
  em serif italico cor rgba(14,16,17,0.5). Remover a variante --inverse.
- Statement (h2, Anantason Expanded): cor #0E1011. Manter o texto:
  "A maioria das empresas tenta crescer explorando apenas parte do seu potencial."
- Paragrafo de apoio (Open Sauce One): cor rgba(14,16,17,0.6). Manter o texto atual.
- LINHA DE FECHO em destaque ("Estruturar e ampliar a capacidade do negocio de
  gerar resultado."): no claro, criar a enfase assim:
    texto #0E1011, peso 600, e um filete vertical de 2px em var(--accent) a
    esquerda do paragrafo (padding-left ~20px, border-left 2px solid #FF5A00).
    NAO pintar a frase inteira de laranja (o acento nao e cor de area de texto).

--------------------------------------------------------------------
PARTE 2: DATA-VIZ CONCEITUAL (coluna direita, substitui o placeholder)
--------------------------------------------------------------------
CONCEITO: "potencial realizado hoje versus potencial latente". A tese do texto e
que a maioria das empresas explora so PARTE do potencial. A viz mostra uma curva
de crescimento onde apenas o primeiro trecho esta "preenchido" (o que ja se
explora) e o restante e "fantasma" (o potencial latente que a Ticker ajuda a
estruturar e ampliar). Deve parecer ANALITICA e medida, nunca decorativa.

GEOMETRIA (construir em SVG inline, vetorial, nao imagem):
- Um retangulo de area util (viewBox proporcional, ex.: 0 0 500 500), com respiro
  interno. Eixos implicitos: horizontal = tempo/maturidade, vertical = resultado.
- Uma CURVA ascendente (path Bezier suave) que sobe da base-esquerda ao topo-direita.
- Uma linha vertical fina marcando "hoje" a cerca de 35 por cento da largura.
- AREA sob a curva ATE a linha "hoje": preenchida com rgba(14,16,17,0.06) (solido
  discreto) = "o que ja se explora".
- AREA sob a curva DEPOIS da linha "hoje": apenas contorno tracejado
  rgba(14,16,17,0.15), sem preenchimento = "potencial latente".
- O TRECHO da curva antes de "hoje" em #0E1011 (solido). O TRECHO da curva depois
  de "hoje" em var(--accent) #FF5A00 = o vetor de crescimento que a Ticker desbloqueia.
- Micro-rotulos em serif italico, cor rgba(14,16,17,0.5), pequenos:
  "hoje" junto a linha vertical; "potencial" no fim da curva a direita.
  NAO usar numeros/porcentagens (mantem o carater conceitual e honesto, sem
  sugerir um dado especifico que nao existe).
- Base de referencia (eixo X) como filete 1px rgba(14,16,17,0.12).

ANIMACAO (no scroll-reveal, uma unica vez ao entrar na viewport):
- A curva se DESENHA da esquerda para a direita (stroke-dashoffset), ~0.8s ease-out.
- A area solida "sobe" (mask/clip crescendo) junto com o trecho solido da curva.
- O trecho laranja (potencial latente) e o rotulo "potencial" aparecem POR ULTIMO,
  com leve atraso, reforcando a ideia de "para onde ainda da pra crescer".
- Em prefers-reduced-motion: renderizar o estado FINAL estatico, sem desenho.

ESTILO E GUARDA-CHUVAS (para nao virar enfeite):
- Estetica editorial e limpa, muita area negativa, tracos finos. Referencia mental:
  grafico de relatorio premium, nao dashboard colorido nem infografico generico.
- Sem sombras pesadas, sem gradientes chamativos, sem 3D, sem icones decorativos.
- O laranja aparece APENAS no trecho de crescimento latente (um unico uso).
- A viz deve "ler" o conceito em 1 segundo mesmo sem os rotulos.

LAYOUT E RESPONSIVO:
- Desktop: grid-split 50/50, texto a esquerda ancorado no topo da coluna, viz
  centralizada na coluna direita, aspect-ratio 1/1, max-width ~500px.
- Mobile: empilhar (texto em cima, viz embaixo), viz com aspect-ratio ~4/3 ou 1/1,
  sem overflow horizontal, largura 100 por cento com respiro lateral de 24px.

ACESSIBILIDADE:
- O SVG recebe role="img" e aria-label:
  "Grafico conceitual: o potencial ja explorado hoje e menor que o potencial
  latente que a Ticker ajuda a estruturar e ampliar."
- Elementos puramente decorativos com aria-hidden.

--------------------------------------------------------------------
PARTE 3: COSTURA PARA A PROXIMA SECAO
--------------------------------------------------------------------
- Premissa (clara) e seguida por Marketing Instintivo (clara). Adicionar ao FINAL
  da Premissa (ou inicio de MI) a costura .section-seam (versao clara) com o
  .chapter-index "02" alinhado a direita, para marcar a virada de capitulo mesmo
  sem troca de cor. Nao adicionar gradiente.

Rode npm run dev. Valide desktop e mobile. Nao commitar.
```
