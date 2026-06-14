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
        {/* Vídeo de fundo */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
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
            }}
          >
            <source src="/images/TICKER vertical (1).mp4" type="video/mp4" />
          </video>
        </div>

        {/* CTA centralizado */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '28px 0',
          background: 'rgba(14,16,17,0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '24px',
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.5px',
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
          <h1 className="hero-name">O marketing que vive seu negócio</h1>

          <div style={{
            width: '100%', height: '1px',
            background: 'rgba(14,16,17,0.12)',
            margin: '48px 0',
          }} />

          <p className="hero-tagline" style={{ marginBottom: '64px' }}>
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
      </section>

      {/* ─── CSS ────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes hero-logos-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .hero-logos-track {
          animation: hero-logos-scroll 25s linear infinite;
        }
        .hero-content {
          padding: 120px 96px 96px;
          max-width: 1400px;
        }
        @media (max-width: 767px) {
          .hero-content {
            padding: 64px 24px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-logos-track { animation: none; }
        }
      `}</style>
    </>
  )
}
