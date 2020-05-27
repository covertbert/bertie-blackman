import DefaultExport from '..'
import Header from '../header.component'

describe('DefaultExport', () => {
  it('is the Header component', () => {
    expect(DefaultExport).toEqual(Header)
  })
})
