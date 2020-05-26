import React from 'react'
import { render } from '@testing-library/react'

import Header from './header.component'

describe('Header', () => {
  it('renders', () => {
    const { debug } = render(<Header />)

    debug()
  })
})
