import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#how', label: 'How it works' },
  { href: '#safety', label: 'Safety' },
  { href: '#evidence', label: 'Evidence' },
  { href: '#roadmap', label: 'Roadmap' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Sahayak home">
          <span className="grid size-9 place-items-center rounded-xl bg-pine-800 font-display text-lg text-paper shadow-sm transition-transform group-hover:-rotate-3">
            स
          </span>
          <span className="leading-none">
            <span className="block text-[17px] font-semibold tracking-tight">Sahayak</span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
              ASHA copilot
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#demo"
            className="inline-flex items-center rounded-full bg-pine-800 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-pine-700"
          >
            Try the demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid size-10 place-items-center rounded-lg border border-line bg-paper text-ink lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper px-5 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-pine-50 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-pine-800 px-5 py-2.5 text-sm font-medium text-paper"
            >
              Try the demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
