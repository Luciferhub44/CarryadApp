import { useEffect, useState } from 'react'
import Spiral from './Spiral'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Journal', href: '#journal' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#F1EAD9]/85 backdrop-blur-md border-b border-[#DFD5BE]' : 'bg-transparent'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-settle)' }}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="CarryAd home">
          <Spiral size={34} strokeWidth={10} sketchCore={false} />
          <img
            src="/assets/carryad-wordmark.png"
            alt="carryad."
            className="h-5 w-auto md:h-6"
          />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link-sweep font-grotesk text-[15px] font-medium tracking-tight text-[#2B2620]/80 hover:text-[#2B2620]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-[#2B2620] px-6 py-2.5 font-grotesk text-[15px] font-medium text-[#F1EAD9] transition-transform duration-500 hover:scale-[1.03]"
            style={{ transitionTimingFunction: 'var(--ease-settle)' }}
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F1EAD9]">
              Start a project
            </span>
            <span
              className="absolute inset-0 origin-bottom scale-y-0 bg-[#B5301F] transition-transform duration-500 group-hover:scale-y-100"
              style={{ transitionTimingFunction: 'var(--ease-settle)' }}
            />
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`h-[2px] w-6 bg-[#2B2620] transition-all duration-300 ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
          <span className={`h-[2px] w-6 bg-[#2B2620] transition-all duration-300 ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden bg-[#F1EAD9]/95 backdrop-blur-md transition-all duration-500 md:hidden ${
          open ? 'max-h-96 border-b border-[#DFD5BE]' : 'max-h-0'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-settle)' }}
      >
        <div className="flex flex-col gap-5 px-6 py-8">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-grotesk text-2xl font-medium text-[#2B2620]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 w-fit rounded-full bg-[#B5301F] px-6 py-3 font-grotesk font-medium text-[#F1EAD9]"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  )
}
