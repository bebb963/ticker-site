'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState } from 'react'
import { Settings, Network, ArrowUpRight, LayoutGrid } from 'lucide-react'

const FORMAS = [
  {
    id: 'bpo-completo',
    icon: <Settings size={28} strokeWidth={1.5} />,
    title: 'BPO Completo',
    content: 'Terceirização integral da sua operação de marketing. Assumimos a execução de ponta a ponta, desde a estratégia até a operação diária de mídias, conteúdo, design e dados, funcionando como seu departamento interno.'
  },
  {
    id: 'bpo-gerencial',
    icon: <Network size={28} strokeWidth={1.5} />,
    title: 'BPO Gerencial',
    content: 'Você mantém sua equipe interna ou agências parceiras, e nós assumimos a gestão estratégica e direcional. Validamos planos, acompanhamos métricas e garantimos que a operação siga o Mapa tático.'
  },
  {
    id: 'consultoria',
    icon: <ArrowUpRight size={28} strokeWidth={1.5} />,
    title: 'Consultoria',
    content: 'Intervenções pontuais para resolver gargalos específicos. Orientamos seus líderes de marketing ou fundadores na tomada de decisão, sem assumir a execução ou a gestão diária.'
  },
  {
    id: 'modulos',
    icon: <LayoutGrid size={28} strokeWidth={1.5} />,
    title: 'Módulos Complementares',
    content: 'Serviços avulsos para plugar na sua operação: implementação de CRM, automação avançada de dados, auditorias de SEO técnico, ou estruturação de dashboards de BI.'
  }
]

const MICRO_SERVICES = [
  'Posicionamento',
  'Branding',
  'Tráfego Pago',
  'Conteúdo',
  'CRM',
  'Automação',
  'Sites',
  'SEO',
  'Dados & Performance',
  'Inteligência de Mercado',
  'Funil de Vendas',
  'Analytics',
]

export default function FormasDeTrabalho() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => {
    setExpanded(prev => prev === id ? null : id)
  }

  return (
    <section
      id="formas-de-trabalho"
      className="section-massive"
      style={{
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-inverse)',
        paddingBottom: '0',
      }}
    >
      <div ref={ref} className="reveal container-content">

        {/* ─── TOPO ──────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'var(--space-6)', maxWidth: '900px' }}>
          <h2 className="section-statement">
            Três formas de trabalhar juntos.
          </h2>
          <p className="section-support section-support--inverse" style={{ marginTop: '16px' }}>
            Da direcao a operacao completa. Sempre a partir do Mapa.
          </p>
        </div>

        {/* ─── ACCORDION ─────────────────────────────────────────────────── */}
        <div className="ft-accordion-list" style={{ marginBottom: '80px' }}>
          {FORMAS.map((forma) => {
            const isExpanded = expanded === forma.id
            return (
              <div 
                key={forma.id} 
                className="ft-accordion-item"
                aria-expanded={isExpanded}
              >
                <button 
                  className="ft-accordion-header"
                  onClick={() => toggle(forma.id)}
                  aria-controls={`content-${forma.id}`}
                >
                  <div className="ft-accordion-left">
                    <span className="ft-accordion-icon" aria-hidden="true">
                      {forma.icon}
                    </span>
                    <h3 className="ft-accordion-title">
                      {forma.title}
                    </h3>
                  </div>
                  <div className="ft-accordion-toggle">
                    +
                  </div>
                </button>
                <div 
                  id={`content-${forma.id}`}
                  className="ft-accordion-content"
                  aria-hidden={!isExpanded}
                >
                  <div className="ft-accordion-inner">
                    <p>{forma.content}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* ─── FAIXA MARQUEE — Micro Serviços ──────────────── */}
      <div
        aria-label="Micro serviços"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          overflow: 'hidden',
          padding: '28px 0',
          background: 'var(--color-bg-primary)',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            width: 'max-content',
            gap: '0',
          }}
        >
          {[0, 1, 2].map((copy) => (
            <div
              key={copy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0',
                flexShrink: 0,
              }}
              aria-hidden={copy > 0}
            >
              {MICRO_SERVICES.map((item, i) => (
                <span
                  key={`${copy}-${i}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Open Sauce One', sans-serif",
                      fontWeight: 600,
                      fontSize: '18px',
                      color: 'rgba(255,255,255,0.7)',
                      whiteSpace: 'nowrap',
                      letterSpacing: '1px',
                    }}
                  >
                    {item}
                  </span>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.3)',
                      flexShrink: 0,
                      margin: '0 24px',
                    }}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
