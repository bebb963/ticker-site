'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ServiceItem {
  id: string
  name: string
  description: string
  subItems: string[]
  icon: React.ReactNode
}

const SERVICES: ServiceItem[] = [
  {
    id: '(01)',
    name: 'BPO Completo',
    description: 'A operacao de marketing inteira conduzida pela Ticker.',
    subItems: [
      'Operação completa de mídia, conteúdo e campanhas',
      'Gestão integrada de performance',
      'Execução alinhada ao plano e metas de negócio',
      'Análises, previsões e melhorias contínuas',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: '(02)',
    name: 'BPO Gerencial',
    description: 'Gestao e metodo para o seu time interno evoluir com ritmo.',
    subItems: [
      'Levantamento de iniciativas primordiais',
      'Coordenação do time interno',
      'Governança entre marketing, comercial e diretoria',
      'Acompanhamento contínuo',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M10.5 14.5L21.5 9.5M10.5 17.5L21.5 22.5" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: '(03)',
    name: 'Consultoria',
    description: 'Direcao e clareza para quem quer executar por conta propria.',
    subItems: [
      'Mapa de Direção de Marketing',
      'Apresentação executiva e direcionamento',
      '2 mentorias para aplicação',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26L26 6M26 6H12M26 6V20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    id: '(04)',
    name: 'Módulos Complementares',
    description: 'Frentes pontuais: branding, sites, CRM, campanhas.',
    subItems: [
      'Branding e Comunicação Visual',
      'Sites, e-commerces, SEO',
      'Vendas e CRM',
      'Campanhas e Ativações Sazonais',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="8" height="8" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="6" width="8" height="8" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <rect x="6" y="18" width="8" height="8" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <rect x="18" y="18" width="8" height="8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
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

export default function Services() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refList   = useScrollReveal<HTMLDivElement>()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(prev => prev === i ? null : i)
  }

  return (
    <>
     <section id="servicos" aria-label="Serviços" className="section-massive" style={{ background: 'var(--color-bg-primary)', paddingBottom: '0' }}>
      <div className="container-content">
        {/* ─── CABEÇALHO ─── */}
        <div ref={refHeader} className="reveal" style={{ paddingBottom: 'var(--space-4)' }}>
          <span className="section-label section-label--inverse">(Servicos)</span>

          <h2 className="section-statement" style={{ color: 'var(--color-text-inverse)' }}>
            Tres formas de trabalhar juntos.
          </h2>

          <p className="section-support section-support--inverse">
            Da direcao a operacao completa. Sempre a partir do Mapa.
          </p>
        </div>

        {/* ─── ACCORDION ─── */}
        <div ref={refList} style={{ padding: '0 0 96px' }} className="stagger reveal">
        {SERVICES.map((service, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={service.id}
              style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: index === SERVICES.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              {/* Toggle row */}
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  padding: '40px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{
                    color: 'rgba(255,255,255,0.25)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {service.icon}
                  </div>
                  <h3 className="services-item-name" style={{ color: '#FFFFFF', margin: 0 }}>
                    {service.name}
                  </h3>
                </div>

                {/* Ícone + / − */}
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginLeft: '24px',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    borderColor: isOpen ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <line x1="8" y1="2" x2="8" y2="14" stroke={isOpen ? 'var(--accent)' : 'white'} strokeWidth="1.5" style={{ transition: 'stroke 0.3s ease' }} />
                    <line x1="2" y1="8" x2="14" y2="8" stroke={isOpen ? 'var(--accent)' : 'white'} strokeWidth="1.5" style={{ transition: 'stroke 0.3s ease' }} />
                  </svg>
                </span>
              </button>

              {/* Collapsible content */}
              <div
                className="accordion-body"
                style={{
                  maxHeight: isOpen ? '600px' : '0',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.35s ease',
                }}
              >
                <div style={{ paddingBottom: '48px' }}>
                  {/* Descrição curta (1 linha) */}
                  <p style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.5)',
                    maxWidth: '768px',
                    margin: '0 0 32px',
                  }}>
                    {service.description}
                  </p>

                  {/* Sub-itens */}
                  <div className="services-subitems">
                    {service.subItems.map((item, i) => (
                      <span key={i} style={{
                        fontFamily: "'Open Sauce One', sans-serif",
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: 1.5,
                        color: 'rgba(255,255,255,0.85)',
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>
      </section>

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

    </>
  )
}
