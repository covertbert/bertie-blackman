import { Navigation, NavigationItem } from './'

import NavigationExplicit from './navigation.component'
import NavigationItemExplicit from './navigation-item.component'

describe('Named exports', () => {
  it('are correctly exported', () => {
    expect(Navigation).toEqual(NavigationExplicit)
    expect(NavigationItem).toEqual(NavigationItemExplicit)
  })
})
