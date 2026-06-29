import Link from 'next/link'
import Logo from '@/components/Logo'
import ScoreEngine from '@/components/score/ScoreEngine'

export default function ScorePage() {
  return (
    <main className="score-page">
      {/* Minimal header */}
      <header className="score-header">
        <Link href="/" aria-label="Ticker - Home" className="score-header-logo">
          <Logo variant="dark" />
        </Link>
      </header>

      <ScoreEngine />
    </main>
  )
}
