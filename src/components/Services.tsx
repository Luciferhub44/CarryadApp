import { useState } from 'react'
import Reveal from './Reveal'

const SERVICES = [
  {
    title: 'Brand Campaigns',
    desc: 'The big idea, written to travel. Strategy, concept, and a system that survives every resize.',
    tags: ['Strategy', 'Concept', 'Art direction'],
  },
  {
    title: 'Media & Motion',
    desc: 'From 90-second anthems to six-second loops. Directed, shot, and cut in-house.',
    tags: ['Direction', 'Edit', 'Sound design'],
  },  
  {
    title: 'Social Systems',
    desc: 'Not a content calendar. A story engine. Formats your team can run without us.',
    tags: ['Formats', 'Toolkits', 'Playbooks'],
  },
  {
    title: 'Identity & Design',
    desc: 'Wordmarks, palettes, motion languages. Built like ours: one geometry, three voices.',
    tags: ['Identity', 'Type', 'Motion'],
  },
  {
    title: 'Experiential',
    desc: 'Installations, pop-ups, and stunts people photograph before they understand.',
    tags: ['Installations', 'Pop-ups', 'Stunts'],
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <Reveal>
        <span className="font-grotesk text-sm font-medium uppercase tracking-[0.22em] text-[#B5301F]">
          What we carry
        </span>
        <h2 className="mt-4 max-w-3xl font-grotesk text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[#2B2620] md:text-6xl">
          Five ways in,
          <span className="font-lora font-normal italic text-[#8C8172]"> one story out.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        {/* index list */}
        <Reveal>
          <div className="flex flex-col">
            {SERVICES.map((s, i) => (
              <button
                key={s.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group flex items-center justify-between border-b border-[#DFD5BE] py-5 text-left transition-colors duration-300 ${
                  active === i ? 'text-[#B5301F]' : 'text-[#2B2620]'
                }`}
              >
                <span className="font-grotesk text-2xl font-bold tracking-tight md:text-3xl">
                  {s.title}
                </span>
                <span
                  className={`font-grotesk text-2xl transition-transform duration-500 ${
                    active === i ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-settle)' }}
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* active detail panel */}
        <Reveal delay={150}>
          <div className="sticky top-28 rounded-2xl bg-[#F8F2E3] p-8 ring-1 ring-[#DFD5BE] md:p-12">
            <div className="font-grotesk text-sm font-medium uppercase tracking-[0.22em] text-[#8C8172]">
              {String(active + 1).padStart(2, '0')} / 06
            </div>
            <h3 className="mt-4 font-grotesk text-3xl font-bold tracking-tight text-[#2B2620] md:text-4xl">
              {SERVICES[active].title}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-[#2B2620]/75">
              {SERVICES[active].desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {SERVICES[active].tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#DFD5BE] bg-[#F1EAD9] px-4 py-1.5 font-grotesk text-sm font-medium text-[#2B2620]"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-10 inline-block rounded-full bg-[#2B2620] px-7 py-3.5 font-grotesk text-sm font-medium text-[#F1EAD9] transition-colors duration-300 hover:bg-[#B5301F]"
            >
              Ask about {SERVICES[active].title.toLowerCase()}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
