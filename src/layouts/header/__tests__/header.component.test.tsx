import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Header, { HeaderProps } from '../header.component'

describe('Header', () => {
  const props: HeaderProps = {
    navigationItems: [
      { label: 'newfoundland', to: '/newfoundland' },
      { label: 'chihuahua', to: '/chihuahua' },
    ],
    navigationItemsTotal: 100,
  }

  it('displays the navigation items given to it', () => {
    const { getByText } = render(<Header {...props} />)

    props.navigationItems.forEach(item => {
      expect(getByText(item.label)).toBeTruthy()
    })
  })

  it('opens and closes the mobile nav when the "Menu" button is clicked', () => {
    const { getByText } = render(<Header {...props} />)

    const menuButton = getByText('Menu')
    fireEvent.click(menuButton)

    expect(getByText('Close')).toBeTruthy()
  })

  it('closes the mobile nav when the "Close" button is clicked', () => {
    const { getByText } = render(<Header {...props} />)

    const menuButton = getByText('Menu')
    fireEvent.click(menuButton)

    const closeButton = getByText('Close')
    fireEvent.click(closeButton)

    expect(menuButton).toBeTruthy()
  })
})
