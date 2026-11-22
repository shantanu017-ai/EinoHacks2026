const stats = [
  { value: '1M+', label: 'ASHA & ANM workers in India' },
  { value: '0', label: 'network calls needed at the point of care' },
  { value: '≤ 90s', label: 'design target for a red-flag referral' },
  { value: '100%', label: 'of recommendations cite a protocol node' },
]

export default function Stats() {
  return (
    <section aria-label="Key figures" className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="rounded-3xl bg-pine-900 px-6 py-10 text-paper sm:px-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl tracking-tight text-pine-100 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-[13px] leading-snug text-pine-200/90">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 border-t border-pine-700/60 pt-5 text-[11px] leading-relaxed text-pine-300">
          Figures are public estimates and prototype design targets — not measured outcomes. The
          tool is decision support, not a diagnostic device.
        </p>
      </div>
    </section>
  )
}
