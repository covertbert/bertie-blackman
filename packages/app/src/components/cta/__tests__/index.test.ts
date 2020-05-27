import DefaultExport from '..'
import CTA from '../cta.component'

describe('DefaultExport', () => {
  it('is the CTA component', () => {
    expect(DefaultExport).toEqual(CTA)
  })
})
