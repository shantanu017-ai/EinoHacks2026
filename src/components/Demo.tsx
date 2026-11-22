import { Check, FileText, Mic, RotateCcw, X } from 'lucide-react'
import { useState } from 'react'
import { maternalProtocol } from '../data/maternal-protocol'
import { evaluate, type Question, type Risk } from '../lib/protocol'
import ReferralSlip from './ReferralSlip'

const riskStyles: Record<Risk, { badge: string; border: string; tint: string; text: string }> = {
  red: {
    badge: 'bg-risk-red',
    border: 'border-risk-red/25',
    tint: 'bg-risk-red/5',
    text: 'text-risk-red',
  },
  amber: {
    badge: 'bg-risk-amber',
    border: 'border-risk-amber/25',
    tint: 'bg-risk-amber/5',
    text: 'text-risk-amber',
  },
  green: {
    badge: 'bg-risk-green',
    border: 'border-risk-green/25',
    tint: 'bg-risk-green/5',
    text: 'text-risk-green',
  },
}

function DemoWidget() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [last, setLast] = useState<{ question: Question; value: boolean } | null>(null)
  const [slipOpen, setSlipOpen] = useState(false)

  const result = evaluate(maternalProtocol, answers)
  const complete = result.status === 'complete'
  const progress = complete ? 100 : Math.round((result.answered / result.total) * 100)

  function answer(value: boolean) {
    if (result.status !== 'incomplete') return
    const question = result.nextQuestion
    setAnswers((previous) => ({ ...previous, [question.id]: value }))
    setLast({ question, value })
  }

  function reset() {
    setAnswers({})
    setLast(null)
    setSlipOpen(false)
  }

  return (
    <>
      <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-35px_rgba(11,53,47,0.35)] sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-pine-800 font-display text-sm text-paper">
              स
            </span>
            <div>
              <p className="text-[13px] font-semibold leading-none">{maternalProtocol.title}</p>
              <p className="mt-1 text-[10px] text-muted">
                {maternalProtocol.questions.length}-question excerpt · v{maternalProtocol.version}
              </p>
            </div>
          </div>
          <span className="rounded-full bg-saffron-100 px-2 py-1 text-[10px] font-medium text-saffron-600">
            Demo
          </span>
        </div>

        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Screening progress"
          className="mt-5 h-1.5 overflow-hidden rounded-full bg-line"
        >
          <div
            className="h-full rounded-full bg-pine-600 transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-5 min-h-[300px]" aria-live="polite">
          {!complete && (
            <>
              {last && (
                <div className="mb-4 flex items-center gap-2 rounded-lg border border-pine-200 bg-pine-50 px-3 py-2 text-[11px] font-medium text-pine-800">
                  <span className="grid size-4 place-items-center rounded-full bg-pine-600 text-paper">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  Recorded: {last.question.label} = {last.value ? 'yes' : 'no'}
                </div>
              )}

              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                Question {result.answered + 1} of {result.total}
              </p>
              <p className="mt-2 font-display text-xl leading-snug text-ink">
                {result.nextQuestion.hi}
              </p>
              <p className="mt-1 text-[13px] text-muted">{result.nextQuestion.en}</p>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => answer(true)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-pine-800 px-4 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-pine-700"
                >
                  <Check size={16} strokeWidth={3} />
                  Yes · हाँ
                </button>
                <button
                  type="button"
                  onClick={() => answer(false)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-paper px-4 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-pine-300 hover:bg-pine-50"
                >
                  <X size={16} strokeWidth={3} />
                  No · नहीं
                </button>
              </div>

              <p className="mt-4 flex items-center gap-1.5 text-[10px] text-muted">
                <Mic size={11} />
                In the real app this question is spoken aloud, with tap fallback.
              </p>
            </>
          )}

          {complete && (
            <div className={`rounded-xl border p-5 ${riskStyles[result.risk].border} ${riskStyles[result.risk].tint}`}>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide text-white ${riskStyles[result.risk].badge}`}
                >
                  {result.terminal.badge}
                </span>
                <span className={`text-[13px] font-semibold ${riskStyles[result.risk].text}`}>
                  {result.terminal.title}
                </span>
              </div>

              <p className="mt-2.5 text-[15px] font-medium leading-snug text-ink">
                {result.findings.length > 0
                  ? `Danger signs recorded: ${result.findings.map((finding) => finding.label).join(', ')}.`
                  : 'No danger signs captured in this excerpt.'}
              </p>

              <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-ink/75">
                {result.terminal.steps.map((step) => (
                  <li key={step}>→ {step}</li>
                ))}
              </ul>

              <p className="mt-4 inline-block rounded border border-line bg-white px-2 py-1 font-mono text-[10px] text-muted">
                {result.protocolRef}
              </p>

              <p className="mt-2 text-[10px] text-muted">
                Screened {result.answered} of {result.total} questions
                {result.answered < result.total ? ' — stopped at the first red flag' : ''}.
              </p>

              {result.risk !== 'green' && (
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setSlipOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-pine-800 px-4 py-2 text-[12px] font-medium text-paper transition-colors hover:bg-pine-700"
                  >
                    <FileText size={13} />
                    Generate referral slip
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-line/80 pt-4">
          <p className="max-w-[75%] text-[10px] leading-relaxed text-muted">
            Illustrative excerpt — not medical advice. Answers stay in this browser tab.
          </p>
          <button
            type="button"
            onClick={reset}
            disabled={result.answered === 0 && !last}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] font-medium text-ink transition-colors hover:bg-pine-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RotateCcw size={12} />
            Start over
          </button>
        </div>
      </div>

      {complete && slipOpen && (
        <ReferralSlip
          onClose={() => setSlipOpen(false)}
          protocol={maternalProtocol}
          terminal={result.terminal}
          findings={result.findings}
          protocolRef={result.protocolRef}
        />
      )}
    </>
  )
}

export default function Demo() {
  return (
    <section id="demo" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-600">Try it</p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            Sixty seconds. Tap only.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            A four-question excerpt of a maternal danger-sign protocol, running the same rule shape
            as the app: a red flag ends the interview immediately, and every result cites its
            versioned source.
          </p>

          <ul className="mt-6 space-y-2.5 text-sm text-muted">
            <li className="flex items-center gap-2.5">
              <Check size={15} className="text-pine-600" />
              No audio recording in this web demo
            </li>
            <li className="flex items-center gap-2.5">
              <Check size={15} className="text-pine-600" />
              Nothing is stored or sent anywhere
            </li>
            <li className="flex items-center gap-2.5">
              <Check size={15} className="text-pine-600" />
              Red flags short-circuit the remaining questions
            </li>
            <li className="flex items-center gap-2.5">
              <Check size={15} className="text-pine-600" />
              Red and amber results generate a printable referral slip
            </li>
          </ul>

          <p className="mt-6 rounded-xl border border-line bg-white p-4 text-[12px] leading-relaxed text-muted">
            This page is a product explainer. The offline app, evaluation harness, and clinical
            review are separate deliverables in the build plan below.
          </p>
        </div>

        <DemoWidget />
      </div>
    </section>
  )
}
