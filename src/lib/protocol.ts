export type Risk = 'green' | 'amber' | 'red'

export type Question = {
  id: string
  hi: string
  en: string
  label: string
  severity: 'red' | 'amber'
}

export type Terminal = {
  id: string
  risk: Risk
  badge: string
  title: string
  action: string
  steps: string[]
}

export type Protocol = {
  id: string
  title: string
  version: string
  source: string
  questions: Question[]
  terminals: Record<Risk, Terminal>
}

export type Evaluation =
  | {
      status: 'incomplete'
      nextQuestion: Question
      answered: number
      total: number
      findings: Question[]
    }
  | {
      status: 'complete'
      risk: Risk
      terminal: Terminal
      findings: Question[]
      answered: number
      total: number
      protocolRef: string
    }

export function protocolRef(protocol: Protocol, terminal: Terminal): string {
  return `${protocol.id}@${protocol.version}#${terminal.id}`
}

export function evaluate(
  protocol: Protocol,
  answers: Record<string, boolean>,
): Evaluation {
  const findings = protocol.questions.filter((question) => answers[question.id] === true)
  const unanswered = protocol.questions.filter(
    (question) => typeof answers[question.id] !== 'boolean',
  )
  const total = protocol.questions.length
  const answered = total - unanswered.length

  const complete = (risk: Risk): Evaluation => {
    const terminal = protocol.terminals[risk]
    return {
      status: 'complete',
      risk,
      terminal,
      findings,
      answered,
      total,
      protocolRef: protocolRef(protocol, terminal),
    }
  }

  if (findings.some((finding) => finding.severity === 'red')) return complete('red')
  if (unanswered.length === 0) {
    return complete(findings.some((finding) => finding.severity === 'amber') ? 'amber' : 'green')
  }

  return { status: 'incomplete', nextQuestion: unanswered[0], answered, total, findings }
}
