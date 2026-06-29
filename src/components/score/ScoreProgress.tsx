'use client'

interface ScoreProgressProps {
  current: number
  total: number
  phase: 'questions' | 'lead'
}

export default function ScoreProgress({ current, total, phase }: ScoreProgressProps) {
  const percentage = phase === 'lead'
    ? 100
    : Math.round((current / total) * 100)

  return (
    <div className="score-progress">
      <div className="score-progress-bar">
        <div
          className="score-progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="score-progress-label">
        {phase === 'lead'
          ? 'Quase lá — seus dados para o diagnóstico'
          : `${current + 1} de ${total}`}
      </div>
    </div>
  )
}
