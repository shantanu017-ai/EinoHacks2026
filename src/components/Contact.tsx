import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
      <div className="rounded-3xl border border-pine-200 bg-pine-50 px-6 py-12 text-center sm:px-12 lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-600">
          Get involved
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
          Help us pressure-test the first version.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          We are looking for clinicians to review protocol excerpts, ASHA workers to test the flow,
          and engineers to audit the offline sync. Feedback that breaks the tool is the most useful
          kind.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@sahayak.example?subject=Sahayak%20prototype%20feedback"
            className="inline-flex items-center gap-2 rounded-full bg-pine-800 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-pine-700"
          >
            Email the project
            <ArrowRight size={16} />
          </a>
          <a
            href="https://www.orfonline.org/expert-speak/protocol-in-every-pocket-ai-at-india-s-healthcare-frontline"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-pine-300 bg-white px-6 py-3 text-sm font-medium text-pine-800 transition-colors hover:bg-pine-100"
          >
            Read the research
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="mt-6 text-[11px] text-muted">
          Replace the placeholder address before publishing this page.
        </p>
      </div>
    </section>
  )
}
