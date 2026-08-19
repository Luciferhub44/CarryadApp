import Reveal from './Reveal'
import Spiral from './Spiral'

const POSTS = [
  {
    tag: 'Field notes',
    title: 'Why we still sketch every idea on paper first',
    date: 'Aug 2026',
  },
  {
    tag: 'Case anatomy',
    title: 'Painting forty blocks of Meridian red: the logistics nobody budgets for',
    date: 'Jul 2026',
  },
  {
    tag: 'Opinion',
    title: 'The six-second loop is a haiku, not a compromise',
    date: 'Jun 2026',
  },
]

export default function Journal() {
  return (
    <section id="journal" className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-36">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-grotesk text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[#2B2620] md:text-5xl">
            From the journal
          </h2>
          <a href="#contact" className="link-sweep hidden font-grotesk text-base font-medium text-[#2B2620] md:block">
            All entries ↗
          </a>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
        {POSTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <a
              href="#contact"
              className="group flex h-full flex-col rounded-2xl bg-[#F8F2E3] p-8 ring-1 ring-[#DFD5BE] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(43,38,32,0.3)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[#DFD5BE] px-3.5 py-1 font-grotesk text-xs font-medium uppercase tracking-[0.16em] text-[#8C8172]">
                  {p.tag}
                </span>
                <Spiral size={36} stroke="var(--support)" strokeWidth={9} sketchCore={false} />
              </div>
              <h3 className="mt-8 font-grotesk text-2xl font-bold leading-snug tracking-tight text-[#2B2620] transition-colors duration-300 group-hover:text-[#B5301F]">
                {p.title}
              </h3>
              <div className="mt-auto flex items-center justify-between pt-8 text-sm text-[#8C8172]">
                <span>{p.date}</span>
                <span className="font-grotesk transition-transform duration-500 group-hover:translate-x-1.5" style={{ transitionTimingFunction: 'var(--ease-settle)' }}>
                  Read →
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
