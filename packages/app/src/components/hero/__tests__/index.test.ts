import DefaultExport from '..'
import Hero from '../hero.component'

describe('DefaultExport', () => {
  it('is the Hero component', () => {
    expect(DefaultExport).toEqual(Hero)
  })
})
