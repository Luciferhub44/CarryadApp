import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'span' | 'h2' | 'p'
}

/** Fade-and-rise reveal driven by IntersectionObserver. */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-in')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Tag = as as 'div'
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {}

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  )
}
