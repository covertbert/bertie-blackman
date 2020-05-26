import React from 'react'
import { render } from '@testing-library/react'

import Navigation from './navigation.component'

describe('Navigation', () => {
  it('renders its children', () => {
    const { getByText } = render(
      <Navigation>
        <h1>Hello</h1>
      </Navigation>,
    )

    const child = getByText('Hello')

    expect(child.constructor.name).toEqual('HTMLHeadingElement')
  })
})
