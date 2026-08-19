import Reveal from './Reveal'
import Spiral from './Spiral'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#B5301F] py-28 text-[#F1EAD9] md:py-40">
      <div className="pointer-events-none absolute -right-32 -top-32 opacity-15">
        <Spiral size={520} stroke="#F1EAD9" strokeWidth={5} sketchCore={false} />
      </div>
      <div className="pointer-events-none absolute -bottom-40 -left-24 opacity-10">
        <Spiral size={420} stroke="#2B2620" strokeWidth={5} sketchCore={false} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <span className="font-grotesk text-sm font-medium uppercase tracking-[0.24em] text-[#F1EAD9]/70">
            Next case study
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl font-grotesk text-5xl font-bold leading-[0.98] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Let’s carry
            <br />
            <span className="font-lora font-normal italic">yours.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#F1EAD9]/80">
            One email, one call, one plan. Tell us where your story needs to go,
            and we will figure out how it travels.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="mailto:info@carryad.com"
              className="group relative overflow-hidden rounded-full bg-[#2B2620] px-10 py-5 font-grotesk text-lg font-medium text-[#F1EAD9] transition-transform duration-500 hover:scale-[1.04]"
              style={{ transitionTimingFunction: 'var(--ease-settle)' }}
            >
              <span className="relative z-10">info@carryad.com</span>
              <span
                className="absolute inset-0 origin-bottom scale-y-0 bg-[#F1EAD9] transition-transform duration-500 group-hover:scale-y-100"
                style={{ transitionTimingFunction: 'var(--ease-settle)' }}
              />
              <span className="absolute inset-0 z-10 flex items-center justify-center font-grotesk text-lg font-medium text-[#B5301F] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                info@carryad.com
              </span>
            </a>
            <a
              href="https://instagram.com/carryad.agency"
              target="_blank"
              rel="noreferrer"
              className="link-sweep font-grotesk text-lg font-medium text-[#F1EAD9]"
            >
              @carryad.agency
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
