import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 * Observa o elemento via IntersectionObserver e adiciona a classe "in-view"
 * quando ele entra na viewport, disparando a animação .reveal definida em globals.css.
 *
 * @param threshold  Fração do elemento visível para disparar (default: 0.15)
 * @returns ref      Ref a aplicar no elemento alvo
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el) // dispara só uma vez
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
