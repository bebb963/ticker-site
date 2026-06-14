'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── DADOS DOS PROJETOS ───────────────────────────────────────────────────────
// ⚠️ Nenhum case/projeto encontrado nos docs da base de conhecimento.
//    O usuário autorizou placeholders Lorem Ipsum para esta seção.
//    Substituir os dados abaixo quando os cases reais forem definidos.
// ─────────────────────────────────────────────────────────────────────────────

interface Project {
  id: string
  name: string            // Nome do projeto
  client: string          // Nome do cliente
  year: string            // Ano de realização
  category: string        // Categoria (ex: BPO, Consultoria, Assessoria)
  image: string | null    // Caminho da imagem (null = placeholder)
  clientLogo: string | null // Logo do cliente centralizado sobre imagem
  href: string            // Link do case
}

const PROJECTS: Project[] = [
  {
    id: '01',
    name: 'Ionself',
    client: 'Ionself',
    year: '2025',
    category: 'Consultoria',
    image: null,
    clientLogo: null,
    href: '#cases',
  },
  {
    id: '02',
    name: 'Neres',
    client: 'Neres',
    year: '2025',
    category: 'Assessoria',
    image: null,
    clientLogo: null,
    href: '#cases',
  },
  {
    id: '03',
    name: 'Kista',
    client: 'Kista',
    year: '2024',
    category: 'Branding',
    image: null,
    clientLogo: null,
    href: '#cases',
  },
  {
    id: '04',
    name: 'Be Fancy',
    client: 'Be Fancy',
    year: '2024',
    category: 'Performance',
    image: null,
    clientLogo: null,
    href: '#cases',
  },
]

// ── Subtítulo descritivo extraído do estilo editorial da Ticker ────────────
// Fonte: Posicionamento e Comunicação.md — território "Do Real"
// ⚠️ Ajustar para melhor adequação ao conteúdo final dos cases
const SECTION_SUBTITLE = 'Trabalhos que nascem\ndo entendimento real\nde cada negócio.'

// ─────────────────────────────────────────────────────────────────────────────

function useImageExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null)
  useEffect(() => {
    const img = new window.Image()
    img.onload  = () => setExists(true)
    img.onerror = () => setExists(false)
    img.src = src
  }, [src])
  return exists
}

function ProjectCard({ project }: { project: Project }) {
  const imageExists = useImageExists(project.image ?? '')
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={project.href}
      style={{ display: 'block', textDecoration: 'none', overflow: 'hidden', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Ver case: ${project.name} — ${project.client}`}
    >
      {/* ── Wrapper da imagem — aspect-ratio 1:1 ── */}
      <div style={{
        aspectRatio: '1 / 1',
        background: '#0E1011',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {imageExists === true && project.image ? (
          /* Imagem real do case */
          <Image
            src={project.image}
            alt={`${project.name} — ${project.client}`}
            fill
            style={{
              objectFit: 'cover',
              opacity: hovered ? 0.9 : 0.75,
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.4s ease, opacity 0.4s ease',
            }}
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        ) : (
          /* ⚠️ Placeholder: imagem não existe ainda */
          <>
            {/* Grade decorativa */}
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.4s ease',
            }} />
            {/* Número do projeto */}
            <span aria-hidden style={{
              position: 'absolute',
              bottom: '32px',
              left: '32px',
              fontFamily: "'Anton SC', sans-serif",
              fontSize: '96px',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,0.06)',
              lineHeight: 1,
              userSelect: 'none' as const,
            }}>
              {project.id}
            </span>
            {/* Nome do projeto centralizado */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '48px',
            }}>
              <span style={{
                fontFamily: "'Anton SC', sans-serif",
                fontSize: 'clamp(24px, 3vw, 48px)',
                textTransform: 'uppercase' as const,
                color: 'rgba(255,255,255,0.55)',
                textAlign: 'center' as const,
                lineHeight: 1.1,
              }}>
                {project.name}
              </span>
            </div>
          </>
        )}

        {/* Logo do cliente sobre a imagem — quando disponível */}
        {project.clientLogo && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Image
              src={project.clientLogo}
              alt={project.client}
              height={90}
              width={200}
              style={{
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
                height: '90px',
                width: 'auto',
              }}
            />
          </div>
        )}
      </div>

      {/* ── Rodapé do card ── */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '32px',
        background: '#F8F8F8',
        borderTop: '1px solid rgba(14,16,17,0.08)',
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(24px, 2.5vw, 40px)',
          letterSpacing: '-1px',
          color: '#0E1011',
          lineHeight: 1.1,
        }}>
          {project.name}
        </span>
        <span style={{
          fontFamily: "'DM Serif Text', serif",
          fontStyle: 'italic',
          fontSize: '32px',
          color: 'rgba(14,16,17,0.6)',
          flexShrink: 0,
          marginLeft: '16px',
        }}>
          {project.year}
        </span>
      </div>
    </Link>
  )
}

export default function Projects() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refGrid   = useScrollReveal<HTMLDivElement>()

  return (
    <section id="cases" aria-label="Projetos" style={{ background: '#F8F8F8' }}>

      {/* ─── CABEÇALHO DA SEÇÃO ─────────────────────────────────────────── */}
      <div ref={refHeader} style={{ padding: '96px 96px 0' }} className="reveal">

        {/* Linha superior: label esq. + número dir. */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '0',
        }}>
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '32px',
            lineHeight: 1,
            color: 'rgba(14,16,17,0.6)',
          }}>
            (Trabalhos Selecionados)
          </span>
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '32px',
            lineHeight: 1,
            color: 'rgba(14,16,17,0.6)',
          }}>
            (01)
          </span>
        </div>

        {/* Título decorativo — Anton SC · 320px */}
        <h2
          aria-hidden
          style={{
            fontFamily: "'Anton SC', sans-serif",
            fontSize: 'clamp(60px, 18vw, 320px)',
            fontWeight: 400,
            textTransform: 'uppercase' as const,
            lineHeight: 0.85,
            color: '#0E1011',
            margin: '16px 0 0',
            pointerEvents: 'none',
            userSelect: 'none' as const,
            letterSpacing: '-2px',
          }}
        >
          Cases
        </h2>

        {/* Subtítulo descritivo — Inter SemiBold · 80px */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(28px, 5vw, 80px)',
          letterSpacing: '-2px',
          lineHeight: 1.15,
          color: '#0E1011',
          maxWidth: '1400px',
          margin: '48px 0 80px',
          whiteSpace: 'pre-line',
        }}>
          {SECTION_SUBTITLE}
        </p>

      </div>

      {/* ─── GRID 2×2 ────────────────────────────────────────────────────── */}
      <div ref={refGrid} className="projects-grid stagger reveal">
        {PROJECTS.map((project, i) => (
          <div style={{ ['--index' as string]: i } as React.CSSProperties}><ProjectCard project={project} /></div>
        ))}
      </div>

    </section>
  )
}
