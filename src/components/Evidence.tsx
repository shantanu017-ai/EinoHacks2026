import { ArrowUpRight, FlaskConical } from 'lucide-react'

const metrics = [
  {
    label: 'Red-flag recall',
    target: '≥ 0.95',
    detail: 'Share of true emergencies classified red',
  },
  {
    label: 'Hallucinated findings',
    target: '0',
    detail: 'Claims with no support in the transcript',
  },
  {
    label: 'Omissions',
    target: '≤ 5%',
    detail: 'Ground-truth signs missing from the record',
  },
  {
    label: 'Correct abstention',
    target: '≥ 90%',
    detail: 'Out-of-protocol cases escalated, not guessed',
  },
  {
    label: 'ASR word error rate',
    target: '≤ 25%',
    detail: 'Hindi speech in field-like noise (tracked, not gated)',
  },
]

export default function Evidence() {
  return (
    <section id="evidence" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-600">
            Evidence
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            Measured, not promised.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Every engine change runs against a fixed set of clinician-style vignettes. These are
            acceptance targets a milestone must meet before it ships — not aspirations for the
            pitch deck.
          </p>

          <div className="mt-8 rounded-2xl border border-line bg-white p-5">
            <div className="flex items-center gap-2 text-pine-700">
              <FlaskConical size={15} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em]">Benchmark</p>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">
              A 2026 evaluation of an ambient AI scribe across{' '}
              <span className="font-medium text-ink">12,999 annotated sentences</span> found{' '}
              <span className="font-medium text-ink">1.47%</span> hallucinated and{' '}
              <span className="font-medium text-ink">3.45%</span> omitted content. Strong for
              documentation — still too high when the output drives a referral.
            </p>
            <a
              href="https://coherenthq.com/healthcare-ai-safety-gap/ai-scribe-errors-clinical-notes"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-pine-700 underline-offset-4 hover:underline"
            >
              Read the evaluation
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="border-y border-line">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="grid gap-1 border-t border-line py-5 first:border-t-0 sm:grid-cols-[1fr_auto_1.25fr] sm:items-baseline sm:gap-6"
            >
              <p className="text-sm font-semibold">{metric.label}</p>
              <p className="font-display text-2xl tracking-tight text-pine-700 sm:text-right">
                {metric.target}
              </p>
              <p className="text-[13px] leading-relaxed text-muted">{metric.detail}</p>
            </div>
          ))}
          <p className="border-t border-line py-5 text-[11px] leading-relaxed text-muted">
            Targets are acceptance criteria for the prototype, not measured results yet. The public
            demo on this page implements the interaction model only.
          </p>
        </div>
      </div>
    </section>
  )
}
