import React from 'react'
import { render } from '@testing-library/react'

import Header from '../header.component'

describe('Header', () => {
  it('renders its children', () => {
    const childText = 'Hello in the header'
    const { getByText } = render(<Header>{childText}</Header>)

    expect(getByText(childText)).toBeTruthy()
  })
})
