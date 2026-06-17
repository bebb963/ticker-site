import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 * Observa o elemento via IntersectionObserver e adiciona a classe "in-view"
 * quando ele entra na viewport, disparando a animação .reveal definida em globals.css.
 *
 * ROBUSTEZ: Inclui fallback de segurança — se o observer não disparar em 1.5s,
 * força a exibição do elemento. Isso evita o problema recorrente de texto
 * invisível quando o JS/hydration falha.
 *
 * @param threshold  Fração do elemento visível para disparar (default: 0.15)
 * @returns ref      Ref a aplicar no elemento alvo
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Se o elemento já tem in-view, não precisa observar
    if (el.classList.contains('in-view')) return

    // Fallback de segurança: se o observer não disparar em 1.5s, mostra o
    // elemento de qualquer forma. Isso evita conteúdo invisível permanente.
    const fallbackTimer = setTimeout(() => {
      if (!el.classList.contains('in-view')) {
        el.classList.add('in-view')
      }
    }, 1500)

    // Verificar se IntersectionObserver está disponível
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('in-view')
      clearTimeout(fallbackTimer)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el) // dispara só uma vez
          clearTimeout(fallbackTimer)
        }
      },
      { threshold }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [threshold])

  return ref
}
