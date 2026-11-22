import { describe, expect, it } from 'vitest'
import { maternalProtocol } from '../data/maternal-protocol'
import { evaluate, protocolRef, type Evaluation } from './protocol'

function complete(result: Evaluation) {
  if (result.status !== 'complete') throw new Error('expected a complete evaluation')
  return result
}

function incomplete(result: Evaluation) {
  if (result.status !== 'incomplete') throw new Error('expected an incomplete evaluation')
  return result
}

function allAnswered(overrides: Record<string, boolean> = {}) {
  return Object.fromEntries(
    maternalProtocol.questions.map((question) => [question.id, overrides[question.id] ?? false]),
  )
}

describe('evaluate', () => {
  it('asks the first question when nothing is answered', () => {
    const result = incomplete(evaluate(maternalProtocol, {}))
    expect(result.nextQuestion.id).toBe('danger_bleeding')
    expect(result.answered).toBe(0)
    expect(result.total).toBe(4)
  })

  it('stops at the first red flag even with questions unanswered', () => {
    const result = complete(evaluate(maternalProtocol, { danger_bleeding: true }))
    expect(result.risk).toBe('red')
    expect(result.terminal.id).toBe('emergency_referral')
    expect(result.answered).toBe(1)
    expect(result.protocolRef).toBe('maternal-danger-signs@1.0.0#emergency_referral')
  })

  it('does not stop on an amber flag until every question is answered', () => {
    const result = incomplete(evaluate(maternalProtocol, { severe_headache: true }))
    expect(result.answered).toBe(1)
    expect(result.findings.map((finding) => finding.id)).toEqual(['severe_headache'])
    expect(result.nextQuestion.id).toBe('danger_bleeding')
  })

  it('returns amber when only amber findings are present', () => {
    const result = complete(evaluate(maternalProtocol, allAnswered({ reduced_fetal_movement: true })))
    expect(result.risk).toBe('amber')
    expect(result.protocolRef).toBe('maternal-danger-signs@1.0.0#same_day_referral')
  })

  it('lets red outrank amber', () => {
    const result = complete(
      evaluate(maternalProtocol, allAnswered({ severe_headache: true, convulsions: true })),
    )
    expect(result.risk).toBe('red')
    expect(result.terminal.id).toBe('emergency_referral')
  })

  it('returns green when every answer is negative', () => {
    const result = complete(evaluate(maternalProtocol, allAnswered()))
    expect(result.risk).toBe('green')
    expect(result.findings).toEqual([])
    expect(result.protocolRef).toBe('maternal-danger-signs@1.0.0#routine_care')
  })

  it('ignores answers that are not part of the protocol', () => {
    const result = complete(evaluate(maternalProtocol, { ...allAnswered(), unknown_sign: true }))
    expect(result.risk).toBe('green')
    expect(result.answered).toBe(4)
  })
})

describe('protocolRef', () => {
  it('combines protocol id, version, and terminal id', () => {
    expect(protocolRef(maternalProtocol, maternalProtocol.terminals.red)).toBe(
      'maternal-danger-signs@1.0.0#emergency_referral',
    )
  })
})
