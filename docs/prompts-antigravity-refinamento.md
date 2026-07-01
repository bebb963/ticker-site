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

## R2 — Premissa (Alternativa B: fundo claro + data-viz de vias/estradas que se ampliam)

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
CONCEITO (vale para as duas variantes): "estruturar e ampliar as vias de gerar
receita". A tese do texto e que a maioria das empresas cresce por POUCAS vias
estreitas (explora so parte do potencial). Ao estruturar, essas vias se
MULTIPLICAM e se ALARGAM, virando varias frentes amplas de receita. A viz e a
metafora de estradas/caminhos que se abrem. Narrativa amarrada na copy:
  poucas vias estreitas = "explora apenas parte do potencial";
  vias se abrindo e validando = "estruturamos e validamos os canais";
  rede ampla de avenidas = "ampliar a capacidade de gerar resultado".

IMPORTANTE (coerencia com a seca O Mapa): a seca "O Mapa" ja usa uma ROTA UNICA
sinuosa com 8 paradas numeradas. A Premissa NAO pode parecer a mesma coisa. Aqui
a linguagem e MULTIPLICIDADE e LARGURA (muitas frentes se abrindo), NUNCA uma
rota unica com pinos numerados. E uma viz nao interativa: so anima no reveal.

>>> IMPLEMENTAR AS DUAS VARIANTES (A e B) PARA COMPARAR NA PRATICA <<<
Implemente as duas e deixe uma constante no topo do componente para alternar:
  const VIZ_VARIANT: 'A' | 'B' = 'A'
Renderize a variante A ou B conforme a constante. Assim da para trocar uma linha,
rodar, comparar as duas ao vivo e decidir. Comece com 'A', valide, depois 'B'.

PRINCIPIOS COMPARTILHADOS (as duas variantes obedecem):
- Construir em SVG inline, vetorial, nao imagem. viewBox proporcional (ex.: 0 0 500 500).
- Estetica editorial e limpa, MUITA area negativa. Referencia mental: mapa/diagrama
  premium de relatorio, nao infografico generico nem dashboard colorido.
- Sem sombras pesadas, sem gradientes chamativos, sem 3D, sem icones decorativos.
- O laranja #FF5A00 aparece SO nas frentes/vias NOVAS (as recem-abertas), um uso
  contido. As vias "de hoje" ficam em #0E1011 solido; vias intermediarias em tons
  de rgba(14,16,17,0.35 a 0.6).
- A viz deve "ler" o conceito (poucas vias -> muitas vias amplas) em 1 segundo,
  mesmo sem os rotulos.

ANIMACAO (comum, no scroll-reveal, uma unica vez ao entrar na viewport):
- O movimento e SEMPRE de abertura/expansao da esquerda para a direita, ~0.8 a 1s
  ease-out. As vias "de hoje" aparecem primeiro; as novas frentes (laranja) surgem
  POR ULTIMO, com leve atraso, reforcando "ao estruturar, novas frentes se abrem".
- Em prefers-reduced-motion: renderizar o estado FINAL estatico, sem animacao.

LAYOUT E RESPONSIVO (comum):
- Desktop: grid-split 50/50, texto a esquerda ancorado no topo da coluna, viz
  centralizada na coluna direita, aspect-ratio 1/1, max-width ~500px.
- Mobile: empilhar (texto em cima, viz embaixo), viz com aspect-ratio ~4/3 ou 1/1,
  sem overflow horizontal, largura 100 por cento com respiro lateral de 24px.

ACESSIBILIDADE (comum):
- O SVG recebe role="img" e aria-label:
  "Grafico conceitual: as poucas vias de receita de hoje se multiplicam e se
  alargam em varias frentes quando a Ticker estrutura o negocio."
- Elementos puramente decorativos com aria-hidden.

====================================================================
VARIANTE A: VIAS QUE SE RAMIFICAM EM LEQUE
====================================================================
GEOMETRIA:
- Uma via unica entra pela ESQUERDA (o negocio hoje) e se BIFURCA progressivamente
  em varias avenidas que se abrem em leque para a DIREITA (as frentes de receita).
- Sugestao: 1 via vira 2, que viram 4 ou 5 pontas ao chegar na borda direita.
- A via inicial e as primeiras ramificacoes em #0E1011 (o que ja se explora); as
  ramificacoes mais novas/externas em var(--accent) #FF5A00 (frentes desbloqueadas).

RESOLVER O CONTRA (nao pode parecer fluxograma/organograma):
- Usar SOMENTE curvas Bezier organicas. NUNCA angulos retos nem conectores em
  cotovelo (o que grita "fluxograma").
- As vias tem LARGURA de estrada (stroke-width ~6 a 14px, com linecap arredondado),
  nunca linhas de 1px.
- As bifurcacoes sao forquilhas em Y suaves, com juncao arredondada. SEM nos, SEM
  caixas, SEM bolinhas nos pontos de divisao, SEM rotulos dentro de caixas.
- Fluxo horizontal esquerda->direita sobre um plano (paisagem). NUNCA arvore de
  cima para baixo.
- Assimetria proposital: curvaturas, angulos e comprimentos das ramificacoes
  ligeiramente diferentes entre si, para parecer estrada natural, nao diagrama
  mecanico e simetrico.
- Detalhe que "diz estrada": uma linha central tracejada MUITO sutil (marcacao de
  pista, dash pequeno) correndo por dentro das avenidas principais. Isto le como
  rodovia na hora e mata o ar de fluxograma. Cor da marcacao: rgba(255,255,255,0.5)
  sobre a via preta; rgba(255,255,255,0.7) sobre a via laranja.
- Opcional (se ficar elegante): leve perspectiva, vias afinando de leve rumo a um
  ponto de fuga a direita, sensacao de paisagem/horizonte.
- Micro-rotulos serif italico rgba(14,16,17,0.5), so 2: "hoje" junto a entrada
  unica a esquerda; "novas frentes" junto ao leque a direita. Sem numeros.

ANIMACAO A:
- A via unica se desenha da esquerda (stroke-dashoffset). Ao chegar nas
  bifurcacoes, cada ramo se estende em sequencia. As pontas laranja (novas frentes)
  se desenham por ultimo.

====================================================================
VARIANTE B: FAIXAS QUE SE ALARGAM E SE MULTIPLICAM
====================================================================
GEOMETRIA:
- Poucas faixas estreitas a ESQUERDA (ex.: 2 faixas) que, ao avancar para a
  DIREITA, se ALARGAM (formato trapezoidal, abrindo) E aumentam em NUMERO
  (ex.: chegam a 5 faixas). Captura os dois sentidos de "ampliar": mais frentes
  (numero) e mais capacidade (largura/vazao).
- As faixas "de hoje" (as 2 iniciais que atravessam) em #0E1011 e tons de cinza;
  as 2 ou 3 faixas NOVAS que surgem no meio do caminho em var(--accent) #FF5A00.

RESOLVER O CONTRA (nao pode parecer "so listras"):
- As faixas precisam VISIVELMENTE alargar da esquerda para a direita (trapezios que
  abrem), com direcao/fluxo claro. Nao sao retangulos paralelos estaticos.
- GAPS claros e visiveis entre as faixas, para lerem como avenidas SEPARADAS, nunca
  como um bloco preenchido continuo.
- Variar levemente largura e tom de cada faixa (nao listras identicas nem espacadas
  de forma mecanica). Assimetria sutil.
- ANCORAR o significado com 2 micro-rotulos serif italico rgba(14,16,17,0.5):
  "hoje" no inicio estreito (esquerda) e "frentes de receita" no fim largo (direita).
  Estes rotulos sao obrigatorios na variante B (sem eles, viram listras sem sentido).
- Dar sensacao de movimento: leve afinamento/ponta ou seta sutil ao fim de cada
  faixa, sugerindo que a via segue para a direita.
- Opcional: uma linha central tracejada sutil por dentro de cada faixa (mesma
  marcacao de pista da variante A) para reforcar a leitura de "via", nao "barra".

ANIMACAO B:
- As 2 faixas de hoje aparecem primeiro, ja atravessando. Conforme o reveal avanca,
  o conjunto "abre" (alarga) e as faixas novas (laranja) surgem no meio, por ultimo.

--------------------------------------------------------------------
PARTE 3: COSTURA PARA A PROXIMA SECAO
--------------------------------------------------------------------
- Premissa (clara) e seguida por Marketing Instintivo (clara). Adicionar ao FINAL
  da Premissa (ou inicio de MI) a costura .section-seam (versao clara) com o
  .chapter-index "02" alinhado a direita, para marcar a virada de capitulo mesmo
  sem troca de cor. Nao adicionar gradiente.

Rode npm run dev. Valide desktop e mobile. Nao commitar.
```
