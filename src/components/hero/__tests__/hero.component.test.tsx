import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { render } from '@testing-library/react'

import Hero, { HeroProps } from '../hero.component'

describe('Hero', () => {
  const bodyText = 'I am a teapot'

  const props: HeroProps = {
    body: {
      content: [
        {
          content: [
            {
              data: {},
              marks: [],
              nodeType: 'text',
              value: bodyText,
            },
          ],
          data: {},
          nodeType: BLOCKS.PARAGRAPH,
        },
      ],
      data: {},
      nodeType: BLOCKS.DOCUMENT,
    },
    heading: 'A heading',
  }

  it('renders the given heading and description props', () => {
    const { getByText } = render(<Hero {...props} />)

    expect(getByText(props.heading)).toBeTruthy()
    expect(getByText(bodyText)).toBeTruthy()
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
