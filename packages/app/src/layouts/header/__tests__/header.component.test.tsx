import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Header from '../header.component'

describe('Header', () => {
  it('opens the mobile nav when the button is clicked', () => {
    const { getByText } = render(<Header />)

    const menuButton = getByText('Menu')

    fireEvent.click(menuButton)

    expect(getByText('Close')).toBeTruthy()
  })
})
