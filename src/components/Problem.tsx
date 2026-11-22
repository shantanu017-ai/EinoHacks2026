import { ArrowUpRight, BookOpen, FileText, WifiOff } from 'lucide-react'

const problems = [
  {
    icon: BookOpen,
    title: 'Protocol lives on paper',
    body: 'Frontline workers carry national screening protocols in memory and on dog-eared charts. There is no point-of-care decision support when a mother is bleeding at 9pm.',
  },
  {
    icon: WifiOff,
    title: 'Connectivity is not guaranteed',
    body: 'Cloud-only AI tools assume broadband and powered devices. The villages that need triage support the most are exactly where the signal drops.',
  },
  {
    icon: FileText,
    title: 'Records never arrive',
    body: 'Handwritten notes, lost referral slips, and no feedback loop mean the PHC sees the patient without the screening that flagged them.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-600">
          The problem
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
          The gap isn&apos;t intelligence. It&apos;s access.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          India has the protocols, the workforce, and increasingly the models. What it lacks is a
          tool that works in a low-signal village, in the health worker&apos;s own language, without
          asking her to become a data-entry clerk.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {problems.map((problem, index) => (
          <article
            key={problem.title}
            className="group rounded-2xl border border-line bg-white p-6 transition-colors hover:border-pine-300"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-xl bg-pine-50 text-pine-700">
                <problem.icon size={20} />
              </span>
              <span className="font-display text-sm text-muted/60">0{index + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{problem.title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{problem.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-saffron-200 bg-saffron-100/60 p-6 sm:p-8">
        <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
          “India&apos;s AI policy has prioritised compute and models. A voice-first protocol
          assistant for its one million ASHA workers could deliver far more at the last mile.”
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted">
            The case made in{' '}
            <span className="font-medium text-ink">Protocol in Every Pocket</span> — Observer
            Research Foundation, 2026
          </p>
          <a
            href="https://www.orfonline.org/expert-speak/protocol-in-every-pocket-ai-at-india-s-healthcare-frontline"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-saffron-600 underline-offset-4 hover:underline"
          >
            Read the essay
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
