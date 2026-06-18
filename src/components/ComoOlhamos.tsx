'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Image from 'next/image'

// TODO: inserir imagem real
const IMAGE_SRC: string | null = null

const ITEMS = [
  'Imersão no contexto real da empresa',
  'Conversas com quem está na operação, não só com a liderança',
  'Leitura de cultura, comportamento e relações internas',
  'Observação de quem compra e do que move a decisão',
  'Sinais de mercado que passam despercebidos no dia a dia',
  'Testes e validações contínuas',
]

export default function ComoOlhamos() {
  const refTitle = useScrollReveal<HTMLDivElement>()
  const refList = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="como-olhamos"
      aria-label="Como olhamos"
      className="section-massive"
      style={{
        background: '#0E1011',
        color: '#FFFFFF',
      }}
    >
      <div className="grid-split container-content">
        {/* Coluna Esquerda: Sticky */}
        <div ref={refTitle} className="sticky-col reveal">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '32px',
          }}>
            <span
              style={{
                fontFamily: "'DM Serif Text', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(24px, 2.5vw, 32px)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              (Como olhamos)
            </span>
            <span
              style={{
                fontFamily: "'DM Serif Text', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(24px, 2.5vw, 32px)',
                lineHeight: 1,
                color: 'var(--accent)',
              }}
            >
              (03)
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Anton SC', sans-serif",
              fontSize: 'clamp(60px, 8vw, 120px)',
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-2px',
              color: '#FFFFFF',
              margin: '0 0 32px',
            }}
          >
            Como<br />olhamos
          </h2>
           <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '500px',
              margin: '0 0 40px',
            }}
          >
            Acompanhamos a operação de perto, conversamos com as equipes e analisamos o contexto além dos relatórios tradicionais.
          </p>

          {/* Slot de Imagem / Fallback Neutro */}
          <div style={{
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '16/9',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '4px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            {IMAGE_SRC ? (
              <Image
                src={IMAGE_SRC}
                alt="Observação de campo e imersão"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'rgba(255, 255, 255, 0.25)',
                }}>
                  Imersão & Observação
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Coluna Direita: Lista */}
        <div
          ref={refList}
          className="stagger reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            paddingTop: '16px',
          }}
        >
          {ITEMS.map((text, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'baseline',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: '24px',
                ['--index' as string]: i
              } as React.CSSProperties}
            >
              <span
                style={{
                  fontFamily: "'DM Serif Text', serif",
                  fontStyle: 'italic',
                  fontSize: '28px',
                  color: 'rgba(255,255,255,0.25)',
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                ({String(i + 1).padStart(2, '0')})
              </span>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  lineHeight: 1.4,
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                {text}
              </p>
            </div>
          ))}

          {/* Fechamento */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              color: 'rgba(255,255,255,0.4)',
              margin: '16px 0 0',
            }}
          >
            É desse mergulho que nasce tudo o que construímos depois.
          </p>
        </div>
      </div>
    </section>
  )
}
