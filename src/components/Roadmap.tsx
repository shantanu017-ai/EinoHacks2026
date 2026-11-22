const milestones = [
  {
    code: 'M0',
    weeks: 'Weeks 1–2',
    title: 'Protocol engine + validator',
    body: 'Versioned protocol files, a deterministic evaluator, and CI that rejects unreachable nodes or dangling variables.',
  },
  {
    code: 'M1',
    weeks: 'Weeks 3–4',
    title: 'Tap-only flow, offline records',
    body: 'Intake → questions → risk → SQLite history, with airplane mode on the whole time.',
  },
  {
    code: 'M2',
    weeks: 'Week 5',
    title: 'Referral slip + sharing',
    body: 'One-page offline PDF with findings, action, protocol version, and share/print fallbacks.',
  },
  {
    code: 'M3',
    weeks: 'Weeks 6–8',
    title: 'Offline speech',
    body: 'Vosk Hindi ASR and device TTS, with mandatory read-back confirmation before any answer is committed.',
  },
  {
    code: 'M4',
    weeks: 'Weeks 9–10',
    title: 'Sync + PHC backend',
    body: 'Idempotent outbox sync, retry with backoff, and an audit endpoint that never stores audio.',
  },
  {
    code: 'M5',
    weeks: 'Weeks 11–12',
    title: 'Evaluation harness',
    body: '240 clinician-style vignettes measuring red-flag recall, omissions, hallucinated findings, and correct abstention.',
  },
  {
    code: 'M6',
    weeks: 'Week 13',
    title: 'Field-readiness review',
    body: 'Clinical sign-off, accessibility pass on low-RAM devices, and a documented limitations section.',
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-y border-line/80 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-600">
              Roadmap
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
              The demo is the easy part.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            A 13-week build plan where the evaluation harness is a deliverable, not an afterthought.
            No milestone ships on a failing test.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-12 gap-y-0 md:grid-cols-2">
          {milestones.map((milestone) => (
            <li
              key={milestone.code}
              className="flex gap-5 border-t border-line py-6 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
            >
              <span className="mt-0.5 font-mono text-[11px] font-semibold text-pine-700">
                {milestone.code}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-[15px] font-semibold tracking-tight">{milestone.title}</h3>
                  <span className="text-[11px] text-muted">{milestone.weeks}</span>
                </div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                  {milestone.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
