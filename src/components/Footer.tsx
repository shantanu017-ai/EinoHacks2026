export default function Footer() {
  return (
    <footer className="border-t border-line/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-pine-800 font-display text-sm text-paper">
              स
            </span>
            <span className="text-sm font-semibold tracking-tight">Sahayak</span>
          </div>
          <p className="mt-3 text-[12px] leading-relaxed text-muted">
            Sahayak is an independent product concept and decision-support prototype. It is not a
            medical device and must not be used for clinical decisions without clinician review and
            any required regulatory clearance.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-[12px] text-muted md:items-end">
          <p>
            Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p>© 2026 Sahayak project. Illustrative content only.</p>
          <p className="text-[11px]">
            <a href="#top" className="underline-offset-4 hover:text-ink hover:underline">
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
