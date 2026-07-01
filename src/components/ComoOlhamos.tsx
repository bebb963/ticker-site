'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState, useEffect, useRef, useCallback } from 'react'

// ─── TILES DE VIDEO ─────────────────────────────────────────────────────────
const TILES = [
  {
    id: 'bastidores',
    label: 'Bastidores',
    // TODO: substituir por video e poster reais
    video: '/videos/como-olhamos-1.mp4',
    poster: '/images/como-olhamos-1.jpg',
  },
  {
    id: 'imersao',
    label: 'Imersao',
    video: '/videos/como-olhamos-2.mp4',
    poster: '/images/como-olhamos-2.jpg',
  },
  {
    id: 'campo',
    label: 'Campo',
    video: '/videos/como-olhamos-3.mp4',
    poster: '/images/como-olhamos-3.jpg',
  },
  {
    id: 'fachada',
    label: 'Escritorio',
    video: '/videos/como-olhamos-4.mp4',
    poster: '/images/como-olhamos-4.jpg',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

function VideoTile({
  tile,
  reducedMotion,
}: {
  tile: (typeof TILES)[number]
  reducedMotion: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const tileRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Mobile: play ao entrar na viewport via IntersectionObserver
  useEffect(() => {
    if (reducedMotion) return
    const el = tileRef.current
    if (!el) return

    // So ativa viewport-play em telas pequenas
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!isMobile) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {})
          setIsPlaying(true)
        } else {
          videoRef.current?.pause()
          setIsPlaying(false)
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion])

  const handleMouseEnter = useCallback(() => {
    if (reducedMotion) return
    videoRef.current?.play().catch(() => {})
    setIsPlaying(true)
  }, [reducedMotion])

  const handleMouseLeave = useCallback(() => {
    if (reducedMotion) return
    videoRef.current?.pause()
    if (videoRef.current) videoRef.current.currentTime = 0
    setIsPlaying(false)
  }, [reducedMotion])

  return (
    <div
      ref={tileRef}
      className="co-tile"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        poster={tile.poster}
        className="protected-asset"
        onContextMenu={(e) => e.preventDefault()}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={tile.video} type="video/mp4" />
      </video>

      {/* Fallback/poster overlay quando parado */}
      <div
        className="co-tile-overlay"
        style={{ opacity: isPlaying ? 0 : 1 }}
      >
        <span className="co-tile-label">{tile.label}</span>
      </div>
    </div>
  )
}

export default function ComoOlhamos() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section
      id="como-olhamos"
      className="section-massive"
      style={{
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-inverse)',
      }}
    >
      <div ref={ref} className="reveal container-content">

        {/* ─── Rotulo + Statement + Apoio ─────────────────────────────── */}
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <span className="section-label section-label--inverse">(Como olhamos)</span>

          <h2 className="section-statement" style={{ maxWidth: '700px' }}>
            Escolhemos trabalhar de perto.
          </h2>

          <p className="section-support section-support--inverse" style={{ marginTop: '16px' }}>
            Entramos na operacao, observamos os bastidores, conversamos com as pessoas
            e sentimos o negocio na pele. E assim que unimos a visao do fundador,
            a cultura do time, a proposta do produto e o desejo de quem consome.
          </p>
        </div>

        {/* ─── Fileira de tiles verticais ─────────────────────────────── */}
        <div className="co-tiles-grid">
          {TILES.map((tile) => (
            <VideoTile
              key={tile.id}
              tile={tile}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
