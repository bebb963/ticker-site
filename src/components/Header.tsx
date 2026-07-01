'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Marketing Instintivo', href: '#marketing-instintivo' },
  { label: 'O Mapa',               href: '#mapa' },
  { label: 'Serviços',             href: '#servicos' },
  { label: 'Quem Somos',           href: '#quem-somos' },
  { label: 'Trabalhe Conosco',     href: '#contato' },
]

const CTA_LABEL = 'Vamos conversar'
const CTA_HREF  = '#contato'

interface HeaderProps {
  variant?: 'small' | 'full'
}

export default function Header({ variant = 'small' }: HeaderProps) {
  const [drawerOpen, setDrawerOpen]   = useState(false)

  /* Fecha drawer ao redimensionar para desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setDrawerOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Bloqueia scroll do body quando drawer estiver aberto */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      {/* ─── HEADER ────────────────────────────────────────────────────── */}
      <header
        className="header-fixed"
        style={{
          paddingTop: '32px',
          paddingBottom: '24px',
          mixBlendMode: 'difference',
          color: '#FFFFFF'
        }}
      >
        <div className="container-content header-inner-container" style={{ pointerEvents: 'auto' }}>
          
          {/* ── DESKTOP ───────────────────────────────────────────────────── */}
          <div className="header-desktop">

            {/* Logo - esquerda */}
            <Link href="/" aria-label="Ticker - Home" style={{ color: '#FFFFFF' }}>
              <Logo variant="dark" />
            </Link>

            {/* Links de nav - centro */}
            <nav
              className="header-nav"
              style={{ gap: '20px' }}
              aria-label="Navegação principal"
            >
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link-header" style={{ color: '#FFFFFF' }}>
                  {link.label}
                </Link>
              ))}
              {/* Ticker Score — Destaque visual */}
              <Link href="/score" className="nav-score-highlight">
                <span>Ticker Score</span>
                <span className="nav-score-badge">Grátis</span>
              </Link>
            </nav>

            {/* CTA - direita */}
            <Link href={CTA_HREF} className="cta-primary" aria-label={CTA_LABEL} style={{ color: '#FFFFFF' }}>
              {CTA_LABEL}
            </Link>
          </div>

          {/* ── MOBILE / TABLET ───────────────────────────────────────────── */}
          <div className="header-mobile">

            <Link href="/" aria-label="Ticker - Home" style={{ color: '#FFFFFF' }}>
              <Logo variant="dark" className="header-logo-mobile" />
            </Link>

            <div className="header-mobile-actions">
              <Link href={CTA_HREF} className="cta-primary" aria-label={CTA_LABEL} style={{ color: '#FFFFFF', fontSize: '16px' }}>
                {CTA_LABEL}
              </Link>

              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Abrir menu"
                className="header-menu-btn"
                style={{ color: '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer', width: '44px', height: '44px' }}
              >
                <Menu size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── MOBILE DRAWER ─────────────────────────────────────────────── */}
      {/* Overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        className="drawer-overlay"
        style={{
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? 'auto' : 'none',
        }}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className="drawer-panel"
        style={{
          width: '280px',
          background: '#0E1011',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          padding: '40px 32px',
        }}
      >
        {/* Fechar */}
        <div className="drawer-close-row">
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Fechar menu"
            style={{ color: '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Links */}
        <nav className="drawer-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className="nav-link-drawer"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/score"
            onClick={() => setDrawerOpen(false)}
            className="nav-score-highlight-mobile"
          >
            <span>Ticker Score</span>
            <span className="nav-score-badge">Grátis</span>
          </Link>
        </nav>
      </aside>
    </>
  )
}
