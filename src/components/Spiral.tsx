import { useEffect, useMemo, useRef, useState } from 'react'

type SpiralProps = {
  size?: number
  stroke?: string
  strokeWidth?: number
  className?: string
  /** auto-draw when scrolled into view */
  drawOnView?: boolean
  /** sketchier hand-drawn core ring */
  sketchCore?: boolean
}

/**
 * carryad Fusion mark: clean geometric spiral, mouth opens right.
 * Monoline, round caps: same stroke language as the brand.
 */
export default function Spiral({
  size = 240,
  stroke = 'var(--ink)',
  strokeWidth = 7,
  className = '',
  drawOnView = false,
  sketchCore = true,
}: SpiralProps) {
  const ref = useRef<SVGSVGElement>(null)
  const [drawn, setDrawn] = useState(!drawOnView)

  const { path, corePath } = useMemo(() => {
    const cx = 120
    const cy = 120
    const turns = 2.7
    const rMax = 104
    const rMin = 14
    const pts: string[] = []
    const n = 420
    for (let i = 0; i <= n; i++) {
      const t = i / n
      const ang = t * turns * Math.PI * 2 // starts at angle 0 (right) → mouth opens right
      const r = rMax - t * (rMax - rMin)
      pts.push(`${i === 0 ? 'M' : 'L'} ${(cx + r * Math.cos(ang)).toFixed(1)} ${(cy - r * Math.sin(ang)).toFixed(1)}`)
    }
    // hand-sketch core: small wobbly inner loop
    const core: string[] = []
    const m = 60
    for (let i = 0; i <= m; i++) {
      const t = i / m
      const ang = t * Math.PI * 2.2 + 0.4
      const r = 9 + Math.sin(t * 14) * 1.6 + t * 4
      core.push(`${i === 0 ? 'M' : 'L'} ${(cx + r * Math.cos(ang)).toFixed(1)} ${(cy - r * Math.sin(ang)).toFixed(1)}`)
    }
    return { path: pts.join(' '), corePath: core.join(' ') }
  }, [])

  useEffect(() => {
    if (!drawOnView) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDrawn(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [drawOnView])

  return (
    <svg
      ref={ref}
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d={path}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`spiral-path ${drawn ? 'is-drawn' : ''}`}
      />
      {sketchCore && (
        <path
          d={corePath}
          stroke={stroke}
          strokeWidth={strokeWidth * 0.55}
          strokeLinecap="round"
          opacity={0.65}
          className={`spiral-path ${drawn ? 'is-drawn' : ''}`}
          style={{ ['--dash' as never]: 400, animationDelay: '1.6s' }}
        />
      )}
    </svg>
  )
}
