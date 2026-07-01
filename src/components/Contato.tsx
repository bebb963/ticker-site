'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Contato() {
  const refHeader = useScrollReveal<HTMLDivElement>()
  const refForm = useScrollReveal<HTMLFormElement>()
  const refReviews = useScrollReveal<HTMLDivElement>()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim() || !mensagem.trim() || !email.trim()) {
      alert('Por favor, preencha os campos obrigatórios.')
      return
    }

    if (loading) return
    setLoading(true)

    const leadData = { nome, email, empresa: '', mensagem }

    // Captura via /api/lead em best-effort
    try {
      await Promise.race([
        fetch('/api/lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 2000))
      ])
    } catch (err) {
      console.warn('API Lead capture failed or timed out (best-effort):', err)
    }

    // WhatsApp Message
    const formattedMessage = `Olá Ticker!\n\nEstou entrando em contato através do formulário do site.\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Mensagem:* ${mensagem}`
    const whatsappNumber = '5519974282887' // Número fornecido
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`

    window.location.href = waUrl
    setLoading(false)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(14,16,17,0.15)',
    padding: '16px 0',
    fontFamily: "'Open Sauce One', sans-serif",
    fontSize: '22px', // Slightly reduced to fit 3 fields well
    color: 'var(--color-text-default)',
    outline: 'none',
    transition: 'border-color 0.2s ease'
  }

  return (
    <section
      id="contato"
      aria-label="Contato"
      className="section-massive"
      style={{
        background: 'var(--ds-bg-muted)',
        color: 'var(--color-text-default)',
      }}
    >
      <div className="container-content">
        
        {/* Faixa Google Reviews */}
        <div ref={refReviews} className="reveal google-reviews-strip" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          alignItems: 'center',
          paddingBottom: '64px',
          marginBottom: '64px',
          borderBottom: '1px solid rgba(14,16,17,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingRight: '24px', borderRight: '1px solid rgba(14,16,17,0.1)' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 700, fontSize: '18px' }}>Google</span>
              <span style={{ fontSize: '12px', color: 'rgba(14,16,17,0.6)' }}>Avaliações Verificadas</span>
            </div>
            <div style={{ display: 'flex', color: '#F59E0B', fontSize: '20px' }}>
              ★★★★★
            </div>
          </div>
          
          <div style={{ flex: 1, minWidth: '240px' }}>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '14px', color: 'rgba(14,16,17,0.7)', lineHeight: 1.5 }}>
              &quot;Visão estratégica e execução impecável. Mudou nossa percepção de mercado.&quot;
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '14px', color: 'rgba(14,16,17,0.7)', lineHeight: 1.5 }}>
              &quot;A Ticker não apenas executa, mas ajuda a pensar o negócio a longo prazo.&quot;
            </p>
          </div>
        </div>

        <div className="grid-split">
          {/* Coluna Esquerda */}
          <div ref={refHeader} className="reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="section-label">(Contato)</span>

            <h2 className="section-statement" style={{ color: 'var(--color-text-default)', marginTop: '16px', marginBottom: '24px' }}>
              Vamos conversar sobre o seu negocio.
            </h2>
            
            <p className="section-support" style={{ margin: '0 0 32px 0' }}>
              Conte o que voce quer construir. A Ticker comeca entendendo.
            </p>

            <p style={{ fontFamily: "'Open Sauce One', sans-serif", fontSize: '15px', color: 'rgba(14,16,17,0.6)', lineHeight: 1.6, margin: 0, maxWidth: '420px' }}>
              Mais de dez anos de experiencia em marketing, em projetos de complexidades diferentes.
            </p>
          </div>

          {/* Coluna Direita (Formulário) */}
          <form ref={refForm} className="stagger reveal" style={{ display: 'flex', flexDirection: 'column', gap: '48px', paddingTop: '16px' }} onSubmit={handleSubmit}>
            <div style={{ ['--index' as string]: 0 } as React.CSSProperties}>
              <input
                type="text"
                placeholder="Nome"
                aria-label="Seu Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(14,16,17,0.6)')}
                onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(14,16,17,0.15)')}
              />
            </div>

            <div style={{ ['--index' as string]: 1 } as React.CSSProperties}>
              <input
                type="email"
                placeholder="E-mail"
                aria-label="Seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(14,16,17,0.6)')}
                onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(14,16,17,0.15)')}
              />
            </div>

            <div style={{ ['--index' as string]: 2 } as React.CSSProperties}>
              <textarea
                placeholder="Como podemos ajudar?"
                aria-label="Sua mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
                rows={3}
                style={{
                  ...inputStyle,
                  resize: 'none',
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(14,16,17,0.6)')}
                onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(14,16,17,0.15)')}
              />
            </div>

            <div style={{ ['--index' as string]: 3, marginTop: '16px' } as React.CSSProperties}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: "'Open Sauce One', sans-serif",
                  fontSize: '22px',
                  fontWeight: 600,
                  color: 'var(--color-text-default)',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid var(--accent)',
                  padding: '0 0 4px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'inline-block',
                  transition: 'opacity 0.2s ease',
                  opacity: loading ? 0.5 : 1
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = '0.7' }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.opacity = '1' }}
              >
                {loading ? 'Processando...' : 'Falar no WhatsApp'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
