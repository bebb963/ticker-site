'use client'

import { ArrowLeft } from 'lucide-react'
import type { ScoreQuestion } from '@/data/score-types'

interface ScoreQuestionProps {
  question: ScoreQuestion
  questionNumber: number
  totalQuestions: number
  selectedAnswer: string | null
  onAnswer: (questionId: string, answerId: string) => void
  onBack: () => void
  direction: 'next' | 'prev'
}

export default function ScoreQuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onAnswer,
  onBack,
  direction,
}: ScoreQuestionProps) {
  return (
    <div
      className={`score-question score-slide-${direction}`}
    >
      <div className="score-question-inner">
        {/* Category badge */}
        <div className="score-question-category">
          {question.category}
        </div>

        {/* Question text */}
        <h2 className="score-question-text">
          {question.text}
        </h2>

        {/* Answer options */}
        <div className="score-question-answers">
          {question.answers.map((answer, idx) => (
            <button
              key={answer.id}
              onClick={() => onAnswer(question.id, answer.id)}
              className={`score-answer-btn ${selectedAnswer === answer.id ? 'selected' : ''}`}
            >
              <span className="score-answer-letter">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="score-answer-text">
                {answer.text}
              </span>
            </button>
          ))}
        </div>

        {/* Back button */}
        <button onClick={onBack} className="score-back-btn">
          <ArrowLeft size={16} />
          <span>{questionNumber === 1 ? 'Voltar ao início' : 'Pergunta anterior'}</span>
        </button>
      </div>
    </div>
  )
}
