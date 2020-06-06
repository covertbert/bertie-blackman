import React from 'react'
import { render } from '@testing-library/react'

import Hero, { HeroProps } from '../hero.component'

describe('Hero', () => {
  const props: HeroProps = {
    body: 'A super super super super long description',
    heading: 'A heading',
  }

  it('renders the given heading and description props', () => {
    const { getByText } = render(<Hero {...props} />)

    expect(getByText(props.heading)).toBeTruthy()
    expect(getByText(props.body!)).toBeTruthy()
  })

  it('renders the given children', () => {
    const childText = 'A child'

    const { getByText } = render(
      <Hero {...props}>
        <p>{childText}</p>
      </Hero>,
    )

    expect(getByText(childText)).toBeTruthy()
  })
})
