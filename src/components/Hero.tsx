'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

// ─── CONTEUDO ──────────────────────────────────────────────────────────────
//
// Logos dos clientes — /public/images/clientes/
const CLIENT_LOGOS = [
  { file: '21.png', alt: 'Cliente 21' },
  { file: '18.png', alt: 'Cliente 18' },
  { file: '23.png', alt: 'Cliente 23' },
  { file: '16.png', alt: 'Cliente 16' },
  { file: '20.png', alt: 'Cliente 20' },
  { file: '17.png', alt: 'Cliente 17' },
  { file: '22.png', alt: 'Cliente 22' },
  { file: '19.png', alt: 'Cliente 19' },
]

// Índice do ecossistema Ticker
const ECOSYSTEM = [
  { label: 'Acesse o app',            title: 'TICKER OS' },
  { label: 'Newsletter',              title: 'TICKER NEWS' },
  { label: 'Portal de influencers',   title: 'TICKER CREATORS' },
  { label: 'Pesquisa de mercado',     title: 'TICKER RESEARCH' },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [shouldPlay, setShouldPlay] = useState(true)
  const desktopVideoRef = useRef<HTMLVideoElement>(null)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldPlay(!mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldPlay(!e.matches)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    if (shouldPlay) {
      desktopVideoRef.current?.play().catch(() => {})
      mobileVideoRef.current?.play().catch(() => {})
    } else {
      desktopVideoRef.current?.pause()
      mobileVideoRef.current?.pause()
    }
  }, [shouldPlay])

  return (
    <section aria-label="Hero" className="hero-ed">
      {/* ─── BLOCO PRINCIPAL — SPLIT EDITORIAL ─────────────────────────── */}
      <div className="container-content hero-ed-main">

        {/* ── COLUNA ESQUERDA: Texto ancorado ─────────────────────────── */}
        <div className="hero-ed-text">
          <span className="hero-ed-eyebrow hero-ed-anim hero-ed-anim-1">
            Sistemas de marketing
          </span>

          <h1 className="hero-ed-title hero-ed-anim hero-ed-anim-2">
            O marketing que vive seu negócio.
          </h1>

          <p className="hero-ed-sub hero-ed-anim hero-ed-anim-3">
            Construímos sistemas de marketing, baseados no estudo profundo de cada negócio.
          </p>

          <div className="hero-ed-ctas hero-ed-anim hero-ed-anim-3">
            <a href="#contato" className="cta-primary" style={{ color: '#FFFFFF', fontSize: '18px' }}>
              Vamos conversar
            </a>
            <a href="#marketing-instintivo" className="hero-ed-cta-secondary">
              Como funciona <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* ── COLUNA DIREITA: Vídeo emoldurado + índice ───────────────── */}
        <div className="hero-ed-visual hero-ed-anim hero-ed-anim-4">
          <div className="hero-ed-panel">
            {/* Vídeo desktop */}
            <div className="hero-video-desktop" style={{ position: 'absolute', inset: 0 }}>
              <video
                ref={desktopVideoRef}
                autoPlay={shouldPlay}
                loop
                muted
                playsInline
                preload="metadata"
                poster="/images/hero-poster.jpg"
                className="protected-asset"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="/videos/hero-desktop.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Vídeo mobile */}
            <div className="hero-video-mobile" style={{ position: 'absolute', inset: 0 }}>
              <video
                ref={mobileVideoRef}
                autoPlay={shouldPlay}
                loop
                muted
                playsInline
                preload="metadata"
                poster="/images/hero-poster.jpg"
                className="protected-asset"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="/videos/hero-mobile.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Índice do ecossistema — 2x2 editorial */}
          <div className="hero-ed-index">
            {ECOSYSTEM.map((item, idx) => (
              <button key={idx} className="hero-ed-index-item" type="button">
                <span>
                  <span className="hero-ed-index-label">{item.label}</span>
                  <span className="hero-ed-index-title">{item.title}</span>
                </span>
                <span className="hero-ed-index-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FAIXA DE LOGOS — PROVA SILENCIOSA ──────────────────────────── */}
      <div className="hero-ed-proof">
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
                    alt=""
                    width={100}
                    height={40}
                    style={{
                      objectFit: 'contain',
                      opacity: 0.4,
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
  )
}
