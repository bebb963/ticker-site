'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import type { ScoreQuestion, ScoreResultData, LeadData } from '@/data/score-types'
import questionnaire from '@/data/score-questions.json'
import { computeFullResult } from '@/data/score-rules'
import ScoreIntro from './ScoreIntro'
import ScoreProgress from './ScoreProgress'
import ScoreQuestionCard from './ScoreQuestion'
import ScoreLeadCapture from './ScoreLeadCapture'
import ScoreResult from './ScoreResult'

type Phase = 'intro' | 'questions' | 'lead' | 'result'

export default function ScoreEngine() {
  const questions = questionnaire.questions as ScoreQuestion[]
  const totalQuestions = questions.length

  const [phase, setPhase] = useState<Phase>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<ScoreResultData | null>(null)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const startTimeRef = useRef<number>(0)

  /* Timer starts when questions begin */
  useEffect(() => {
    if (phase === 'questions' && startTimeRef.current === 0) {
      startTimeRef.current = Date.now()
    }
  }, [phase])

  const handleStart = useCallback(() => {
    setPhase('questions')
    setDirection('next')
  }, [])

  const handleAnswer = useCallback((questionId: string, answerId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerId }))

    // Auto-advance after a short delay for premium feel
    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setDirection('next')
        setCurrentIndex((i) => i + 1)
      } else {
        setPhase('lead')
      }
    }, 400)
  }, [currentIndex, totalQuestions])

  const handleBack = useCallback(() => {
    if (currentIndex > 0) {
      setDirection('prev')
      setCurrentIndex((i) => i - 1)
    } else {
      setPhase('intro')
    }
  }, [currentIndex])

  const handleLeadSubmit = useCallback(async (lead: LeadData) => {
    const fullResult = computeFullResult(questions, answers)
    setResult(fullResult)

    // Collect analytics meta
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)
    const params = new URLSearchParams(window.location.search)
    const utm: Record<string, string> = {}
    params.forEach((val, key) => {
      if (key.startsWith('utm_')) utm[key] = val
    })

    const submission = {
      lead,
      score: fullResult.score,
      answers,
      pillars: fullResult.pillars,
      opportunities: fullResult.opportunities,
      risks: fullResult.risks,
      suggestedProducts: fullResult.suggestedProducts,
      meta: {
        date: new Date().toISOString(),
        origin: window.location.href,
        utm,
        device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
        timeSpentSeconds: timeSpent,
      },
    }

    // Send to API
    try {
      await fetch('/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      })
    } catch (e) {
      console.error('Failed to submit score:', e)
    }

    setPhase('result')
  }, [questions, answers])

  const handleRestart = useCallback(() => {
    setPhase('intro')
    setCurrentIndex(0)
    setAnswers({})
    setResult(null)
    startTimeRef.current = 0
  }, [])

  return (
    <div className="score-engine">
      {/* Progress bar — visible during questions and lead capture */}
      {(phase === 'questions' || phase === 'lead') && (
        <ScoreProgress
          current={phase === 'lead' ? totalQuestions : currentIndex}
          total={totalQuestions}
          phase={phase}
        />
      )}

      {/* Phase: Intro */}
      {phase === 'intro' && <ScoreIntro onStart={handleStart} />}

      {/* Phase: Questions */}
      {phase === 'questions' && (
        <ScoreQuestionCard
          key={questions[currentIndex].id}
          question={questions[currentIndex]}
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          selectedAnswer={answers[questions[currentIndex].id] || null}
          onAnswer={handleAnswer}
          onBack={handleBack}
          direction={direction}
        />
      )}

      {/* Phase: Lead Capture */}
      {phase === 'lead' && (
        <ScoreLeadCapture onSubmit={handleLeadSubmit} />
      )}

      {/* Phase: Result */}
      {phase === 'result' && result && (
        <ScoreResult result={result} onRestart={handleRestart} />
      )}
    </div>
  )
}
