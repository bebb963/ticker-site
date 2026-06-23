'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const SECTION_SUBTITLE =
  'Três formatos de atuação. Todos\npartem do mesmo princípio:\ndiagnóstico antes de execução.'

interface ServiceItem {
  id: string
  name: string
  tagline: string
  description: string
  categoryLabel: string
  subItems: string[]
}

const SERVICES: ServiceItem[] = [
  {
    id: '(01)',
    name: 'Consultoria',
    tagline: 'Visão e Direção',
    description:
      'Para empresas que precisam de direção estratégica e preferem executar com equipe própria.',
    categoryLabel: '(Visão e Direção)',
    subItems: [
      'Mapa de Direção de Marketing (modelo de negócio, público, produto, posicionamento e canais)',
      'Apresentação executiva e direcionamento',
      '2 mentorias para auxílio da aplicabilidade de cada etapa',
    ],
  },
  {
    id: '(02)',
    name: 'BPO Gerencial',
    tagline: 'Gestão Estratégica',
    description:
      'Para empresas com equipe própria ou terceirizada que precisam de método e governança sobre os processos de marketing.',
    categoryLabel: '(Gestão Estratégica)',
    subItems: [
      'Levantamento de iniciativas primordiais para o negócio',
      'Coordenação do time interno e suporte consultivo',
      'Governança entre marketing, comercial e diretoria',
      'Gestão e acompanhamento contínuo',
    ],
  },
  {
    id: '(03)',
    name: 'BPO Completo',
    tagline: 'Operação Integrada',
    description:
      'Para empresas que precisam de operação completa de marketing, da estratégia à execução.',
    categoryLabel: '(Operação Integrada)',
    subItems: [
      'Operação completa de mídia, conteúdo, copy, design e campanhas',
      'Gestão integrada de performance, relatórios e otimizações',
      'Execução consultiva e estratégica, alinhada ao plano e às metas de negócio',
      'Acompanhamento próximo com análises, previsões e melhorias contínuas',
    ],
  },
  {
    id: '(04)',
    name: 'Módulos Complementares',
    tagline: 'Projetos Pontuais',
    description:
      'Projetos específicos que complementam a operação de marketing com frentes técnicas.',
    categoryLabel: '(Projetos Pontuais)',
    subItems: [
      'Branding e Comunicação Visual',
      'Composição Digital (Sites, e-commerces, SEO)',
      'Vendas e CRM (Chatbots, playbooks, funis)',
      'Campanhas e Ativações Sazonais',
    ],
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(prev => prev === i ? null : i)
  }

  return (
    <>
     <section id="servicos" aria-label="Serviços" className="section-massive" style={{ background: '#F8F8F8', paddingBottom: '0' }}>
      <div className="container-content">
        {/* ─── CABEÇALHO ─────────────────────────────────────────────────── */}
        <div ref={refHeader} className="services-header reveal" style={{ paddingBottom: '64px' }}>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <span style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '32px',
              lineHeight: 1,
              color: 'rgba(14,16,17,0.6)',
            }}>
              (O que fazemos)
            </span>
            <span style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '32px',
              lineHeight: 1,
              color: 'var(--accent)',
            }}>
              (06)
            </span>
          </div>

          <h2
            aria-hidden
            className="services-title-display"
            style={{ color: '#0E1011' }}
          >
            Serviços
          </h2>

          <p className="services-subtitle" style={{ color: '#0E1011' }}>
            {SECTION_SUBTITLE}
          </p>

        </div>

        {/* ─── ACCORDION DE SERVIÇOS ─────────────────────────────────────── */}
        <div ref={refList} style={{ padding: '0 0 96px' }} className="services-list-wrap stagger reveal">
        {SERVICES.map((service, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={service.id}
              style={{
                borderTop: '1px solid rgba(14,16,17,0.1)',
                borderBottom: index === SERVICES.length - 1 ? '1px solid rgba(14,16,17,0.1)' : 'none',
              }}
            >
              {/* ── Toggle row ──────────────────────────────────────────── */}
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
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px' }}>
                  <span style={{
                    fontFamily: "'DM Serif Text', serif",
                    fontStyle: 'italic',
                    fontSize: '28px',
                    lineHeight: 1,
                    color: 'rgba(14,16,17,0.3)',
                    flexShrink: 0,
                  }}>
                    {service.id}
                  </span>
                  <h3 className="services-item-name" style={{ color: '#0E1011' }}>
                    {service.name}
                  </h3>
                </div>

                {/* Ícone + / − */}
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(14,16,17,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginLeft: '24px',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    borderColor: isOpen ? 'var(--accent)' : 'rgba(14,16,17,0.15)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <line x1="8" y1="2" x2="8" y2="14" stroke={isOpen ? 'var(--accent)' : '#0E1011'} strokeWidth="1.5" style={{ transition: 'stroke 0.3s ease' }} />
                    <line x1="2" y1="8" x2="14" y2="8" stroke={isOpen ? 'var(--accent)' : '#0E1011'} strokeWidth="1.5" style={{ transition: 'stroke 0.3s ease' }} />
                  </svg>
                </span>
              </button>

              {/* ── Collapsible content ─────────────────────────────────── */}
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
                  {/* Tagline */}
                  <p style={{
                    fontFamily: "'DM Serif Text', serif",
                    fontStyle: 'italic',
                    fontSize: '24px',
                    lineHeight: 1.4,
                    color: 'rgba(14,16,17,0.7)',
                    margin: '0 0 20px',
                  }}>
                    {service.tagline}
                  </p>

                  {/* Descrição */}
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: 1.7,
                    color: 'rgba(14,16,17,0.6)',
                    maxWidth: '768px',
                    margin: '0 0 32px',
                  }}>
                    {service.description}
                  </p>

                  {/* Categoria + sub-itens */}
                  <span style={{
                    fontFamily: "'DM Serif Text', serif",
                    fontStyle: 'italic',
                    fontSize: '24px',
                    lineHeight: 1,
                    color: 'rgba(14,16,17,0.4)',
                    display: 'block',
                    marginBottom: '16px',
                  }}>
                    {service.categoryLabel}
                  </span>
                  <div className="services-subitems">
                    {service.subItems.map((item, i) => (
                      <span key={i} style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: 1.5,
                        color: 'rgba(14,16,17,0.85)',
                      }}>
                        - {item}
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

      {/* ─── FAIXA MARQUEE — Micro Serviços ────────────────────────────── */}
      <div
        aria-label="Micro serviços"
        style={{
          borderTop: '1px solid rgba(14,16,17,0.1)',
          borderBottom: '1px solid rgba(14,16,17,0.1)',
          overflow: 'hidden',
          padding: '28px 0',
          background: '#F8F8F8',
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
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '18px',
                      color: 'rgba(14,16,17,0.7)',
                      whiteSpace: 'nowrap',
                      textTransform: 'uppercase',
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
                      background: 'rgba(14,16,17,0.3)',
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
