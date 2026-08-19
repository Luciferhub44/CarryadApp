import Spiral from './Spiral'

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/carryad.agency' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/carryad.agency' },
  { label: 'Behance', href: 'https://behance.net/carryad' },
  { label: 'Are.na', href: 'https://are.na/carryad' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2B2620] pb-10 pt-20 text-[#F1EAD9]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Spiral size={38} stroke="#D96A4A" strokeWidth={10} sketchCore={false} />
              <span className="font-grotesk text-2xl font-medium tracking-[-0.045em]">
                carry<span className="font-bold text-[#D96A4A]">ad</span>
                <span className="font-bold">.</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs font-lora italic leading-relaxed text-[#F1EAD9]/60">
              Your story, carried everywhere.
            </p>
            <p className="mt-4 font-grotesk text-sm tracking-wide text-[#F1EAD9]/45">
              @carryad.agency on all social
            </p>
          </div>

          <div>
            <h4 className="font-grotesk text-sm font-medium uppercase tracking-[0.2em] text-[#F1EAD9]/40">
              Studio
            </h4>
            <ul className="mt-5 space-y-3">
              <li className="text-[#F1EAD9]/75">Poznań, Poland</li>
              <li className="text-[#F1EAD9]/75">Working worldwide</li>
              <li className="text-[#F1EAD9]/75">Est. 2026</li>
            </ul>
          </div>

          <div>
            <h4 className="font-grotesk text-sm font-medium uppercase tracking-[0.2em] text-[#F1EAD9]/40">
              Connect
            </h4>
            <ul className="mt-5 space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-sweep text-[#F1EAD9]/75 transition-colors hover:text-[#F1EAD9]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-grotesk text-sm font-medium uppercase tracking-[0.2em] text-[#F1EAD9]/40">
              New business
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:info@carryad.com"
                  className="link-sweep text-[#F1EAD9]/75 transition-colors hover:text-[#F1EAD9]"
                >
                  info@carryad.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="link-sweep text-[#F1EAD9]/75 transition-colors hover:text-[#F1EAD9]"
                >
                  Press kit ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#F1EAD9]/12 pt-8 text-sm text-[#F1EAD9]/40 md:flex-row md:items-center">
          <span>© 2026 CarryAd, Warsaw. All stories belong to their tellers.</span>
          <span className="font-grotesk tracking-wide">
            One geometry, three voices. Mouth opens right.
          </span>
        </div>
      </div>
    </footer>
  )
}
