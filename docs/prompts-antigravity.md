# Prompts de Implementação — Antigravity (Site Ticker V2)

> Um prompt por bloco, na ordem recomendada de execução.
> Fonte da verdade: `docs/plano-site-v2.md`, `base-de-conhecimento/` (KB 2.0) e
> `base-de-conhecimento/kajo-design-system.md`.
> Cada prompt é autossuficiente para colar no Antigravity. Rode um, teste local,
> valide, e só então vá para o próximo. Não commitar até validar.

---

## CONTEXTO GLOBAL (vale para todos os prompts abaixo)

```
Projeto: site da Ticker, Next.js 14 (App Router), TypeScript, código em src/.
Fontes da verdade no repositório: docs/plano-site-v2.md (plano completo),
base-de-conhecimento/ (KB 2.0) e base-de-conhecimento/kajo-design-system.md.

Regras que valem para TODA tarefa:
- Nunca usar o caractere de travessao. Use ponto, virgula, dois-pontos ou parenteses.
- Proibido contraste paralelo ("X nao e isso, e aquilo", "mais do que X, e Y").
- Leitor e sempre o sujeito ("voce"). Frases curtas. Sem jargao. Nao explicar demais.
- Reusar o design system: cores base #0E1011 e #F8F8F8, Anton SC (display),
  Inter 600/400, rotulos em serif italico "(nome)", escala de espaco em 32px.
- Acento #FF5A00 SO em pontos-chave (estado ativo, progresso, numero de secao
  principal, linha do CTA primario). Preto e branco dominam; texturas e tons
  terrosos leves sobre imagens. Nunca o acento como cor de area.
- Principio de layout: titulo ancorado no TOPO da coluna, texto de apoio e CTA
  ancorados na BASE, com respiro no meio.
- Acessibilidade e performance: um unico h1 (Hero), headings em ordem, foco
  visivel, prefers-reduced-motion respeitado em video/animacoes/marquees,
  next/image sem layout shift.
- Ao terminar: rodar npm run dev, validar desktop e mobile, e NAO fazer commit.
  Listar arquivos alterados e aguardar validacao.
```

---

## P0 — Fundação (tokens, acento, helpers globais)

```
Objetivo: preparar globals.css com os tokens do design system e o acento, alem
de utilitarios de CTA e de layout usados pelas proximas etapas.

Em src/app/globals.css:
- Garanta as CSS variables: --color-bg-primary:#0E1011; --color-bg-muted:#F8F8F8;
  --color-bg-white:#FFFFFF; --color-text-default:#0E1011;
  --color-text-muted:rgba(14,16,17,0.6); --color-text-inverse:#FFFFFF;
  --accent:#FF5A00; e a escala --space-1..7 (16,32,48,64,96,128,160).
- Classes de CTA:
  .cta-primary { font Inter 600; text-decoration:none; display:inline-block;
     padding-bottom:4px; border-bottom:2px solid var(--accent);
     transition:opacity .2s ease } .cta-primary:hover{opacity:.7}
  .cta-secondary { font Inter 600; border-bottom:2px solid currentColor;
     opacity:.6; transition:opacity .2s } .cta-secondary:hover{opacity:1}
- Utilitario de layout "coluna com apoio na base" (flex column, justify-between,
  min-height controlada) para o principio de layout titulo-topo / apoio-base.
- Confirme import das fontes (Anton SC, Inter, DM Serif Text) no layout.

Nao altere componentes ainda. Rode o build. Nao commitar.
```

---

## P1 — Ordem da home, limpeza, Header e Footer

```
Objetivo: montar o esqueleto da nova home, limpar placeholders e atualizar
navegacao e rodape.

1) src/app/page.tsx — nova ordem exata:
   Header, Hero, Premissa, MarketingInstintivo, ComoOlhamos, OMapa, ComoDecidimos,
   TresFases, PorOndeComecar, DiagnosticoEstrutura, Manifesto, Contato, Footer.
   - Comente a renderizacao de <Partners /> e <Testimonials /> (nao apague).
   - Crie stubs vazios (secoes simples com o rotulo e o statement) para os
     componentes que ainda nao existem, para o build passar: Premissa,
     ComoOlhamos, ComoDecidimos, TresFases, PorOndeComecar, DiagnosticoEstrutura.
     Serao preenchidos nos proximos prompts.

2) Header (src/components/Header.tsx): NAV_LINKS com 4 itens:
   Marketing Instintivo (#marketing-instintivo), O Mapa (#mapa),
   As tres fases (#fases), Diagnostico (#diagnostico).
   Adicione item "Trabalhe conosco" que abre um modal (stub por enquanto).
   CTA "Vamos conversar" (#contato) com estilo .cta-primary.

3) Footer (src/components/Footer.tsx):
   - Wordmark gigante "TICKER" em Anton SC.
   - Letreiro em movimento (ticker tape) com o texto "O marketing que vive seu
     negocio", com ritmo/estilo diferente do marquee de micro-servicos.
   - Linha discreta: "A Ticker nao e para quem busca o mais barato ou resultado
     sem processo."
   - Manter apenas links de secoes existentes; contatos; copyright; voltar ao topo.
   - Remover redes sociais genericas (so com URL real).

Rode npm run dev. Nao commitar.
```

---

## P2 — Hero

```
Objetivo: aplicar a copy final e corrigir o Hero (src/components/Hero.tsx).

- H1 (uma unica vez, sem duplicacao): "O marketing que vive seu negocio."
- Subheadline: "Construimos sistemas de marketing, baseados no estudo profundo de
  cada negocio."
- CTA primario .cta-primary "Vamos conversar" (#contato).
  CTA secundario .cta-secondary "Como funciona" (#marketing-instintivo).
- Remover o texto duplicado do overlay do video (manter so um H1 na segunda tela).
- Video: adicionar poster (/public/images/hero-poster.jpg, // TODO asset real),
  preload="metadata", e leve gradiente escuro na base para legibilidade.
  Pausar e mostrar poster em prefers-reduced-motion.
- Manter a faixa de logos de clientes existente.

Rode npm run dev. Nao commitar.
```

---

## P3 — A Premissa

```
Objetivo: criar src/components/Premissa.tsx (fundo escuro), id="premissa".
Aplicar o principio de layout (statement no topo, apoio e fecho com respiro).

- Rotulo: "(O ponto de partida)" com numero de secao em var(--accent).
- Statement (Anton SC grande): "A maioria das empresas tenta crescer explorando
  apenas parte do seu potencial."
- Apoio (Inter): "Antes de investir mais, identificamos os caminhos que podem
  gerar resultado para o seu negocio. Estruturamos esses canais, validamos sua
  capacidade de gerar demanda e so aceleramos aquilo que realmente funciona."
- Fecho (destaque): "Estruturar e ampliar a capacidade do negocio de gerar
  resultado."

Reveal no scroll. Rode npm run dev. Nao commitar.
```

---

## P4 — Marketing Instintivo (quatro humanos interativos)

```
Objetivo: reconstruir src/components/MarketingInstintivo.tsx (fundo claro),
id="marketing-instintivo". Remover as 7 perguntas daqui (vao para o Mapa).

- Rotulo: "(Marketing Instintivo)"
- Statement (Anton SC): "Todo negocio e, antes de tudo, um sistema de humanos."
- Tese (Inter): "O Marketing Instintivo e o estudo do que move cada um deles, num
  nivel mais profundo do que conseguem verbalizar."
- Componente interativo dos quatro humanos (padrao lista + troca de imagem):
  uma lista vertical (Fundador, Time, Produto, Consumidor). O item ativo em preto
  (ou var(--accent)), os demais em cinza. Ao passar o mouse ou tocar, a IMAGEM
  central troca para a foto daquele humano e aparece a frase:
    Fundador: "uma visao, um incomodo, uma conviccao sobre o que o mundo precisa."
    Time: "carrega a cultura viva da empresa todos os dias."
    Produto: "nascido da intencao de resolver, transformar ou criar valor."
    Consumidor: "movido por desejos que muitas vezes precedem a razao."
  Slots de imagem com fallback neutro (// TODO fotos reais). Um ativo por vez,
  transicao suave, acessivel por teclado, fallback estatico em reduced-motion.
- Fecho como maior momento tipografico da secao (Anton SC grande):
  "Marketing, no fundo, e o estudo da evolucao humana."

Rode npm run dev. Nao commitar.
```

---

## P5 — Como olhamos (tiles verticais com play no hover)

```
Objetivo: criar src/components/ComoOlhamos.tsx (fundo escuro), id="como-olhamos".

- Rotulo: "(Como olhamos)"
- Statement (Anton SC): "Escolhemos trabalhar de perto."
- Apoio (Inter): "Entramos na operacao, observamos os bastidores, conversamos com
  as pessoas e sentimos o negocio na pele. E assim que unimos a visao do fundador,
  a cultura do time, a proposta do produto e o desejo de quem consome."
- Midia: fileira de 4 tiles verticais (formato stories) com video curto e mudo
  que da PLAY no hover (no mobile, play ao entrar na viewport). Conteudo:
  bastidores reais, imersao de um Mapa, campo, time em operacao e a fachada do
  escritorio. Cada tile com poster de fallback (// TODO videos reais),
  playsInline, e sem autoplay em prefers-reduced-motion.
- Nao gerar scroll horizontal; colapsar bem no mobile.

Rode npm run dev. Nao commitar.
```

---

## P6 — O Mapa (rota interativa)

```
Objetivo: reconstruir src/components/OMapa.tsx (fundo claro), id="mapa", como a
rota interativa das perguntas. Seguir a especificacao ja detalhada (rota SVG
que se desenha no scroll, 8 paradas, painel dinamico).

Cabecalho:
- Rotulo: "(O Mapa)"
- Statement (Anton SC): "Tudo comeca no Mapa."
- Definicao (Inter): "O Mapa e o documento que mostra como a Ticker le e traduz o
  seu negocio em estrategias."
- Ponte: "Tudo parte de uma pergunta, qual e o negocio? A partir dela, sete
  perguntas revelam onde estao as oportunidades, as lacunas e o que precisa ser
  construido."

Rota interativa:
- Um path SVG sinuoso (curvas de Bezier) conectando 8 paradas. A linha se desenha
  no scroll (IntersectionObserver + stroke-dashoffset). Paradas distribuidas por
  comprimento de arco (getPointAtLength). Cada parada e um botao focavel; hover,
  foco ou toque seleciona; so uma ativa; o trecho ate a ativa e o ponto ativo
  ficam em var(--accent). Rota horizontal/diagonal no desktop, vertical no mobile.
- Paradas (rotulo : resposta no painel):
  (00) Qual e o negocio? : "Entendimento profundo da empresa e do mercado,
       posicionamento, JTBD e PUV."
  01 Quem e o cliente? : "O humano real por tras do perfil demografico: o que ele
       sente, o que evita, o que o faz agir e permanecer."
  02 Onde ele esta? : "Canais, contextos e territorios que ele habita e onde a
       marca tem mais chance de ser relevante."
  03 Como atrair? : "Estrategias de aquisicao alinhadas ao contexto, ao publico e
       ao CAC que o negocio comporta."
  04 Como converter? : "Como construir confianca antes da oferta, desenhando funis
       que geram valor antes de pedir a decisao."
  05 Como reter? : "Relacionamento, comunidade e experiencia que elevam LTV e NRR."
  06 Como monetizar? : "Como marketing e comercial trabalham juntos para gerar
       receita previsivel."
  07 Como gerenciar? : "Como o sistema e acompanhado, ajustado e evoluido com
       ritmo, dados e inteligencia continua."
- Painel de detalhe com aria-live; transicao (crossfade) ao trocar de parada.
  Fallback em lista simples; reduced-motion mostra a rota estatica.

Camada compacta "O que o Mapa analisa" (grade escaneavel): Mercado e concorrencia;
Marca e identidade; Produto e oferta; Publico e comportamento; Funil e jornada de
compra; Tom de voz e narrativa; Canais e presenca; Modelo de negocio e base
financeira; Estrategia e priorizacao; Metas e KPIs.

Imagem do Mapa fisico ao lado (// TODO asset real). CTA .cta-primary "Quero meu
Mapa" (#contato). Rode npm run dev. Nao commitar.
```

---

## P7 — Como decidimos (Framework de Validação)

```
Objetivo: criar src/components/ComoDecidimos.tsx (fundo escuro), id="framework".

- Rotulo: "(Como decidimos)"
- Statement (Anton SC): "Toda decisao nasce de evidencia."
- Apoio (Inter): "O Framework de Validacao cruza observacao de campo, entrevistas,
  dados publicos, comportamento digital e experimentos. Quando ao menos tres
  fontes apontam para o mesmo lugar, a hipotese vira decisao."
- Visual: diagrama da Piramide de Evidencia com 5 niveis, de baixo para cima:
  1 Observacao de campo, 2 Entrevistas, 3 Dados publicos, 4 Dados comportamentais,
  5 Experimentos. Construir em SVG/CSS (nao imagem). Destacar a regra das tres
  fontes em var(--accent).
- Nao incluir os 5 eixos de restricao aqui (eles vao na Fase 3).

Rode npm run dev. Nao commitar.
```

---

## P8 — As três fases (+ conduzir × executar + Ticker OS)

```
Objetivo: reconstruir a secao de "produto" como linha do tempo de 3 fases,
substituindo o accordion de pacotes/BPO. Componente src/components/TresFases.tsx
(fundo escuro), id="fases".

- Rotulo: "(As tres fases)"
- Statement (Anton SC): "Um sistema de crescimento em tres fases."
- Apoio: "Infraestrutura, operacao e growth. Cada fase constroi a base da proxima."
- Linha do tempo (stepper) horizontal no desktop, vertical no mobile, com o
  numero da fase em var(--accent) e detalhe expansivel. Leve por padrao:
  cada fase mostra Promessa (1 linha) + o que a empresa ganha; o "o que fazemos"
  aparece ao expandir.
  Fase 1 Infraestrutura: Promessa "preparar a empresa para crescer". Ganho "base
    solida: posicionamento, presenca, processo, ferramentas e dados". Expansao:
    Diagnostico Estrategico (O Mapa), Estrutura Digital, Estrutura Comercial,
    Estrutura de Conteudo, Estrutura de Dados.
  Fase 2 Operacao: Promessa "transformar a infraestrutura em um sistema
    operacional que gera movimento e historico". Ganho "canais ativados e
    otimizados, e um ativo de dados que se acumula". Expansao: Comunicacao
    (design, midia, copy), Gestao dos canais, Inteligencia de mercado, Melhoria
    continua.
  Fase 3 Growth Intelligence: Promessa "usar os dados historicos para construir
    previsibilidade". Ganho "previsibilidade real, sustentada por evidencia".
    Expansao: Forecasting, Otimizacao pelos 5 eixos de restricao (Oportunidade,
    Presenca, Captacao, Conversao, Capacidade), Expansao de canais, Inteligencia
    de mercado aplicada.
- Bloco "conduzir x executar" abaixo da linha do tempo: "Em qualquer fase, a
  Ticker pode conduzir o seu time interno ou executar de ponta a ponta." Nunca
  usar a palavra BPO.
- Bloco Ticker OS (transparencia): "Voce nao precisa gerenciar o marketing.
  Precisa entender o que esta acontecendo e confiar no sistema. No Ticker OS,
  voce acompanha cada etapa, aprova entregas e ve os resultados em tempo real."
  Midia: screencapture ou video curto da tela do OS (// TODO asset real).
- CTA .cta-primary "Vamos conversar" (#contato).

Rode npm run dev. Nao commitar.
```

---

## P9 — Por onde começar (portas de entrada)

```
Objetivo: criar src/components/PorOndeComecar.tsx (fundo claro), id="comecar".

- Rotulo: "(Por onde comecar)"
- Statement (Anton SC): "Voce nao precisa comecar por tudo."
- Apoio: "Cada negocio parte de um ponto diferente. O Mapa, o diagnostico de
  estrutura ou o branding podem ser o primeiro passo. E, se o momento pedir, voce
  entra direto na fase que faz mais sentido. Todos levam ao mesmo sistema."
- Tres portas (uma linha cada), em escada de compromisso:
  Diagnostico de estrutura: "Uma leitura da base atual do negocio: canais,
    processos e dados, e onde estao as lacunas." (link para #diagnostico)
  O Mapa: "Clareza e direcao antes de agir: o diagnostico que revela por onde o
    seu negocio cresce." (link para #mapa)
  Branding: "A construcao da percepcao: quem a empresa e, traduzido em algo que o
    mercado reconhece."

Rode npm run dev. Nao commitar.
```

---

## P10 — Diagnóstico de estrutura (ferramenta interativa)

```
Objetivo: criar src/components/DiagnosticoEstrutura.tsx (fundo escuro),
id="diagnostico". Formulario nativo multi-etapas que devolve um retrato de
maturidade, amarrado aos 5 eixos de restricao.

- Rotulo: "(Diagnostico de estrutura)"
- Statement (Anton SC): "Onde esta o seu negocio hoje?"
- Apoio: "Um retrato rapido da maturidade da sua estrutura, dos seus canais, do
  comercial e do marketing. Em poucos minutos, voce enxerga onde estao as lacunas."
- Ferramenta: perguntas curtas agrupadas nos 5 eixos (Oportunidade, Presenca,
  Captacao, Conversao, Capacidade). Barra de progresso em var(--accent). Ao final,
  mostra um retrato de maturidade por eixo (leitura de onde esta o gargalo) e
  captura o lead (nome, empresa, contato) com a mesma logica de /api/lead.
- CTA do tool: "Fazer o diagnostico". No resultado, ponte para o contato:
  "Vamos conversar sobre o que encontramos" (#contato).
- Papel de meio de funil: CTA secundario, nunca colado ao formulario de contato.

Rode npm run dev. Nao commitar.
```

---

## P11 — Manifesto

```
Objetivo: reescrever src/components/Manifesto.tsx (fundo escuro), id="manifesto",
com 5 frases reveladas no scroll, muito respiro:
1. "Existe algo admiravel em quem decide construir um negocio."
2. "Exige coragem, disposicao e uma boa dose de teimosia."
3. "A Ticker nasceu da admiracao por quem escolhe esse caminho."
4. "Existimos para que boas empresas sejam vistas, ouvidas e encontradas por quem
   mais precisa delas."
5. "E para aperfeicoar as decisoes que moldam empresas e mercados."

Rode npm run dev. Nao commitar.
```

---

## P12 — Contato (copy, autoridade, fachada, avaliações do Google)

```
Objetivo: ajustar src/components/Contato.tsx SEM alterar a logica do formulario
(3 campos, captura via /api/lead, redirect WhatsApp ja implementados).

- Rotulo: "(Contato)"
- Statement (Anton SC): "Vamos conversar sobre o seu negocio."
- Apoio: "Conte o que voce quer construir. A Ticker comeca entendendo."
- Linha de autoridade (discreta, perto dos contatos): "Mais de dez anos de
  experiencia em marketing, em projetos de complexidades diferentes."
- Contatos: e-mail bruno@tickermkt.com.br e telefone 19 97428-2887.
- Foto da fachada do escritorio + endereco (// TODO asset e endereco reais).
- Logo ANTES da secao de contato, uma faixa discreta de avaliacoes do Google:
  2 ou 3 citacoes curtas + nota + selo Google (// TODO textos reais). Sem virar
  secao de depoimentos.
- Manter os 3 campos e o botao "Falar no WhatsApp".

Rode npm run dev. Nao commitar.
```

---

## P13 — Modal "Trabalhe conosco"

```
Objetivo: implementar o modal aberto pelo item de menu "Trabalhe conosco".
- Formulario de cadastro (nome, e-mail, area de interesse) + upload de curriculo
  (aceitar PDF/DOC). Enviar para um endpoint configuravel (variavel de ambiente)
  ou, na ausencia, um mailto com os dados; o arquivo via endpoint quando houver.
- Acessivel (foco preso no modal, fechar por ESC e overlay), na identidade visual
  do site. Nao interferir no fluxo comercial da home.

Rode npm run dev. Nao commitar.
```

---

## P14 — SEO técnico e base de proteção

```
Objetivo: fundamentos de go-live e primeira camada de protecao contra copia.
- src/app/robots.ts (permitir indexacao; bloquear bots de scraping/IA conhecidos)
  e src/app/sitemap.ts (home).
- Open Graph: /public/og-image.jpg (1200x630, // TODO arte final) referenciado no
  layout; favicon.
- src/app/not-found.tsx simples na identidade, com CTA .cta-primary "Voltar ao
  inicio".
- Desabilitar arrastar/baixar nas imagens proprietarias (fotos, Mapa, telas do OS)
  e o menu de contexto sobre elas (deterrente casual, nao defesa).
- Documentar (em docs/go-live.md) as protecoes de infra que NAO sao codigo:
  colocar o site atras de Cloudflare (Bot Fight Mode, rate limiting, hotlink
  protection), registrar TICKER(R), publicar Termos de Uso e aviso de copyright.

Rode npm run dev e next build. Nao commitar.
```
