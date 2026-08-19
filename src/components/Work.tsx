import Reveal from './Reveal'
import Spiral from './Spiral'

type WorkCard = {
  index: string
  client: string
  title: string
  category: string
  result: string
  image?: string
  graphic?: boolean
}

const WORK: WorkCard[] = [
  {
    index: '01',
    client: 'Kiln & Co.',
    title: 'Every cup, a small ritual',
    category: 'Brand campaign · OOH · Film',
    result: '+212% brand recall in 8 weeks',
    image: '/assets/work-coffee.jpg',
  },
  {
    index: '02',
    client: 'Meridian Transit',
    title: 'The city moves in circles',
    category: 'OOH takeover · Motion · Wayfinding',
    result: '2.1M daily impressions, 40 city blocks',
    image: '/assets/work-transit.jpg',
  },
  {
    index: '03',
    client: 'Northfall Records',
    title: 'Press play on paper',
    category: 'Identity · Print · Social system',
    result: 'Sold-out vinyl run in 36 hours',
    graphic: true,
  },
  {
    index: '04',
    client: 'Ridgeline Supply',
    title: 'Weather is the campaign',
    category: 'Experiential · Film · Retail',
    result: 'Best outdoor campaign, 2025 Ad Circle',
    graphic: true,
  },
]

function GraphicCard({ card }: { card: WorkCard }) {
  return (
    <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden bg-[#2B2620] md:min-h-[420px]">
      <div className="animate-float-slow opacity-90">
        <Spiral size={card.index === '03' ? 260 : 300} stroke="var(--accent-on-dark)" strokeWidth={6} drawOnView sketchCore={false} />
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
        <span className="font-lora text-2xl italic leading-snug text-[#F1EAD9] md:text-3xl">
          “{card.title}”
        </span>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-grotesk text-sm font-medium uppercase tracking-[0.22em] text-[#B5301F]">
              Selected work
            </span>
            <h2 className="mt-4 max-w-2xl font-grotesk text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[#2B2620] md:text-6xl">
              Stories we’ve carried
              <br />
              <span className="font-lora font-normal italic text-[#8C8172]">and where they went.</span>
            </h2>
          </div>
          <a href="#contact" className="link-sweep hidden font-grotesk text-base font-medium text-[#2B2620] md:block">
            Become case study №05 ↗
          </a>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
        {WORK.map((card, i) => (
          <Reveal key={card.index} delay={(i % 2) * 120}>
            <a href="#contact" className="group block overflow-hidden rounded-2xl bg-[#F8F2E3] ring-1 ring-[#DFD5BE] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(43,38,32,0.35)]">
              <div className="relative aspect-[3/2] overflow-hidden">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={`${card.client}: ${card.title}`}
                    className="work-img h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <GraphicCard card={card} />
                )}
                <span className="absolute left-5 top-5 rounded-full bg-[#F1EAD9]/90 px-4 py-1.5 font-grotesk text-xs font-medium uppercase tracking-[0.18em] text-[#2B2620] backdrop-blur">
                  {card.index}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-6 md:p-7">
                <div>
                  <div className="font-grotesk text-xl font-bold tracking-tight text-[#2B2620] md:text-2xl">
                    {card.client}
                  </div>
                  <div className="mt-1 text-sm text-[#8C8172]">{card.category}</div>
                </div>
                <div className="max-w-[45%] text-right">
                  <div className="font-grotesk text-sm font-medium leading-snug text-[#B5301F]">
                    {card.result}
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
