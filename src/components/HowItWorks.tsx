const steps = [
  {
    title: 'Speak',
    body: 'The health worker talks, in Hindi or the local language. Answers become typed protocol variables and are read back for confirmation.',
  },
  {
    title: 'Ground',
    body: 'Every question, threshold, and action comes from a versioned national protocol file. The model never improvises clinical logic.',
  },
  {
    title: 'Decide',
    body: 'Green, amber, or red — with the exact protocol node attached. If the case falls outside the protocol, the app says so and escalates.',
  },
  {
    title: 'Hand off',
    body: 'A referral slip and structured record generate offline, then sync to the PHC when a signal returns. No paper lost in transit.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="border-y border-line/80 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-600">
              How it works
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
              Four steps, no cloud in the loop.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            Voice is the interface. A protocol engine is the brain. Everything else is deliberately
            boring infrastructure — SQLite, a PDF, and a retry queue.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-pine-800/15 pt-5">
              <span className="font-display text-3xl italic text-pine-600">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
