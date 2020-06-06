import React from 'react'
import { render } from '@testing-library/react'

import Section, { SectionProps } from '../section.component'

describe('Section', () => {
  it('renders a title when given one', () => {
    const props: SectionProps = {
      background: 'primary',
      title: 'Wombat',
    }

    const { getByText } = render(<Section {...props} />)

    expect(getByText(props.title!)).toBeTruthy()
  })
})
