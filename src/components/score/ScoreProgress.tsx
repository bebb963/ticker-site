'use client'

interface ScoreProgressProps {
  current: number
  total: number
  phase: 'questions' | 'lead'
}

function getMicroFeedback(current: number, total: number, phase: string): string {
  if (phase === 'lead') return 'Quase lá — preencha seus dados para o diagnóstico'

  const remaining = total - current - 1
  const percentage = Math.round(((current + 1) / total) * 100)

  if (current === 0) return 'Vamos começar'
  if (percentage >= 90) return 'Última pergunta!'
  if (percentage >= 75) return 'Você está quase terminando'
  if (remaining <= 3) return `Faltam apenas ${remaining} perguntas`
  if (percentage >= 50) return 'Mais da metade concluída'
  return `${current + 1} de ${total}`
}

export default function ScoreProgress({ current, total, phase }: ScoreProgressProps) {
  const percentage = phase === 'lead'
    ? 100
    : Math.round(((current + 1) / total) * 100)

  const feedback = getMicroFeedback(current, total, phase)

  return (
    <div className="score-progress">
      <div className="score-progress-top">
        <span className="score-progress-feedback">{feedback}</span>
        <span className="score-progress-pct">{percentage}%</span>
      </div>
      <div className="score-progress-bar">
        <div
          className="score-progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
