import { Printer, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Protocol, Question, Risk, Terminal } from '../lib/protocol'

const badgeStyles: Record<Risk, string> = {
  red: 'bg-risk-red',
  amber: 'bg-risk-amber',
  green: 'bg-risk-green',
}

type Props = {
  onClose: () => void
  protocol: Protocol
  terminal: Terminal
  findings: Question[]
  protocolRef: string
}

export default function ReferralSlip({
  onClose,
  protocol,
  terminal,
  findings,
  protocolRef,
}: Props) {
  const titleId = useId()
  const [patient, setPatient] = useState({ name: '', age: '', village: '' })
  const [caseId] = useState(
    () => `SY-${Date.now().toString(36).toUpperCase().slice(-6)}`,
  )
  const [issuedAt] = useState(() =>
    new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
  )

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  const field =
    'mt-1 w-full border-b border-dotted border-ink/30 bg-transparent pb-0.5 text-[13px] text-ink outline-none transition-colors focus:border-pine-600'

  return createPortal(
    <div
      className="print-portal fixed inset-0 z-[70] overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="mx-auto w-full max-w-lg py-6 print:max-w-none print:py-0"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="no-print mb-3 flex items-center justify-between text-paper">
          <p id={titleId} className="text-sm font-medium">
            Referral slip preview
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close referral slip"
            className="grid size-8 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            <X size={16} />
          </button>
        </div>

        <div
          id="referral-slip"
          className="rounded-xl bg-white p-6 text-ink shadow-2xl print:rounded-none print:shadow-none sm:p-7"
        >
          <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-pine-800 font-display text-base text-paper">
                स
              </span>
              <div>
                <p className="text-sm font-semibold leading-none">Sahayak</p>
                <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-muted">
                  Referral slip
                </p>
              </div>
            </div>
            <div className="text-right text-[10px] leading-relaxed text-muted">
              <p className="font-mono text-[10px] text-ink">{caseId}</p>
              <p>{issuedAt}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            <label className="col-span-2 block">
              <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
                Patient name or ID
              </span>
              <input
                value={patient.name}
                onChange={(event) =>
                  setPatient((previous) => ({ ...previous, name: event.target.value }))
                }
                placeholder="—"
                className={field}
              />
            </label>
            <label className="block">
              <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
                Age
              </span>
              <input
                value={patient.age}
                onChange={(event) =>
                  setPatient((previous) => ({ ...previous, age: event.target.value }))
                }
                inputMode="numeric"
                placeholder="—"
                className={field}
              />
            </label>
            <label className="block">
              <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
                Village
              </span>
              <input
                value={patient.village}
                onChange={(event) =>
                  setPatient((previous) => ({ ...previous, village: event.target.value }))
                }
                placeholder="—"
                className={field}
              />
            </label>
          </div>

          <div className="mt-5 rounded-lg border border-line bg-paper/70 p-4">
            <div className="flex items-center gap-2">
              <span
                className={`rounded-md ${badgeStyles[terminal.risk]} px-2 py-0.5 text-[9px] font-bold tracking-wide text-white`}
              >
                {terminal.badge}
              </span>
              <p className="text-[13px] font-semibold">{terminal.title}</p>
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-ink/80">{terminal.action}</p>
          </div>

          <div className="mt-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
              Findings
            </p>
            <ul className="mt-1.5 space-y-1 text-[12.5px]">
              {findings.map((finding) => (
                <li key={finding.id}>
                  • {finding.label}{' '}
                  <span className="text-[10px] text-muted">({finding.en.toLowerCase()})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
              Action
            </p>
            <ol className="mt-1.5 space-y-1 text-[12.5px]">
              {terminal.steps.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-5 flex items-end justify-between gap-6 border-t border-line pt-4">
            <div>
              <p className="font-mono text-[9px] text-muted">{protocolRef}</p>
              <p className="mt-1 text-[9px] text-muted">
                Issued by ASHA-DEMO-01 · {protocol.id} v{protocol.version}
              </p>
            </div>
            <div className="text-right">
              <div className="mb-1 h-6 w-28 border-b border-ink/30" />
              <p className="text-[9px] text-muted">Signature</p>
            </div>
          </div>

          <p className="mt-4 text-[9px] leading-relaxed text-muted">
            Illustrative document generated by a demo. Not a medical record and not medical advice.
          </p>
        </div>

        <div className="no-print mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-pine-800 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-pine-700"
          >
            <Printer size={15} />
            Print slip
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-white/10"
          >
            Close
          </button>
        </div>
        <p className="no-print mt-3 text-center text-[10px] text-paper/60">
          Demonstration only. Fill the blank fields before printing.
        </p>
      </div>
    </div>,
    document.body,
  )
}
