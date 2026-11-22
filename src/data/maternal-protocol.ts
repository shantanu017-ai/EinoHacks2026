import type { Protocol } from '../lib/protocol'

export const maternalProtocol: Protocol = {
  id: 'maternal-danger-signs',
  title: 'Maternal danger-sign check',
  version: '1.0.0',
  source: 'WHO/IMNCI-aligned danger signs (illustrative excerpt)',
  questions: [
    {
      id: 'danger_bleeding',
      hi: 'क्या महिला को भारी रक्तस्राव हो रहा है?',
      en: 'Is the woman bleeding heavily?',
      label: 'heavy bleeding',
      severity: 'red',
    },
    {
      id: 'convulsions',
      hi: 'क्या महिला को झटके आ रहे हैं?',
      en: 'Is she having convulsions?',
      label: 'convulsions',
      severity: 'red',
    },
    {
      id: 'severe_headache',
      hi: 'क्या तेज़ सिरदर्द या धुंधला दिख रहा है?',
      en: 'Severe headache or blurred vision?',
      label: 'severe headache or blurred vision',
      severity: 'amber',
    },
    {
      id: 'reduced_fetal_movement',
      hi: 'क्या बच्चे की हलचल कम हो गई है?',
      en: 'Is the baby moving less than usual?',
      label: 'reduced fetal movement',
      severity: 'amber',
    },
  ],
  terminals: {
    red: {
      id: 'emergency_referral',
      risk: 'red',
      badge: 'RED',
      title: 'Refer immediately',
      action:
        'Do not wait for the next routine visit. Arrange transport to the nearest PHC or FRU now.',
      steps: [
        'Arrange transport to the nearest PHC or FRU now.',
        'Do not wait for the next routine visit.',
        'Generate the referral slip before leaving.',
      ],
    },
    amber: {
      id: 'same_day_referral',
      risk: 'amber',
      badge: 'AMBER',
      title: 'Refer today',
      action:
        'Escort the woman to the PHC today. Do not wait for the next scheduled visit.',
      steps: [
        'Escort her to the nearest PHC today.',
        'Advise the family not to wait for the next visit.',
        'Re-screen immediately if any red sign appears.',
      ],
    },
    green: {
      id: 'routine_care',
      risk: 'green',
      badge: 'GREEN',
      title: 'Continue routine care',
      action:
        'No danger signs captured in this excerpt. Continue routine antenatal care and re-screen at the next visit.',
      steps: [
        'Continue routine antenatal care.',
        'Re-screen at the next visit or if anything changes.',
        'Refer on any doubt.',
      ],
    },
  },
}
