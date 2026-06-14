'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const TEAM = [
  {
    name: 'Priscila Lima',
    role: 'Comunicação e marca',
    desc: 'O olhar que dá sentido e voz às marcas. Transforma intenção em percepção e narrativa.',
    image: '/images/Priscila.png', 
  },
  {
    name: 'Bruno Barroso',
    role: 'Growth e Performance',
    desc: 'O método que garante resultado. Conecta dados, sistemas e inteligência para aceleração previsível.',
    image: '/images/Bruno.JPG', 
  }
]

export default function QuemSomos() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refGrid = useScrollReveal<HTMLDivElement>()

  return (
    <section 
      id="quem-somos" 
      aria-label="Quem Somos" 
      className="section-massive"
      style={{ 
        background: '#F8F8F8', 
        color: '#0E1011'
      }}
    >
      <div ref={refHeader} className="reveal" style={{ marginBottom: '96px' }}>
        <span style={{
          fontFamily: "'DM Serif Text', serif",
          fontStyle: 'italic',
          fontSize: '32px',
          lineHeight: 1,
          color: 'rgba(14,16,17,0.6)',
          display: 'block',
          marginBottom: '32px',
        }}>
          (Quem Somos)
        </span>
        <h2 style={{
          fontFamily: "'Anton SC', sans-serif",
          fontSize: 'clamp(60px, 12vw, 240px)',
          fontWeight: 400,
          textTransform: 'uppercase',
          lineHeight: 0.9,
          letterSpacing: '-2px',
          color: '#0E1011',
          margin: '0 0 32px'
        }}>
          O Time
        </h2>
      </div>

      <div ref={refGrid} className="grid-split stagger reveal">
        {TEAM.map((member, i) => (
          <div 
            key={i} 
            style={{ 
              paddingRight: i === 0 ? '48px' : '0', 
              paddingLeft: i === 1 ? '48px' : '0',
              ['--index' as string]: i 
            } as React.CSSProperties}
          >
            <div style={{
              aspectRatio: '4/5',
              background: '#0E1011',
              position: 'relative',
              marginBottom: '48px',
              overflow: 'hidden'
            }}>
              {member.image ? (
                <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              ) : (
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '48px',
                }}>
                  <span style={{
                    fontFamily: "'Anton SC', sans-serif",
                    fontSize: 'clamp(24px, 3vw, 48px)',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.2)',
                    textAlign: 'center',
                    lineHeight: 1.1,
                  }}>
                    Foto {member.name}
                  </span>
                </div>
              )}
            </div>
            
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '40px',
              letterSpacing: '-1px',
              marginBottom: '16px',
              color: '#0E1011'
            }}>
              {member.name}
            </h3>
            <span style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '24px',
              color: 'rgba(14,16,17,0.6)',
              display: 'block',
              marginBottom: '24px'
            }}>
              {member.role}
            </span>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: 1.7,
              color: 'rgba(14,16,17,0.6)',
              margin: 0
            }}>
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
