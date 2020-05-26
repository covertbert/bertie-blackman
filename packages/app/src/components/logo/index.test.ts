import DefaultExport from './'
import Logo from './logo.component'

describe('DefaultExport', () => {
  it('is the Logo component', () => {
    expect(DefaultExport).toEqual(Logo)
  })
})
