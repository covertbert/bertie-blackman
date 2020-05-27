import React from 'react'
import { render } from '@testing-library/react'

import CTA, { CTAProps } from '../cta.component'

describe('Hero', () => {
  it('renders the given heading and description props', () => {
    const props: CTAProps = {
      text: 'A button',
    }

    const { getByText } = render(<CTA {...props} />)

    expect(getByText(props.text)).toBeTruthy()
  })
})
