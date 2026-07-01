'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Link from 'next/link'

const PORTAS = [
  {
    id: 'diagnostico',
    title: 'Diagnostico de estrutura',
    desc: 'Uma leitura da base atual do negocio: canais, processos e dados, e onde estao as lacunas.',
    href: '#diagnostico'
  },
  {
    id: 'mapa',
    title: 'O Mapa',
    desc: 'Clareza e direcao antes de agir: o diagnostico que revela por onde o seu negocio cresce.',
    href: '#mapa'
  },
  {
    id: 'branding',
    title: 'Branding',
    desc: 'A construcao da percepcao: quem a empresa e, traduzido em algo que o mercado reconhece.',
    href: '#contato'
  }
]

export default function PorOndeComecar() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="comecar"
      aria-label="Por onde comecar"
      className="section-massive"
      style={{
        background: 'var(--ds-bg-muted)',
        color: 'var(--color-text-default)',
      }}
    >
      <div ref={ref} className="reveal container-content">
        
        <div className="poc-grid">
          
          {/* Coluna Esquerda: Headers */}
          <div className="poc-header-col">
            <span className="section-label">(Por onde comecar)</span>
            <h2 className="section-statement" style={{ marginTop: '16px' }}>
              Voce nao precisa comecar por tudo.
            </h2>
            <p className="section-support" style={{ marginTop: '24px' }}>
              Cada negocio parte de um ponto diferente. O Mapa, o diagnostico de estrutura 
              ou o branding podem ser o primeiro passo. E, se o momento pedir, voce entra 
              direto na fase que faz mais sentido. Todos levam ao mesmo sistema.
            </p>
          </div>

          {/* Coluna Direita: As Portas */}
          <div className="poc-doors-col">
            <div className="poc-doors-list">
              {PORTAS.map((porta) => (
                <Link key={porta.id} href={porta.href} className="poc-door">
                  <div className="poc-door-content">
                    <h3 className="poc-door-title">{porta.title}</h3>
                    <p className="poc-door-desc">{porta.desc}</p>
                  </div>
                  <div className="poc-door-icon">
                    {/* Arrow icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
