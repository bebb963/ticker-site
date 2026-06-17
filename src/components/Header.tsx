'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Manifesto',         href: '#manifesto' },
  // { label: 'O Mapa',            href: '#mapa' },           // absorvido por Marketing Instintivo
  { label: 'Serviços',          href: '#servicos' },
  // { label: 'Cases',             href: '#cases' },          // temporariamente oculto
  { label: 'Depoimentos',       href: '#depoimentos' },
  // { label: 'O Processo',        href: '#trabalhe-conosco' }, // temporariamente oculto
  { label: 'Quem Somos',        href: '#quem-somos' },
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none"
        style={{
          paddingTop: '32px',
          paddingBottom: '24px',
          mixBlendMode: 'difference',
          color: '#FFFFFF'
        }}
      >
        <div className="container-content pointer-events-auto header-inner-container">
          
          {/* ── DESKTOP ───────────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center justify-between w-full">

            {/* Logo — esquerda */}
            <Link href="/" aria-label="Ticker — Home" style={{ color: '#FFFFFF' }}>
              <Logo variant="dark" />
            </Link>

            {/* Links de nav — centro */}
            <nav
              className="flex items-center"
              style={{ gap: '24px' }}
              aria-label="Navegação principal"
            >
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link-header" style={{ color: '#FFFFFF' }}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA — direita */}
            <Link href={CTA_HREF} className="cta-header" aria-label={CTA_LABEL} style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}>
              {CTA_LABEL}
            </Link>
          </div>

          {/* ── MOBILE / TABLET ───────────────────────────────────────────── */}
          <div className="flex lg:hidden items-center justify-between w-full">

            <Link href="/" aria-label="Ticker — Home" style={{ color: '#FFFFFF' }}>
              <Logo variant="dark" className="h-8 w-auto" />
            </Link>

            <div className="flex items-center gap-6">
              <Link href={CTA_HREF} className="cta-header" aria-label={CTA_LABEL} style={{ color: '#FFFFFF', borderColor: '#FFFFFF', fontSize: '16px' }}>
                Falar com a gente
              </Link>

              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Abrir menu"
                className="flex items-center justify-center p-0"
                style={{ color: '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer' }}
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
        className="fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity duration-300"
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
        className="fixed top-0 right-0 h-full z-50 lg:hidden flex flex-col"
        style={{
          width: '280px',
          background: '#0E1011',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          padding: '40px 32px',
        }}
      >
        {/* Fechar */}
        <div className="flex justify-end mb-12">
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Fechar menu"
            style={{ color: '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col" style={{ gap: '32px' }}>
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
        </nav>
      </aside>
    </>
  )
}
