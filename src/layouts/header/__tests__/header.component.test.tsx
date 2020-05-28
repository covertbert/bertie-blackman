import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Header from '../header.component'

describe('Header', () => {
  it('opens and closes the mobile nav when the "Menu" button is clicked', () => {
    const { getByText } = render(<Header />)

    const menuButton = getByText('Menu')
    fireEvent.click(menuButton)

    expect(getByText('Close')).toBeTruthy()
  })

  it('closes the mobile nav when the "Close" button is clicked', () => {
    const { getByText } = render(<Header />)

    const menuButton = getByText('Menu')
    fireEvent.click(menuButton)

    const closeButton = getByText('Close')
    fireEvent.click(closeButton)

    expect(menuButton).toBeTruthy()
  })
})
