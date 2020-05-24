import DefaultExport from './'
import SEO from './seo.component'

describe('DefaultExport', () => {
  it('is the SEO component', () => {
    expect(DefaultExport).toEqual(SEO)
  })
})
