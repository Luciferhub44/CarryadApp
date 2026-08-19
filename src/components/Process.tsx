import Reveal from './Reveal'

const STEPS = [
  {
    week: 'Week 0-2',
    title: 'Listen',
    body: 'We embed with your team, your customers, and your streets. No brief is accepted at face value.',
  },
  {
    week: 'Week 3-5',
    title: 'Sketch',
    body: 'Three territories, drawn by hand first. You react to feeling, not to a deck of stock photos.',
  },
  {
    week: 'Week 6-9',
    title: 'Build',
    body: 'The chosen story becomes a system: film, OOH, social, sound. Everything shares one spine.',
  },
  {
    week: 'Week 10+',
    title: 'Carry',
    body: 'We launch, measure, and hand you the toolkit, then stay on call while it travels.',
  },
]

export default function Process() {
  return (
    <section className="border-y border-[#DFD5BE] bg-[#F8F2E3] py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-grotesk text-sm font-medium uppercase tracking-[0.22em] text-[#B5301F]">
                How it moves
              </span>
              <h2 className="mt-4 font-grotesk text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[#2B2620] md:text-6xl">
                Ten weeks, start to street
              </h2>
            </div>
            <p className="max-w-sm text-[#8C8172]">
              Fast in, heavy settle, no bounces. The same physics we animate with.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-[#DFD5BE] ring-1 ring-[#DFD5BE] md:mt-20 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="h-full">
              <div className="group flex h-full flex-col bg-[#F8F2E3] p-8 transition-colors duration-500 hover:bg-[#2B2620] md:p-9">
                <span className="font-grotesk text-sm font-medium uppercase tracking-[0.18em] text-[#8C8172] transition-colors duration-500 group-hover:text-[#D96A4A]">
                  {s.week}
                </span>
                <h3 className="mt-6 font-grotesk text-3xl font-bold tracking-tight text-[#2B2620] transition-colors duration-500 group-hover:text-[#F1EAD9]">
                  {s.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[#2B2620]/70 transition-colors duration-500 group-hover:text-[#F1EAD9]/70">
                  {s.body}
                </p>
                <span className="mt-auto pt-8 font-grotesk text-5xl font-bold text-[#DFD5BE] transition-colors duration-500 group-hover:text-[#B5301F]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
