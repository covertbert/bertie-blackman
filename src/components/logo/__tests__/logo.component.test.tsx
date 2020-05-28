import React from 'react'
import { render } from '@testing-library/react'

import Logo from '../logo.component'

describe('Logo', () => {
  it('renders', () => {
    const { getByText } = render(<Logo />)

    const logoText = getByText('bertie.dev')

    expect(logoText).toBeTruthy()
  })
})
