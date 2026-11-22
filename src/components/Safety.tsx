import { Check, TriangleAlert } from 'lucide-react'

const principles = [
  ['Abstain over guess', 'Outside the protocol, or low confidence? The app says so and escalates instead of inventing an answer.'],
  ['Red flags short-circuit', 'A single danger sign ends the interview immediately and moves straight to the action screen.'],
  ['Every call is sourced', 'Each recommendation carries the exact protocol file, version, and node that produced it.'],
  ['Clinician can override', 'A health worker or doctor can override any result. The audit trail records the override and why.'],
  ['Audio is never stored', 'Only the transcript and structured fields persist. Raw audio is deleted after transcription.'],
]

export default function Safety() {
  return (
    <section id="safety" className="overflow-hidden bg-pine-900 text-paper">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-300">
            Safety by design
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-balance text-pine-50 sm:text-5xl">
            Built to say <span className="italic">“I don&apos;t know.”</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-pine-200/90">
            A confident wrong answer is worse than no answer in a village with no ambulance. The
            product is engineered around that constraint — not around engagement.
          </p>

          <ul className="mt-9 space-y-4">
            {principles.map(([title, body]) => (
              <li key={title} className="flex gap-3.5">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-pine-600 text-pine-50">
                  <Check size={12} strokeWidth={3} />
                </span>
                <p className="text-[15px] leading-relaxed text-pine-200/85">
                  <span className="font-semibold text-pine-50">{title}.</span> {body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(127,194,172,0.14),transparent)]"
          />
          <div className="relative rounded-2xl border border-pine-700/70 bg-pine-800/60 p-6 shadow-2xl backdrop-blur-sm sm:p-7">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-risk-red px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
                RED
              </span>
              <span className="text-xs font-medium text-pine-200">Refer immediately</span>
            </div>
            <p className="mt-3 text-lg font-semibold leading-snug text-pine-50">
              Heavy bleeding reported — possible obstetric emergency.
            </p>

            <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-pine-200/85">
              <li>→ Arrange transport to the nearest PHC or FRU now.</li>
              <li>→ Do not wait for the next routine visit.</li>
              <li>→ Generate the referral slip before leaving.</li>
            </ul>

            <div className="mt-5 space-y-2 border-t border-pine-700/70 pt-4 font-mono text-[10px] text-pine-300">
              <p>protocol: maternal-danger-signs@1.0.0#emergency_referral</p>
              <p>engine: deterministic · protocol v1.0.0 · asr hi-vosk-0.22</p>
            </div>

            <div className="mt-4 flex items-start gap-2 rounded-lg bg-saffron-500/10 px-3 py-2 text-[11px] leading-relaxed text-saffron-200">
              <TriangleAlert size={13} className="mt-0.5 shrink-0" />
              Illustrative output. Decision support only — a clinician&apos;s judgment overrides
              this.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
