# Checklist de Go-Live e Infraestrutura (Ticker)

Alem das implementacoes contidas no codigo-fonte (como `robots.ts`, `sitemap.ts` e a classe `.protected-asset`), a protecao do site da Ticker exige as seguintes configuracoes de infraestrutura e juridicas:

## 1. Cloudflare (Seguranca e Performance)
O dominio deve ser apontado para a Cloudflare para que a camada gratuita ja absorva impactos e dificulte scrapers:
- **Bot Fight Mode**: Ativar para desafiar robos maliciosos ou scrapers de IA conhecidos.
- **Rate Limiting (WAF)**: Configurar regras para prevenir flood de requests no formulario de lead (`/api/lead`).
- **Hotlink Protection**: Ativar no painel de 'Scrape Shield' para impedir que outras paginas embedem suas imagens consumindo sua banda.
- **Minification & Cache**: Ativar minificacao de HTML/CSS/JS e regras agresivas de cache para os assets estaticos de Next.js (`/_next/static/*`).

## 2. Protecao Legal e Copyright
Medidas fundamentais e nao tecnicas para garantir o "deterrente legal":
- **Termos de Uso e Politica de Privacidade**: Publicar no rodape as diretrizes de uso, coleta de leads e cookies.
- **Aviso de Copyright (Roda-pe)**: Manter a mensagem atualizada no Footer (ex: *© Ticker Marketing Estruturado. Todos os direitos reservados.*)
- **Registro de Marca (INPI)**: Assegurar o registro do nome TICKER e da logotipia para uso de *TM* ou *®*.

## 3. Protecao de Copia Casual (Front-end)
Foi criada a classe utilitaria `.protected-asset` no `globals.css`. Ela deve ser adicionada a todas as imagens proprietarias introduzidas no futuro (fotos do time, modelo impresso d'O Mapa, telas do Ticker OS) para impedir o "arrastar" casual e o clique-direito nativo:

```tsx
<img 
  src="/images/o-mapa-real.jpg" 
  alt="O Mapa Ticker" 
  className="protected-asset"
  onContextMenu={(e) => e.preventDefault()}
/>
```
*(Lembrando que isso afasta a copia casual, nao impedindo downloads via DevTools).*

## 4. Otimizacao de Imagens e Metadados (Vercel/Next.js)
- Confirmar se o `/public/og-image.jpg` (Open Graph 1200x630) esta com o layout final antes de ir para producao, pois redes sociais como LinkedIn e WhatsApp fazem cache dessa imagem prolongado.
- Garantir a versao final do Favicon no mesmo diretorio.
