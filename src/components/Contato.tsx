'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Contato() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refForm = useScrollReveal<HTMLFormElement>()

  return (
    <section 
      id="contato" 
      aria-label="Contato" 
      className="section-massive"
      style={{ 
        background: '#0E1011', 
        color: '#FFFFFF'
      }}
    >
      <div className="grid-split">
        {/* Coluna Esquerda */}
        <div ref={refHeader} className="reveal" style={{ paddingRight: '96px' }}>
          <span style={{
            fontFamily: "'DM Serif Text', serif",
            fontStyle: 'italic',
            fontSize: '32px',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.4)',
            display: 'block',
            marginBottom: '32px',
          }}>
            (Contato)
          </span>
          <h2 style={{
            fontFamily: "'Anton SC', sans-serif",
            fontSize: 'clamp(60px, 8vw, 120px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '-1px',
            color: '#FFFFFF',
            margin: '0 0 32px'
          }}>
            Vamos<br/>conversar.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '22px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            marginBottom: '48px'
          }}>
            Se você entende o valor de construir com base em direção, envie-nos uma mensagem.
          </p>

          <div>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '16px',
              color: '#FFFFFF',
              display: 'block',
              marginBottom: '8px'
            }}>
              Email
            </span>
            <a href="mailto:bruno@tickermkt.com.br" style={{
              fontFamily: "'DM Serif Text', serif",
              fontStyle: 'italic',
              fontSize: '24px',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none'
            }}>
              bruno@tickermkt.com.br
            </a>
          </div>
        </div>

        {/* Coluna Direita (Formulário) */}
        <form ref={refForm} className="stagger reveal" style={{ display: 'flex', flexDirection: 'column', gap: '64px', paddingTop: '16px' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ ['--index' as string]: 0 } as React.CSSProperties}>
            <input 
              type="text" 
              placeholder="Nome"
              aria-label="Seu Nome"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '16px 0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                color: '#FFFFFF',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
              onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)')}
            />
          </div>

          <div style={{ ['--index' as string]: 1 } as React.CSSProperties}>
            <input 
              type="email" 
              placeholder="E-mail corporativo"
              aria-label="Seu E-mail"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '16px 0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                color: '#FFFFFF',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
              onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)')}
            />
          </div>

          <div style={{ ['--index' as string]: 2 } as React.CSSProperties}>
            <input 
              type="text" 
              placeholder="Nome da empresa"
              aria-label="Empresa"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '16px 0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                color: '#FFFFFF',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
              onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)')}
            />
          </div>

          <div style={{ ['--index' as string]: 3 } as React.CSSProperties}>
            <textarea 
              placeholder="Como podemos te ajudar?"
              aria-label="Sua mensagem"
              rows={4}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '16px 0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                color: '#FFFFFF',
                outline: 'none',
                resize: 'none'
              }}
              onFocus={(e) => (e.target.style.borderBottom = '1px solid #FFFFFF')}
              onBlur={(e) => (e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)')}
            />
          </div>

          <div style={{ ['--index' as string]: 4 } as React.CSSProperties}>
            <button type="submit" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '22px',
              fontWeight: 600,
              color: '#FFFFFF',
              background: 'transparent',
              border: 'none',
              borderBottom: '2px solid #FFFFFF',
              padding: '0 0 4px',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
