import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import MobileButton, { MobileButtonProps } from '../mobile-button.component'

describe('MobileButton', () => {
  it('renders an open button when the "open" prop is passed', () => {
    const props: MobileButtonProps = {
      handleClick: jest.fn(),
      buttonType: 'open',
    }

    const { getByText } = render(<MobileButton {...props} />)

    expect(getByText('Menu')).toBeTruthy()
  })

  it('renders a close button when the "close" prop is passed', () => {
    const props: MobileButtonProps = {
      handleClick: jest.fn(),
      buttonType: 'close',
    }

    const { getByText } = render(<MobileButton {...props} />)

    expect(getByText('Close')).toBeTruthy()
  })

  it('calls the click handler that is passed as a prop', () => {
    const mockClickHandler = jest.fn()

    const props: MobileButtonProps = {
      handleClick: mockClickHandler,
      buttonType: 'open',
    }

    const { getByText } = render(<MobileButton {...props} />)
    const openButton = getByText('Menu')

    fireEvent.click(openButton)

    expect(mockClickHandler).toHaveBeenCalled()
  })
})
