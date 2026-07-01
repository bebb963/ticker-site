'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ServiceItem {
  id: string
  name: string
  description: {
    happens: string
    problem: string
    value: string
  }
  subItems: React.ReactNode[]
  modes?: string
  icon: React.ReactNode
}

const SERVICES: ServiceItem[] = [
  {
    id: '(01)',
    name: 'Fase 1 — Estruturação',
    description: {
      happens: 'Auditamos processos, configuramos o CRM, desenhamos a arquitetura de dados e estruturamos os canais. Arrumamos a casa.',
      problem: 'Evita o "balde furado" — investir em marketing e tráfego antes da empresa estar pronta comercialmente para reter e converter.',
      value: 'Uma base sólida. O cliente recebe clareza do cenário atual e uma infraestrutura pronta para escalar sem desperdício de caixa.',
    },
    subItems: [
      <span key="1">Diagnóstico Estratégico <a href="/score" style={{ color: 'var(--accent)', textDecoration: 'none', marginLeft: '8px', border: '1px solid var(--accent)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em' }}>Fazer Ticker Score Grátis</a></span>,
      'Estrutura Digital',
      'Estrutura Comercial',
      'Estrutura de Conteúdo',
      'Estrutura de Dados',
    ],
    modes: 'Disponível como: Consultoria · BPO Gerencial · BPO Completo',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="16" height="4" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="14" width="12" height="4" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <rect x="12" y="8" width="8" height="4" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: '(02)',
    name: 'Fase 2 — Operação',
    description: {
      happens: 'Colocamos a máquina para rodar com gestão ativa de mídia, criação de conteúdo, execução de campanhas e otimização do funil de vendas.',
      problem: 'A falta de consistência, o desalinhamento entre marketing e vendas, e a dificuldade de manter um ritmo operacional forte.',
      value: 'Tração real. O cliente ganha uma operação constante que atrai o público certo e gera oportunidades de negócio com previsibilidade.',
    },
    subItems: [
      'Comunicação e marca',
      'Gestão dos canais',
      'Inteligência de mercado',
      'Melhoria contínua',
    ],
    modes: 'Disponível como: Consultoria · BPO Gerencial · BPO Completo',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: '(03)',
    name: 'Fase 3 — Growth Intelligence',
    description: {
      happens: 'Usamos os dados históricos da operação para encontrar alavancas ocultas. Expansão de canais, otimização de LTV e CAC, e forecasting de receita.',
      problem: 'O platô de crescimento. A dificuldade de saber onde alocar verba com segurança para crescer de forma sustentável.',
      value: 'Escala com segurança. Decisões embasadas, maior margem e um modelo de crescimento previsível e validado.',
    },
    subItems: [
      'Forecasting',
      'Otimização',
      'Expansão de canais',
      'Inteligência de mercado aplicada',
    ],
    modes: 'Disponível como: Consultoria · BPO Gerencial · BPO Completo',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26L13 18L19 22L26 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="6" r="3" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: '(04)',
    name: 'Consultoria / Mapa de Execução',
    description: {
      happens: 'Desenhamos o plano estratégico, entregando o mapa completo para que a sua própria equipe execute.',
      problem: 'Necessidade de direcionamento e validação estratégica sem a necessidade de terceirizar a execução.',
      value: 'Clareza, roteiro prático e acompanhamento estratégico focado em resultados.',
    },
    subItems: [
      'Branding e Comunicação',
      'Composição Digital',
      'Programa de Vendas e CRM',
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
          <span className="section-label section-label--inverse">(Serviços)</span>

          <h2 className="section-statement" style={{ color: 'var(--color-text-inverse)' }}>
            Primeiro estruturamos, depois operamos, só então aceleramos.
          </h2>

          <p className="section-support section-support--inverse">
            Um sistema de crescimento que evolui em três fases sequenciais. Cada fase constrói a base para a próxima.
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
                  {/* Novo Layout de Descrição Detalhada */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    maxWidth: '800px',
                    marginBottom: '40px',
                  }}>
                    {/* O que acontece */}
                    <div>
                      <span style={{
                        display: 'block',
                        fontFamily: "'Anantason Expanded Italic', serif",
                        fontStyle: 'italic',
                        fontSize: '14px',
                        color: 'var(--accent)',
                        marginBottom: '8px',
                      }}>
                        O que acontece
                      </span>
                      <p style={{
                        fontFamily: "'Open Sauce One', sans-serif",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.7)',
                        margin: 0,
                      }}>
                        {service.description.happens}
                      </p>
                    </div>

                    {/* O problema que resolve */}
                    <div>
                      <span style={{
                        display: 'block',
                        fontFamily: "'Anantason Expanded Italic', serif",
                        fontStyle: 'italic',
                        fontSize: '14px',
                        color: 'var(--accent)',
                        marginBottom: '8px',
                      }}>
                        O problema que resolve
                      </span>
                      <p style={{
                        fontFamily: "'Open Sauce One', sans-serif",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.7)',
                        margin: 0,
                      }}>
                        {service.description.problem}
                      </p>
                    </div>

                    {/* O valor gerado */}
                    <div>
                      <span style={{
                        display: 'block',
                        fontFamily: "'Anantason Expanded Italic', serif",
                        fontStyle: 'italic',
                        fontSize: '14px',
                        color: 'var(--accent)',
                        marginBottom: '8px',
                      }}>
                        O que você recebe
                      </span>
                      <p style={{
                        fontFamily: "'Open Sauce One', sans-serif",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.9)',
                        margin: 0,
                      }}>
                        {service.description.value}
                      </p>
                    </div>
                  </div>

                  {/* Sub-itens */}
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{
                      display: 'block',
                      fontFamily: "'Anantason Expanded Italic', serif",
                      fontStyle: 'italic',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.4)',
                      marginBottom: '16px',
                    }}>
                      Entregáveis & Frentes:
                    </span>
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

                  {/* Modos de contratação — linha sutil */}
                  {service.modes && (
                    <>
                      <div style={{
                        width: '100%',
                        height: '1px',
                        background: 'rgba(255,255,255,0.06)',
                        margin: '24px 0 16px',
                      }} />
                      <span style={{
                        fontFamily: "'Open Sauce One', sans-serif",
                        fontWeight: 400,
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.35)',
                        letterSpacing: '0.3px',
                      }}>
                        {service.modes}
                      </span>
                    </>
                  )}
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
