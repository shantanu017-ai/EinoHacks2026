# Sahayak — landing page

Product explainer for Sahayak, a voice-first, offline-capable protocol copilot for India's ASHA and
ANM frontline health workers. Includes a protocol-driven screening demo with a printable referral
slip, running entirely in the browser.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- lucide-react icons
- Vitest for the protocol engine

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build to dist/
npm run test     # protocol engine unit tests
npm run lint
npm run preview  # serve the production build
```

## Structure

```
src/
  App.tsx                     page composition
  data/
    maternal-protocol.ts      versioned protocol: questions, severities, terminals
  lib/
    protocol.ts               typed evaluation engine (red short-circuit, amber, green)
    protocol.test.ts          engine tests
  components/
    Nav.tsx                   sticky nav + mobile menu
    Hero.tsx                  headline, phone mockup
    Stats.tsx                 key figures band
    Problem.tsx               problem framing + research quote
    HowItWorks.tsx            four-step explainer
    Safety.tsx                safety principles + sample output
    Evidence.tsx              evaluation targets + benchmark
    Demo.tsx                  protocol-driven screening widget
    ReferralSlip.tsx          printable referral slip dialog
    Roadmap.tsx               13-week build plan
    Contact.tsx               contact call to action
    Footer.tsx                disclaimer + credits
  index.css                   theme tokens + print stylesheet
```

## How the demo works

1. `maternal-protocol.ts` defines four questions, each tagged `red` or `amber`, plus one terminal
   per risk level.
2. `evaluate()` walks the answers. A red finding ends the interview immediately; amber findings
   only resolve once every question is answered; otherwise the result is green.
3. Every result carries a `protocolRef` such as
   `maternal-danger-signs@1.0.0#emergency_referral`.
4. Red and amber results open a referral slip. The slip prints alone via the `@media print` rules
   and a portal rendered outside `#root`.

## Before publishing

- Replace the placeholder `hello@sahayak.example` address in `Contact.tsx`.
- Add an Open Graph image if you deploy publicly.
- All clinical content is illustrative. This is a product concept and decision-support prototype,
  not a medical device — keep the disclaimer in the footer.
