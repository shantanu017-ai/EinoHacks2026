import { ArrowRight, Check, Mic, ShieldCheck, Volume2, WifiOff } from 'lucide-react'

function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(closest-side,rgba(42,134,112,0.18),transparent)]"
      />

      <div className="relative rounded-[2.75rem] border border-pine-900/10 bg-ink p-2.5 shadow-[0_30px_60px_-25px_rgba(11,53,47,0.45)]">
        <div className="overflow-hidden rounded-[2.25rem] bg-paper">
          <div className="flex items-center justify-between border-b border-line/80 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-pine-800 font-display text-[13px] text-paper">
                स
              </span>
              <span className="text-sm font-semibold">Sahayak</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-pine-50 px-2 py-1 text-[10px] font-medium text-pine-800">
                हिन्दी
              </span>
              <span className="flex items-center gap-1 rounded-full bg-saffron-100 px-2 py-1 text-[10px] font-medium text-saffron-600">
                <WifiOff size={10} />
                Offline
              </span>
            </div>
          </div>

          <div className="space-y-3 px-4 py-5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-line/80 bg-white px-4 py-3">
              <p className="text-[13px] leading-relaxed">
                नमस्ते। क्या महिला को भारी रक्तस्राव हो रहा है?
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">
                Is the woman bleeding heavily?
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-pine-700">
                <Volume2 size={11} />
                Playing in Hindi
              </div>
            </div>

            <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-md bg-pine-800 px-4 py-2.5 text-[13px] text-paper">
              हाँ, बहुत ज़्यादा।
            </div>

            <div className="ml-auto flex max-w-[85%] items-center gap-2 rounded-xl border border-pine-200 bg-pine-50 px-3 py-2 text-[11px] font-medium text-pine-800">
              <span className="grid size-4 shrink-0 place-items-center rounded-full bg-pine-600 text-paper">
                <Check size={10} strokeWidth={3} />
              </span>
              Recorded: heavy bleeding = yes
            </div>

            <div className="rounded-2xl border border-risk-red/25 bg-risk-red/5 p-4">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-risk-red px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
                  RED
                </span>
                <span className="text-[12px] font-semibold text-risk-red">Refer immediately</span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-ink/80">
                Do not wait for the next routine visit. Arrange transport to the nearest PHC or
                FRU now.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded border border-line bg-white px-1.5 py-0.5 font-mono text-[9px] text-muted">
                  maternal-danger-signs@1.0.0#emergency_referral
                </span>
                <span className="rounded border border-line bg-white px-1.5 py-0.5 text-[9px] text-muted">
                  v1.0.0 · illustrative excerpt
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center border-t border-line/80 px-5 py-4">
            <div className="flex items-center gap-3 rounded-full bg-pine-800 px-6 py-2.5 text-paper">
              <Mic size={15} />
              <span className="text-[11px] font-medium">Hold to speak</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-5 flex items-center justify-center gap-2 text-[11px] font-medium text-muted">
        <ShieldCheck size={13} className="text-pine-600" />
        Audio never stored — transcript only
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-12%] size-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(42,134,112,0.14),transparent)]"
      />
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pb-28 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-pine-200 bg-pine-50 px-3 py-1 text-xs font-medium text-pine-800">
            <span className="size-1.5 animate-pulse rounded-full bg-pine-500" />
            Decision-support prototype · 2026
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
            Protocol in every pocket.
            <span className="mt-1 block italic text-pine-700">No signal required.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Sahayak is a voice-first copilot for India&apos;s one million ASHA workers — screening,
            risk triage, and referral slips that work offline, in the patient&apos;s language,
            grounded in national protocol.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-pine-800 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-pine-700"
            >
              Try the 60-second demo
              <ArrowRight size={16} />
            </a>
            <a
              href="#problem"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-pine-300 hover:bg-pine-50"
            >
              Why this matters
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <WifiOff size={15} className="text-pine-600" />
              Works offline
            </li>
            <li className="flex items-center gap-2">
              <Mic size={15} className="text-pine-600" />
              Voice-first, 3 languages
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-pine-600" />
              Abstains when unsure
            </li>
          </ul>
        </div>

        <PhoneMock />
      </div>
    </section>
  )
}
