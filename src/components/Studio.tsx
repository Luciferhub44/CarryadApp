import Reveal from './Reveal'
import Spiral from './Spiral'

const PRINCIPLES = [
  {
    n: '01',
    title: 'One story, many surfaces',
    body: 'A campaign is a story that travels. We write it once, then carry it faithfully across wall, feed, film, and radio, so it never thins out on the way.',
  },
  {
    n: '02',
    title: 'Hand first, system second',
    body: 'Every CarryAd mark starts as a sketch. The rough stays at the core; the clean geometry grows around it. Machines scale it, humans sign it.',
  },
  {
    n: '03',
    title: 'Heat, used sparingly',
    body: 'Our accent appears at most twice on any surface. Restraint is what makes a brick-red spiral impossible to scroll past.',
  },
]

export default function Studio() {
  return (
    <section id="studio" className="relative overflow-hidden bg-[#2B2620] py-28 text-[#F1EAD9] md:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 opacity-[0.08]">
        <Spiral size={640} stroke="var(--accent-on-dark)" strokeWidth={5} sketchCore={false} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <span className="font-grotesk text-sm font-medium uppercase tracking-[0.22em] text-[#D96A4A]">
                The agency
              </span>
              <h2 className="mt-4 font-grotesk text-4xl font-bold leading-[1.02] tracking-[-0.03em] md:text-6xl">
                A small crew with a
                <span className="text-[#D96A4A]"> long reach</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#F1EAD9]/70">
                CarryAd is three strategists, writers, designers, and Media Experts based in
                Poland, working with brands on three continents. We stay deliberately small: the
                people in your first meeting are the people who ship your campaign.
              </p>
              <p className="mt-5 max-w-xl font-lora text-xl italic leading-relaxed text-[#F1EAD9]/85">
                “An ad you remember is a story someone bothered to tell properly.”
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#F1EAD9]/15 pt-8">
                {[
                  ['3', 'humans, no layers'],
                  ['2026', 'est. in Poland'],
                  ['0', 'account managers'],
                ].map(([n, label]) => (
                  <div key={label}>
                    <div className="font-grotesk text-3xl font-bold tracking-tight md:text-4xl">{n}</div>
                    <div className="mt-1 text-sm text-[#F1EAD9]/50">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-5">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <div className="group rounded-2xl border border-[#F1EAD9]/12 bg-[#F1EAD9]/[0.03] p-7 transition-colors duration-500 hover:border-[#D96A4A]/40 hover:bg-[#F1EAD9]/[0.06] md:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-grotesk text-sm font-medium text-[#D96A4A]">{p.n}</span>
                    <h3 className="font-grotesk text-xl font-bold tracking-tight md:text-2xl">{p.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-[#F1EAD9]/65">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
