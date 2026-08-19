import { useEffect, useState } from 'react'
import Reveal from './Reveal'

const QUOTES = [
  {
    quote:
      'CarryAd painted our story on forty city blocks and somehow it still felt like a letter written to one person.',
    name: 'Mara Ellison',
    role: 'CMO, Meridian Transit',
  },
  {
    quote:
      'They killed three of our favorite ideas and were right every time. The one that survived sold out in a day and a half.',
    name: 'Juno Park',
    role: 'Founder, Northfall Records',
  },
  {
    quote:
      'Eleven people out-delivered the eighty-person network agency we used before. I stopped asking how.',
    name: 'Tomas Berg',
    role: 'Brand Director, Ridgeline Supply',
  },
]

export default function Voices() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.4fr] lg:gap-24">
        <Reveal>
          <span className="font-grotesk text-sm font-medium uppercase tracking-[0.22em] text-[#B5301F]">
            Word of mouth
          </span>
          <h2 className="mt-4 font-grotesk text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[#2B2620] md:text-5xl">
            Carried back
            <br />
            <span className="font-lora font-normal italic text-[#8C8172]">to us.</span>
          </h2>
          <div className="mt-10 flex gap-3">
            {QUOTES.map((_, qi) => (
              <button
                key={qi}
                onClick={() => setI(qi)}
                aria-label={`Quote ${qi + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  qi === i ? 'w-10 bg-[#B5301F]' : 'w-4 bg-[#DFD5BE] hover:bg-[#B99B72]'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-settle)' }}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative min-h-[260px] md:min-h-[240px]">
            {QUOTES.map((q, qi) => (
              <blockquote
                key={q.name}
                className={`absolute inset-0 transition-all duration-700 ${
                  qi === i ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-settle)' }}
              >
                <p className="font-lora text-2xl italic leading-snug text-[#2B2620] md:text-[2.1rem]">
                  “{q.quote}”
                </p>
                <footer className="mt-8">
                  <div className="font-grotesk text-base font-bold text-[#2B2620]">{q.name}</div>
                  <div className="text-sm text-[#8C8172]">{q.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
