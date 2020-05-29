import React from 'react'
import { render } from '@testing-library/react'

import CTA, { CTAProps } from '../cta.component'

describe('CTA', () => {
  it('renders the correct text from props', () => {
    const props: CTAProps = {
      text: 'A button',
      handleClick: () => jest.fn(),
    }

    const { getByText } = render(<CTA {...props} />)

    expect(getByText(props.text)).toBeTruthy()
  })
})
