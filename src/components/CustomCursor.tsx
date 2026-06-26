'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * CustomCursor — Cursor interativo estilo "The Simple Gym"
 * 
 * Ponto sólido pequeno que segue o mouse com atraso suave (lerp),
 * expande ao passar sobre links/botões, e desaparece em dispositivos touch.
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  // Posição atual e alvo (para lerp)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Detecta se é dispositivo touch
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      setIsTouch(true)
      return
    }

    // Adiciona classe ao body para ocultar cursor nativo
    document.body.classList.add('custom-cursor-active')

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      setIsHidden(false)
    }

    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    // Detecta hover sobre elementos interativos
    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (
        el.closest('a') ||
        el.closest('button') ||
        el.closest('[role="button"]') ||
        el.closest('.hero-bubble') ||
        el.closest('.cta-primary') ||
        el.closest('.btn-text') ||
        el.closest('input') ||
        el.closest('textarea') ||
        el.closest('select')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (
        el.closest('a') ||
        el.closest('button') ||
        el.closest('[role="button"]') ||
        el.closest('.hero-bubble') ||
        el.closest('.cta-primary') ||
        el.closest('.btn-text') ||
        el.closest('input') ||
        el.closest('textarea') ||
        el.closest('select')
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    // Animação lerp
    let rafId: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15)

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  // Não renderiza em dispositivos touch
  if (isTouch) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'is-hovering' : ''} ${isHidden ? 'is-hidden' : ''}`}
      aria-hidden="true"
    />
  )
}
