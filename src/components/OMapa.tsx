'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const WAYPOINTS = [
  {
    step: '01',
    title: 'Quem?',
    subtitle: 'Mapeamento de Persona',
    desc: 'Entendemos quem é o cliente em relação ao produto e o que realmente o move a agir.',
    coords: 'LAT: HUMANO // LONG: INSTINTO',
    pin: { x: '22%', y: '25%' }
  },
  {
    step: '02',
    title: 'Onde?',
    subtitle: 'Presença e Contexto',
    desc: 'Identificamos canais, territórios e contextos de influência de alta relevância.',
    coords: 'LAT: TERRITÓRIO // LONG: INFLUÊNCIA',
    pin: { x: '46%', y: '18%' }
  },
  {
    step: '03',
    title: 'Como atrair?',
    subtitle: 'Estratégia de Aquisição',
    desc: 'Definimos estratégias de aquisição alinhadas ao contexto e ao CAC ideal do negócio.',
    coords: 'LAT: AQUISIÇÃO // LONG: CAC_IDEAL',
    pin: { x: '72%', y: '28%' }
  },
  {
    step: '04',
    title: 'Como converter?',
    subtitle: 'Desenho de Funil',
    desc: 'Construímos confiança antes da oferta, desenhando funis que entregam valor real.',
    coords: 'LAT: CONFIANÇA // LONG: CONVERSÃO',
    pin: { x: '82%', y: '55%' }
  },
  {
    step: '05',
    title: 'Como reter?',
    subtitle: 'Relacionamento e LTV',
    desc: 'Estruturamos CRM, comunidade e experiências que maximizam o LTV e o NRR.',
    coords: 'LAT: RETENÇÃO // LONG: LTV_NRR',
    pin: { x: '62%', y: '78%' }
  },
  {
    step: '06',
    title: 'Como monetizar?',
    subtitle: 'Previsibilidade Comercial',
    desc: 'Unimos marketing e vendas para gerar previsibilidade e eficiência de receita.',
    coords: 'LAT: SLA_RECEITA // LONG: COMERCIAL',
    pin: { x: '35%', y: '70%' }
  },
  {
    step: '07',
    title: 'Como gerenciar?',
    subtitle: 'Ritmo e Governança',
    desc: 'Priorizamos ritmo, governança e evolução contínua através de sprints ágeis.',
    coords: 'LAT: GOVERNANÇA // LONG: AGILIDADE',
    pin: { x: '25%', y: '48%' }
  }
]

const PIN_COORDS = [
  { x: 110, y: 125 },
  { x: 230, y: 90 },
  { x: 360, y: 140 },
  { x: 410, y: 275 },
  { x: 310, y: 390 },
  { x: 175, y: 350 },
  { x: 125, y: 240 }
]

const TreasureMapSVG = ({ activeIndex }: { activeIndex: number }) => (
  <svg
    className="map-vector"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '100%',
      height: 'auto',
      display: 'block',
      position: 'relative',
    }}
  >
    {/* Rosa dos Ventos no Canto Superior Direito */}
    <g transform="translate(420, 80)" className="compass-rose">
      <circle r="30" stroke="rgba(14,16,17,0.06)" strokeWidth="1" fill="none" />
      <circle r="4" stroke="rgba(14,16,17,0.2)" strokeWidth="1" fill="none" />
      <line x1="0" y1="-36" x2="0" y2="36" stroke="rgba(14,16,17,0.1)" strokeWidth="1" />
      <line x1="-36" y1="0" x2="36" y2="0" stroke="rgba(14,16,17,0.1)" strokeWidth="1" />
      
      {/* Grupo de ponteiros rotativo */}
      <g className="compass-rose-pointer">
        <polygon points="0,-28 4,-4 -4,-4" fill="var(--accent)" />
        <polygon points="0,28 4,4 -4,4" fill="rgba(14,16,17,0.7)" />
        <polygon points="-28,0 -4,4 -4,-4" fill="rgba(14,16,17,0.7)" />
        <polygon points="28,0 4,4 4,-4" fill="rgba(14,16,17,0.7)" />
      </g>
      
      <text x="0" y="-40" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="rgba(14,16,17,0.4)">N</text>
    </g>

    {/* Linhas de Grade de Coordenadas Táticas */}
    <line x1="50" y1="0" x2="50" y2="500" stroke="rgba(14,16,17,0.02)" strokeWidth="1" strokeDasharray="4 8" />
    <line x1="150" y1="0" x2="150" y2="500" stroke="rgba(14,16,17,0.02)" strokeWidth="1" strokeDasharray="4 8" />
    <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(14,16,17,0.02)" strokeWidth="1" strokeDasharray="4 8" />
    <line x1="350" y1="0" x2="350" y2="500" stroke="rgba(14,16,17,0.02)" strokeWidth="1" strokeDasharray="4 8" />
    <line x1="450" y1="0" x2="450" y2="500" stroke="rgba(14,16,17,0.02)" strokeWidth="1" strokeDasharray="4 8" />
    
    <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(14,16,17,0.02)" strokeWidth="1" strokeDasharray="4 8" />
    <line x1="0" y1="200" x2="500" y2="200" stroke="rgba(14,16,17,0.02)" strokeWidth="1" strokeDasharray="4 8" />
    <line x1="0" y1="300" x2="500" y2="300" stroke="rgba(14,16,17,0.02)" strokeWidth="1" strokeDasharray="4 8" />
    <line x1="0" y1="400" x2="500" y2="400" stroke="rgba(14,16,17,0.02)" strokeWidth="1" strokeDasharray="4 8" />

    {/* Moldura de Blueprint (Cantoneiras) */}
    <path d="M 20,40 L 20,20 L 40,20" stroke="rgba(14,16,17,0.12)" strokeWidth="1" fill="none" />
    <path d="M 480,40 L 480,20 L 460,20" stroke="rgba(14,16,17,0.12)" strokeWidth="1" fill="none" />
    <path d="M 20,460 L 20,480 L 40,480" stroke="rgba(14,16,17,0.12)" strokeWidth="1" fill="none" />
    <path d="M 480,460 L 480,480 L 460,480" stroke="rgba(14,16,17,0.12)" strokeWidth="1" fill="none" />

    {/* ── CONTORNO DO MAPA DA ILHA (Treasure Map Coastline) ── */}
    {/* Ondas / Linhas de maré externas */}
    <path 
      className="map-coastline-outer-1"
      d="M 115,155 C 135,115 175,85 225,75 C 255,65 295,45 335,65 C 375,85 405,125 415,155 C 425,185 445,205 435,245 C 425,285 455,315 435,355 C 415,395 375,415 335,425 C 295,435 245,445 195,425 C 145,405 105,415 85,375 C 65,335 85,305 75,265 C 65,225 55,185 95,165 Z" 
      stroke="rgba(14,16,17,0.05)" 
      strokeWidth="1.2" 
      strokeDasharray="5 5"
    />
    <path 
      className="map-coastline-outer-2"
      d="M 110,150 C 130,110 170,80 220,70 C 250,60 290,40 330,60 C 370,80 400,120 410,150 C 420,180 440,200 430,240 C 420,280 450,310 430,350 C 410,390 370,410 330,420 C 290,430 240,440 190,420 C 140,400 100,410 80,370 C 60,330 80,300 70,260 C 60,220 50,180 90,160 Z" 
      stroke="rgba(255,90,0,0.03)" 
      strokeWidth="1" 
    />
    
    {/* Contorno principal da Ilha */}
    <path 
      className="map-coastline-main"
      d="M 120,160 C 140,120 180,90 230,80 C 260,70 300,50 340,70 C 380,90 410,130 420,160 C 430,190 450,210 440,250 C 430,290 460,320 440,360 C 420,400 380,420 340,430 C 300,440 250,450 200,430 C 150,410 110,420 90,380 C 70,340 90,310 80,270 C 70,230 60,190 100,170 Z" 
      stroke="rgba(14,16,17,0.18)" 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Ilhotas Secundárias (Arquipélago) */}
    <path 
      d="M 70,80 C 85,70 100,80 95,95 C 90,110 75,105 70,90 C 65,85 65,82 70,80 Z" 
      stroke="rgba(14,16,17,0.15)" 
      strokeWidth="1.2" 
      fill="none" 
    />
    <path 
      d="M 390,410 C 405,405 415,415 410,425 C 405,435 395,430 390,420 Z" 
      stroke="rgba(14,16,17,0.15)" 
      strokeWidth="1.2" 
      fill="none" 
    />

    {/* Curvas de Nível Internas */}
    <path 
      d="M 140,180 C 160,150 190,120 235,110 C 255,105 285,90 315,100 C 345,110 375,140 385,170 C 395,200 415,220 405,250 C 395,280 415,300 405,330 C 395,360 365,380 335,390 C 305,400 265,410 225,390 C 185,370 145,380 125,350 C 105,320 125,295 115,265 C 105,235 95,205 125,185 Z" 
      stroke="rgba(14,16,17,0.08)" 
      strokeWidth="1" 
      strokeDasharray="4 4"
    />
    <path 
      d="M 160,200 C 180,180 200,150 240,140 C 255,135 275,120 300,130 C 325,140 345,170 355,190 C 365,210 380,225 375,250 C 370,275 380,290 375,310 C 370,330 350,350 325,360 C 300,370 275,380 240,360 C 205,340 175,350 160,325 C 145,300 160,280 155,260 C 150,240 140,220 160,205 Z" 
      stroke="rgba(14,16,17,0.04)" 
      strokeWidth="0.8" 
    />

    {/* ── TRILHA DE EXPEDIÇÃO (Dashed Journey Path) ── */}
    <path
      className="map-expedition-path"
      d="M 110,125 C 160,90 190,80 230,90 C 280,100 320,110 360,140 C 400,180 410,220 410,275 C 410,330 360,360 310,390 C 250,420 190,380 175,350 C 150,310 110,280 125,240"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="6 8"
    />

    {/* Crosshair de Coordenadas Ativas */}
    {activeIndex >= 0 && activeIndex < PIN_COORDS.length && (
      <g className="map-crosshair">
        {/* Linha Horizontal */}
        <line
          x1="0"
          y1={PIN_COORDS[activeIndex].y}
          x2="500"
          y2={PIN_COORDS[activeIndex].y}
          stroke="rgba(255, 90, 0, 0.15)"
          strokeWidth="0.8"
          strokeDasharray="2 4"
        />
        {/* Linha Vertical */}
        <line
          x1={PIN_COORDS[activeIndex].x}
          y1="0"
          x2={PIN_COORDS[activeIndex].x}
          y2="500"
          stroke="rgba(255, 90, 0, 0.15)"
          strokeWidth="0.8"
          strokeDasharray="2 4"
        />
        {/* Sonar Ring */}
        <circle
          cx={PIN_COORDS[activeIndex].x}
          cy={PIN_COORDS[activeIndex].y}
          r="20"
          stroke="var(--accent)"
          strokeWidth="1.2"
          strokeDasharray="2 2"
          style={{
            transformOrigin: `${PIN_COORDS[activeIndex].x}px ${PIN_COORDS[activeIndex].y}px`,
            animation: 'sonar-pulse 2s infinite ease-out'
          }}
        />
      </g>
    )}
  </svg>
)

export default function OMapa() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refContent = useScrollReveal<HTMLDivElement>()
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section 
      id="mapa" 
      aria-label="O Mapa e as Sete Perguntas" 
      className="section-massive"
      style={{ 
        background: '#F8F8F8', 
        color: '#0E1011',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '120px',
        backgroundImage: 'linear-gradient(rgba(14, 16, 17, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 16, 17, 0.015) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* ── Estilos CSS Locais ── */}
      <style>{`
        /* Padrões Globais da Seção */
        .live-indicator {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          position: relative;
          display: inline-block;
        }
        .live-indicator::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: var(--accent);
          border-radius: 50%;
          animation: pin-glow-pulse 1.8s infinite ease-out;
        }

        /* Estrutura de Grid de 3 Colunas no Desktop */
        .map-3col-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr 1fr;
          gap: 48px;
          align-items: center;
        }
        
        .map-left-col {
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        .map-center-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
        }

        .map-right-col {
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        /* Recipiente do Vetor de Mapa (sem fundo/bordas) */
        .map-graphic-container {
          position: relative;
          width: 100%;
          border: none;
          background: transparent;
          padding: 0;
          box-shadow: none;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        
        /* Card de Detalhes na Coluna da Direita */
        .map-details-card {
          width: 100%;
          min-height: 350px;
          background: #FFFFFF;
          border: 1px solid rgba(14, 16, 17, 0.08);
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 15px 35px -10px rgba(14,16,17,0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-content-fade {
          animation: card-fade-in 0.4s ease-out forwards;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }
        
        @keyframes card-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card-num {
          font-family: 'DM Serif Text', serif;
          font-style: italic;
          font-size: 16px;
          color: var(--accent);
        }

        .card-coords {
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.5px;
          color: rgba(14, 16, 17, 0.4);
        }

        .card-title {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 20px;
          color: #0E1011;
          margin: 6px 0;
          letter-spacing: -0.3px;
        }

        .card-subtitle {
          font-family: 'DM Serif Text', serif;
          font-style: italic;
          font-size: 14px;
          color: rgba(14, 16, 17, 0.5);
          display: block;
          margin-bottom: 12px;
        }

        .card-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(14, 16, 17, 0.6);
          margin: 0;
          flex-grow: 1;
        }

        /* Pinos de Coordenadas de GPS sobre o Mapa */
        .map-gps-pin {
          position: absolute;
          width: 38px;
          height: 38px;
          transform: translate(-50%, -50%);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 10;
        }
        .map-gps-pin:hover {
          transform: translate(-50%, -50%) scale(1.25);
        }
        
        .map-gps-ring {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1.5px solid rgba(14, 16, 17, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        .map-gps-pin:hover .map-gps-ring {
          border-color: var(--accent);
          box-shadow: 0 0 12px rgba(255, 90, 0, 0.2);
        }
        .map-gps-pin.active .map-gps-ring {
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 15px rgba(255, 90, 0, 0.4);
        }

        .plus-sign {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: rgba(14, 16, 17, 0.6);
          line-height: 1;
          transition: all 0.3s ease;
        }
        .map-gps-pin:hover .plus-sign {
          color: var(--accent);
        }
        .map-gps-pin.active .plus-sign {
          color: #FFFFFF;
          transform: rotate(45deg);
        }

        .map-gps-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid var(--accent);
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }
        .map-gps-pin.active .map-gps-pulse {
          animation: pin-glow-pulse 2.2s infinite ease-out;
        }

        /* Marcador Visual do número do Passo sob o Pino */
        .map-gps-label {
          position: absolute;
          bottom: -18px;
          font-family: monospace;
          font-size: 10px;
          font-weight: bold;
          color: rgba(14, 16, 17, 0.5);
          transition: color 0.3s ease;
          pointer-events: none;
        }
        .map-gps-pin.active .map-gps-label,
        .map-gps-pin:hover .map-gps-label {
          color: var(--accent);
        }

        @keyframes subtle-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0px rgba(255, 90, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(255, 90, 0, 0.2);
          }
        }
        .map-gps-pin:not(.active) .map-gps-ring {
          animation: subtle-pulse 3s infinite ease-in-out;
        }

        /* ── Animações de Traçado de SVG e Pulsação de Luz ── */
        @keyframes pin-glow-pulse {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        @keyframes draw-path-flow {
          to {
            stroke-dashoffset: -40;
          }
        }
        @keyframes wave-pulse-1 {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.8; }
          50% { transform: scale(1.02) translate(-2px, 1px); opacity: 0.4; }
        }
        @keyframes wave-pulse-2 {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.3; }
          50% { transform: scale(0.98) translate(1px, -2px); opacity: 0.7; }
        }
        @keyframes rotate-compass {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .map-expedition-path {
          animation: draw-path-flow 4s linear infinite;
        }
        .map-coastline-outer-1 {
          transform-origin: center;
          animation: wave-pulse-1 12s ease-in-out infinite;
        }
        .map-coastline-outer-2 {
          transform-origin: center;
          animation: wave-pulse-2 16s ease-in-out infinite;
        }
        .compass-rose-pointer {
          transform-origin: 0px 0px;
          animation: rotate-compass 60s linear infinite;
        }

        @media (max-width: 1024px) {
          .map-3col-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .map-details-card {
            min-height: auto;
          }
        }
      `}</style>

      {/* ─── GRID DE LAYOUT DE 3 COLUNAS ─── */}
      <div ref={refContent} className="reveal container-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="map-3col-grid">
          
          {/* Coluna 1 (Esquerda): Cabeçalho & Descrição */}
          <div className="map-left-col">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="font-meta" style={{ fontSize: '18px' }}>(O Mapa)</span>
              <span className="font-meta" style={{ fontSize: '18px', color: 'var(--accent)' }}>(04)</span>
            </div>

            <h2 style={{
              fontFamily: "'Anton SC', sans-serif",
              fontSize: 'clamp(40px, 4.5vw, 64px)',
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-1.5px',
              color: '#0E1011',
              margin: '16px 0 24px'
            }}>
              O Mapa
            </h2>

            <span className="font-meta" style={{ fontSize: '20px', display: 'block', marginBottom: '24px' }}>
              (As 7 perguntas)
            </span>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'rgba(14,16,17,0.7)',
              marginBottom: '32px'
            }}>
              As sete perguntas do Marketing Instintivo compõem a base do Mapa, o diagnóstico que a Ticker entrega antes de qualquer execução. Nele, a empresa visualiza oportunidades, gargalos e os próximos passos.
            </p>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'rgba(14,16,17,0.5)',
              margin: 0
            }}>
              Ao final, o cliente tem em mãos o sistema de marketing desenhado para a realidade dele.
            </p>
          </div>

          {/* Coluna 2 (Centro): Mapa Interativo */}
          <div className="map-center-col">
            {/* Microcopy Instrução de Interabilidade */}
            <div style={{
              marginBottom: '24px'
            }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--accent)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 90, 0, 0.04)',
                padding: '6px 14px',
                borderRadius: '20px',
                boxShadow: '0 2px 8px rgba(255,90,0,0.03)'
              }}>
                <span className="live-indicator" />
                Explore a rota clicando nos pontos do mapa
              </p>
            </div>

            <div className="map-graphic-container">
              <TreasureMapSVG activeIndex={activeIndex} />

              {/* Pinos GPS absolutos sobrepostos ao SVG */}
              {WAYPOINTS.map((wp, i) => (
                <div
                  key={i}
                  className={`map-gps-pin ${activeIndex === i ? 'active' : ''}`}
                  style={{
                    left: wp.pin.x,
                    top: wp.pin.y
                  }}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="map-gps-ring">
                    <span className="plus-sign">+</span>
                  </div>
                  <div className="map-gps-pulse" />
                  <span className="map-gps-label">{wp.step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 3 (Direita): Detalhes da Etapa Ativa */}
          <div className="map-right-col">
            <div className="map-details-card">
              <div key={activeIndex} className="card-content-fade">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="card-num">({WAYPOINTS[activeIndex].step})</span>
                    <span className="card-coords">{WAYPOINTS[activeIndex].coords}</span>
                  </div>
                  <h3 className="card-title">{WAYPOINTS[activeIndex].title}</h3>
                  <span className="card-subtitle">({WAYPOINTS[activeIndex].subtitle})</span>
                  <p className="card-desc">{WAYPOINTS[activeIndex].desc}</p>
                </div>
                
                {/* Navegação Sequencial e Indicador de Progresso */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                  <div style={{ width: '100%', height: '1px', background: 'rgba(14, 16, 17, 0.08)', margin: '4px 0' }} />
                  
                  {/* Linha de Progresso Contínuo */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                    {WAYPOINTS.map((_, idx) => (
                      <span
                        key={idx}
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: activeIndex === idx ? 'var(--accent)' : 'rgba(14, 16, 17, 0.15)',
                          transition: 'all 0.3s ease',
                          transform: activeIndex === idx ? 'scale(1.2)' : 'scale(1)'
                        }}
                      />
                    ))}
                  </div>

                  {/* Botões de Ação */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      onClick={() => {
                        if (activeIndex > 0) setActiveIndex(activeIndex - 1)
                      }}
                      disabled={activeIndex === 0}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        color: activeIndex === 0 ? 'rgba(14, 16, 17, 0.25)' : 'rgba(14, 16, 17, 0.6)',
                        cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'color 0.2s ease',
                        padding: '4px 0'
                      }}
                      onMouseEnter={(e) => {
                        if (activeIndex !== 0) e.currentTarget.style.color = 'var(--accent)'
                      }}
                      onMouseLeave={(e) => {
                        if (activeIndex !== 0) e.currentTarget.style.color = 'rgba(14, 16, 17, 0.6)'
                      }}
                    >
                      ← Voltar
                    </button>

                    <button
                      onClick={() => {
                        if (activeIndex < WAYPOINTS.length - 1) {
                          setActiveIndex(activeIndex + 1)
                        } else {
                          setActiveIndex(0) // restart
                        }
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        color: 'var(--accent)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 0',
                        transition: 'opacity 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.7'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1'
                      }}
                    >
                      {activeIndex === WAYPOINTS.length - 1 ? 'Reiniciar Rota ↺' : 'Próxima Etapa →'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <a href="#contato" className="cta-primary" style={{
          color: '#0E1011',
          fontSize: '24px',
        }}>
          Quero meu Mapa
        </a>
      </div>
    </section>
  )
}
