'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState, useEffect, useRef, useCallback } from 'react'

// ─── DADOS ───────────────────────────────────────────────────────────────────
const STOPS = [
  { num: '00', title: 'Qual e o negocio?', desc: 'Entendimento profundo da empresa e do mercado, posicionamento, JTBD e PUV.' },
  { num: '01', title: 'Quem e o cliente?', desc: 'O humano real por tras do perfil demografico: o que ele sente, o que evita, o que o faz agir e permanecer.' },
  { num: '02', title: 'Onde ele esta?', desc: 'Canais, contextos e territorios que ele habita e onde a marca tem mais chance de ser relevante.' },
  { num: '03', title: 'Como atrair?', desc: 'Estrategias de aquisicao alinhadas ao contexto, ao publico e ao CAC que o negocio comporta.' },
  { num: '04', title: 'Como converter?', desc: 'Como construir confianca antes da oferta, desenhando funis que geram valor antes de pedir a decisao.' },
  { num: '05', title: 'Como reter?', desc: 'Relacionamento, comunidade e experiencia que elevam LTV e NRR.' },
  { num: '06', title: 'Como monetizar?', desc: 'Como marketing e comercial trabalham juntos para gerar receita previsivel.' },
  { num: '07', title: 'Como gerenciar?', desc: 'Como o sistema e acompanhado, ajustado e evoluido com ritmo, dados e inteligencia continua.' },
]

const ANALISA = [
  'Mercado e concorrencia', 'Marca e identidade', 'Produto e oferta', 
  'Publico e comportamento', 'Funil e jornada de compra', 'Tom de voz e narrativa', 
  'Canais e presenca', 'Modelo de negocio e base financeira', 
  'Estrategia e priorizacao', 'Metas e KPIs'
]

// ─────────────────────────────────────────────────────────────────────────────

export default function OMapa() {
  const ref = useScrollReveal<HTMLDivElement>()
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [points, setPoints] = useState<{x: number, y: number}[]>([])
  const [pathLength, setPathLength] = useState(1000)
  const [reducedMotion, setReducedMotion] = useState(false)

  const pathRef = useRef<SVGPathElement>(null)

  // Paths sinuosos para Desktop e Mobile
  const viewBox = isMobile ? "0 0 300 900" : "0 0 1000 300"
  const pathDDesktop = "M 50,150 C 250,300 350,0 500,150 C 650,300 750,0 950,150"
  const pathDMobile = "M 150,50 C 300,250 0,350 150,450 C 300,550 0,650 150,850"
  const pathD = isMobile ? pathDMobile : pathDDesktop

  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 767px)')
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    setIsMobile(mqMobile.matches)
    setReducedMotion(mqMotion.matches)

    const handleMobile = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    const handleMotion = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    
    mqMobile.addEventListener('change', handleMobile)
    mqMotion.addEventListener('change', handleMotion)
    
    return () => {
      mqMobile.removeEventListener('change', handleMobile)
      mqMotion.removeEventListener('change', handleMotion)
    }
  }, [])

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      setPathLength(length)
      const step = length / (STOPS.length - 1)
      const newPts = []
      for(let i = 0; i < STOPS.length; i++) {
        const pt = pathRef.current.getPointAtLength(i * step)
        newPts.push({x: pt.x, y: pt.y})
      }
      setPoints(newPts)
    }
  }, [pathD])

  const handleKeyDown = useCallback((e: React.KeyboardEvent, i: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (i + 1) % STOPS.length
      setActiveIndex(next)
      document.getElementById(`map-stop-${next}`)?.focus()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = (i - 1 + STOPS.length) % STOPS.length
      setActiveIndex(prev)
      document.getElementById(`map-stop-${prev}`)?.focus()
    }
  }, [])

  const activeStop = STOPS[activeIndex]
  const activeLength = points.length > 0 ? (pathLength / (STOPS.length - 1)) * activeIndex : 0

  return (
    <section
      id="mapa"
      aria-label="O Mapa"
      className="section-massive"
      style={{
        background: 'var(--color-bg-muted)',
        color: 'var(--color-text-default)',
      }}
    >
      <div ref={ref} className="reveal container-content">

        {/* ─── CABECALHO ──────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'var(--space-6)', maxWidth: '800px' }}>
          <span className="section-label">(O Mapa)</span>
          <h2 className="section-statement">
            Tudo comeca no Mapa.
          </h2>
          <p className="section-support" style={{ marginTop: '16px', marginBottom: '24px' }}>
            O Mapa e o documento que mostra como a Ticker le e traduz o seu negocio em estrategias.
          </p>
          <p style={{
            fontFamily: "'Anantason Expanded Italic', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 2vw, 22px)',
            lineHeight: 1.6,
            color: 'var(--accent)',
          }}>
            Tudo parte de uma pergunta, qual e o negocio? A partir dela, sete perguntas revelam
            onde estao as oportunidades, as lacunas e o que precisa ser construido.
          </p>
        </div>

        {/* ─── ROTA INTERATIVA ────────────────────────────────────────── */}
        <div className="map-interactive-area">
          
          {/* Painel de detalhe crossfade */}
          <div className="map-panel" aria-live="polite">
            {STOPS.map((stop, i) => (
              <div
                key={stop.num}
                className={`map-panel-content ${i === activeIndex ? 'map-panel-content--active' : ''}`}
                aria-hidden={i !== activeIndex}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{
                    fontFamily: "'Anantason Expanded', sans-serif",
                    fontSize: '24px',
                    color: 'var(--accent)',
                  }}>
                    {stop.num}
                  </span>
                  <h3 style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontWeight: 700,
                    fontSize: '24px',
                    margin: 0,
                  }}>
                    {stop.title}
                  </h3>
                </div>
                <p style={{
                  fontFamily: "'Open Sauce One', sans-serif",
                  fontSize: '18px',
                  lineHeight: 1.6,
                  color: 'rgba(14,16,17,0.7)',
                  margin: 0,
                }}>
                  {stop.desc}
                </p>
              </div>
            ))}
          </div>

          {/* SVG Canvas da Rota */}
          <div className="map-svg-container">
            <svg
              viewBox={viewBox}
              preserveAspectRatio="xMidYMid meet"
              style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
            >
              {/* Caminho Base (Cinza) - desenha com classe .reveal */}
              <path
                d={pathD}
                fill="none"
                stroke="rgba(255, 90, 0, 0.25)"
                strokeWidth={isMobile ? "5" : "3"}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="map-path-base"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: reducedMotion ? 0 : 'var(--path-offset, 1000)',
                }}
              />
              {/* Path invisivel para calculos de geometria */}
              <path ref={pathRef} d={pathD} fill="none" stroke="none" />

              {/* Caminho Ativo (Accent) */}
              <path
                d={pathD}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={isMobile ? "5" : "3"}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: pathLength - activeLength,
                  transition: reducedMotion ? 'none' : 'stroke-dashoffset 0.5s ease',
                }}
              />

              {/* Paradas (Pontos) */}
              {points.map((pt, i) => {
                const isActive = i === activeIndex;
                const isPast = i < activeIndex;
                const color = (isActive || isPast) ? 'var(--accent)' : 'rgba(14, 16, 17, 0.45)';
                const size = isActive ? (isMobile ? 16 : 10) : (isMobile ? 12 : 6);
                
                return (
                  <g key={i} transform={`translate(${pt.x}, ${pt.y})`} style={{ transition: 'all 0.3s ease' }}>
                    <circle
                      r={isMobile ? 32 : size + 10}
                      fill="transparent"
                      cursor="pointer"
                      onClick={() => setActiveIndex(i)}
                    />
                    <circle
                      r={size}
                      fill={isActive ? 'var(--ds-white)' : color}
                      stroke={isActive ? 'var(--accent)' : 'none'}
                      strokeWidth={isActive ? 3 : 0}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    {isActive && (
                      <circle
                        r={size + 8}
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="1"
                        opacity="0.4"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Botoes HTML invisiveis sobre os pontos para Acessibilidade */}
            {points.map((pt, i) => (
              <button
                key={`btn-${i}`}
                id={`map-stop-${i}`}
                aria-label={`Parada ${STOPS[i].num}: ${STOPS[i].title}`}
                className="map-stop-btn"
                style={{
                  left: `${(pt.x / (isMobile ? 300 : 1000)) * 100}%`,
                  top: `${(pt.y / (isMobile ? 900 : 300)) * 100}%`,
                }}
                onClick={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                tabIndex={i === activeIndex ? 0 : -1}
              />
            ))}
          </div>

        </div>

        {/* ─── O QUE O MAPA ANALISA (Grade) + Imagem Fisica ───────────── */}
        <div className="map-bottom-section">
          
          {/* Grade Escaneavel */}
          <div className="map-analysis-grid">
            <h4 style={{
              fontFamily: "'Anantason Expanded', sans-serif",
              fontSize: '20px',
              fontWeight: 500,
              gridColumn: '1 / -1',
              marginBottom: '16px'
            }}>
              O que o Mapa analisa
            </h4>
            {ANALISA.map((item, i) => (
              <div key={i} className="map-analysis-item">
                <span style={{ color: 'var(--accent)', marginRight: '8px' }}>+</span>
                {item}
              </div>
            ))}
          </div>

          {/* Imagem Fisica do Mapa + CTA */}
          <div className="map-physical-card">
            {/* TODO: Asset real da foto do mapa impresso */}
            <div className="map-physical-image">
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>[ Imagem do Mapa Fisico ]</span>
            </div>
            <a href="#contato" className="cta-primary map-cta">
              Quero meu Mapa
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
