'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── CONTEÚDO ──────────────────────────────────────────────────────────────
//
// Logos dos clientes — /public/images/clientes/
const CLIENT_LOGOS = [
  { file: '16.png', alt: 'Cliente 16' },
  { file: '17.png', alt: 'Cliente 17' },
  { file: '18.png', alt: 'Cliente 18' },
  { file: '19.png', alt: 'Cliente 19' },
  { file: '20.png', alt: 'Cliente 20' },
  { file: '21.png', alt: 'Cliente 21' },
  { file: '22.png', alt: 'Cliente 22' },
  { file: '23.png', alt: 'Cliente 23' },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const refContent = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* ─── SEÇÃO 1 — Vídeo fullscreen ──────────────────────────────── */}
      <section
        aria-label="Hero Video"
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          background: '#0E1011',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Vídeo de fundo — Desktop (horizontal) */}
        <div className="hero-video-desktop" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Vídeo de fundo — Mobile (vertical) */}
        <div className="hero-video-mobile" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CTA — barra horizontal */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '28px 96px',
          background: 'rgba(14,16,17,0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        className="hero-cta-bar"
        >
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '24px',
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.5px',
            whiteSpace: 'nowrap',
          }}>
            O marketing que vive seu negócio
          </p>
          <a href="#contato" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '20px',
            fontWeight: 600,
            textDecoration: 'none',
            color: '#FFFFFF',
            borderBottom: '2px solid rgba(255,255,255,0.6)',
            paddingBottom: '4px',
            transition: 'opacity 0.2s ease',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Agendar uma conversa
          </a>
        </div>

        {/* Faixa de logos dos clientes */}
        <div
          style={{
            flexShrink: 0,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '20px 0',
            background: 'rgba(14,16,17,0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <div style={{
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}>
            <div
              className="hero-logos-track"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '48px',
                width: 'max-content',
              }}
            >
              {[0, 1, 2].map((copy) => (
                <div
                  key={copy}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '48px',
                    flexShrink: 0,
                  }}
                  aria-hidden={copy > 0}
                >
                  {CLIENT_LOGOS.map((logo) => (
                    <Image
                      key={`${copy}-${logo.file}`}
                      src={`/images/clientes/${logo.file}`}
                      alt={logo.alt}
                      width={100}
                      height={40}
                      style={{
                        objectFit: 'contain',
                        opacity: 0.6,
                        filter: 'grayscale(100%) invert(1)',
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 2 — Conteúdo Hero ─────────────────────────────────── */}
      <section
        aria-label="Hero"
        style={{
          background: '#F8F8F8',
          overflow: 'hidden',
        }}
      >
        <div ref={refContent} className="hero-content reveal">
          <div className="hero-text-col">
            <h1 className="hero-name">
              O marketing<br />
              que vive<br />
              seu negócio
            </h1>

            <div style={{
              width: '100%', height: '1px',
              background: 'rgba(14,16,17,0.12)',
              margin: '32px 0',
            }} />

            <p className="hero-tagline" style={{ marginBottom: '40px' }}>
              Construímos mecanismos de marketing baseados no estudo profundo de cada negócio.
            </p>

            {/* ── CTAs ── */}
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <a href="#contato" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '22px',
                fontWeight: 600,
                textDecoration: 'none',
                color: '#0E1011',
                borderBottom: '2px solid #0E1011',
                paddingBottom: '4px'
              }}>
                Agendar uma conversa
              </a>
              <a href="#servicos" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '22px',
                fontWeight: 600,
                textDecoration: 'none',
                color: 'rgba(14,16,17,0.6)',
                borderBottom: '2px solid rgba(14,16,17,0.3)',
                paddingBottom: '4px'
              }}>
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="/images/captação.jpg"
              alt="Ticker Marketing — Captação"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </section>

    </>
  )
}
