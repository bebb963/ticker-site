'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Image from 'next/image'

const PARTNERS = [
  { name: 'Cliente A', logo: null },
  { name: 'Cliente B', logo: null },
  { name: 'Cliente C', logo: null },
  { name: 'Cliente D', logo: null },
  { name: 'Cliente E', logo: null },
  { name: 'Cliente F', logo: null },
]

export default function Partners() {
  const refPartners = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      aria-label="Nossos Clientes" 
      className="section-pad-96"
      style={{ 
        background: '#F8F8F8', 
        color: '#0E1011'
      }}
    >
      <span style={{
        fontFamily: "'DM Serif Text', serif",
        fontStyle: 'italic',
        fontSize: '30px',
        lineHeight: 1,
        color: 'rgba(14,16,17,0.6)',
        display: 'block',
        marginBottom: '64px',
        textAlign: 'center'
      }}>
        (Nossos Clientes)
      </span>

      <div ref={refPartners} className="stagger reveal" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '64px', 
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {PARTNERS.map((partner, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ['--index' as string]: i,
          } as React.CSSProperties}>
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0)' }}
              />
            ) : (
              <span style={{
                fontFamily: "'Anton SC', sans-serif",
                fontSize: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'rgba(14,16,17,0.3)',
                userSelect: 'none',
              }}>
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
