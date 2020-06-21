import React from 'react'
import { render } from '@testing-library/react'

import Button, { ButtonProps } from '../button.component'

describe('Button', () => {
  it('renders the correct text from props', () => {
    const props: ButtonProps = {
      onClick: jest.fn(),
      text: 'A button',
    }

    const { getByText } = render(<Button {...props} />)

    expect(getByText(props.text)).toBeTruthy()
  })
})
