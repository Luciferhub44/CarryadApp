import { useEffect, useState } from 'react'
import Spiral from './Spiral'

const TICKER = ['Brand Campaigns', 'Film & Motion', 'OOH & Transit', 'Social Systems', 'Sound & Radio', 'Experiential']

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden pt-28 md:pt-32">
      {/* giant background spiral, draws itself in */}
      <div className="pointer-events-none absolute -right-[12%] top-[4%] opacity-[0.13] md:-right-[6%]">
        <Spiral size={720} stroke="var(--accent)" strokeWidth={5} drawOnView sketchCore={false} />
      </div>
      <div className="pointer-events-none absolute -bottom-[30%] -left-[14%] opacity-[0.07]">
        <Spiral size={560} stroke="var(--ink)" strokeWidth={5} sketchCore={false} />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] flex-1 px-6 pb-16 md:px-10">
        {/* eyebrow */}
        <div
          className={`flex items-center gap-3 transition-all duration-700 ${ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionTimingFunction: 'var(--ease-settle)' }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-[#B5301F]" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#B5301F]" />
          </span>
          <span className="font-grotesk text-sm font-medium uppercase tracking-[0.22em] text-[#8C8172]">
            Independent creative agency · Poland
          </span>
        </div>

        {/* headline */}
        <h1 className="mt-8 font-grotesk text-[13.5vw] font-bold leading-[0.92] tracking-[-0.045em] text-[#2B2620] md:text-[9.2vw] lg:text-[8.2vw]">
          {['Your story,', 'carried'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className={`block transition-all duration-1000 ${ready ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ transitionTimingFunction: 'var(--ease-settle)', transitionDelay: `${200 + i * 140}ms` }}
              >
                {line}
              </span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <span
              className={`block transition-all duration-1000 ${ready ? 'translate-y-0' : 'translate-y-full'}`}
              style={{ transitionTimingFunction: 'var(--ease-settle)', transitionDelay: '480ms' }}
            >
              <span className="text-[#B5301F]">everywhere.</span>
            </span>
          </span>
        </h1>

        {/* sub + CTA */}
        <div className="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p
            className={`max-w-md text-lg leading-relaxed text-[#2B2620]/75 transition-all delay-700 duration-1000 md:text-xl ${ready ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            style={{ transitionTimingFunction: 'var(--ease-settle)' }}
          >
            We build brand campaigns that travel, from a hand-painted wall to a six-second
            loop, without losing the{' '}
            <em className="font-lora italic text-[#2B2620]">soul of the story</em> they carry.
          </p>

          <div
            className={`flex items-center gap-5 transition-all duration-1000 [transition-delay:850ms] ${ready ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            style={{ transitionTimingFunction: 'var(--ease-settle)' }}
          >
            <a
              href="#work"
              className="group relative overflow-hidden rounded-full bg-[#B5301F] px-8 py-4 font-grotesk text-base font-medium text-[#F1EAD9] transition-transform duration-500 hover:scale-[1.04]"
              style={{ transitionTimingFunction: 'var(--ease-settle)' }}
            >
              <span className="relative z-10">See the work</span>
              <span
                className="absolute inset-0 origin-left scale-x-0 bg-[#2B2620] transition-transform duration-500 group-hover:scale-x-100"
                style={{ transitionTimingFunction: 'var(--ease-settle)' }}
              />
            </a>
            <a
              href="#contact"
              className="link-sweep font-grotesk text-base font-medium text-[#2B2620]"
            >
              Start a project ↗
            </a>
          </div>
        </div>

        {/* stat strip */}
        <div
          className={`mt-16 grid grid-cols-3 gap-6 border-t border-[#DFD5BE] pt-8 transition-all delay-1000 duration-1000 md:mt-20 md:max-w-2xl ${ready ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ transitionTimingFunction: 'var(--ease-settle)' }}
        >
          {[
            ['120+', 'campaigns shipped'],
            ['14', 'industry awards'],
            ['6', 'time zones covered'],
          ].map(([n, label]) => (
            <div key={label}>
              <div className="font-grotesk text-3xl font-bold tracking-tight text-[#2B2620] md:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-[#8C8172]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* capability ticker */}
      <div className="relative border-t border-[#DFD5BE] bg-[#F1EAD9] py-5">
        <div className="marquee-track gap-0">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {TICKER.concat(TICKER).map((item, i) => (
                <span key={`${copy}-${i}`} className="flex items-center">
                  <span className="font-grotesk text-sm font-medium uppercase tracking-[0.2em] text-[#8C8172]">
                    {item}
                  </span>
                  <span className="mx-8 inline-block h-1.5 w-1.5 rounded-full bg-[#B99B72]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
