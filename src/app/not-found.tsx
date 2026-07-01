import Link from 'next/link'

export default function NotFound() {
  return (
    <main 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0E1011',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '24px'
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        <h1 
          style={{ 
            fontFamily: "'Anantason Expanded', sans-serif", 
            fontSize: 'clamp(48px, 8vw, 96px)',
            color: 'var(--accent)',
            margin: '0 0 16px 0',
            lineHeight: 1
          }}
        >
          404
        </h1>
        <h2 
          style={{ 
            fontFamily: "'Anantason Expanded', sans-serif", 
            fontSize: 'clamp(24px, 4vw, 32px)',
            margin: '0 0 24px 0'
          }}
        >
          Página não encontrada
        </h2>
        <p 
          style={{ 
            fontFamily: "'Open Sauce One', sans-serif", 
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            margin: '0 0 48px 0',
            lineHeight: 1.5
          }}
        >
          A página que você está procurando não existe, mudou de endereço ou está temporariamente indisponível.
        </p>
        <Link href="/" className="cta-primary" style={{ display: 'inline-flex' }}>
          Voltar ao inicio
        </Link>
      </div>
    </main>
  )
}
