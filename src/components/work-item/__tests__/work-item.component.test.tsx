import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { render } from '@testing-library/react'

import WorkItem, { WorkItemProps } from '../work-item.component'

describe('WorkItem', () => {
  const descriptionText = 'Dogs and cats'

  const props: WorkItemProps = {
    dates: {
      from: 'Kitten',
      to: 'Dog',
    },
    description: {
      content: [
        {
          content: [
            {
              data: {},
              marks: [],
              nodeType: 'text',
              value: descriptionText,
            },
          ],
          data: {},
          nodeType: BLOCKS.PARAGRAPH,
        },
      ],
      data: {},
      nodeType: BLOCKS.DOCUMENT,
    },
    logo: {
      alt: 'logo',
      url: 'logo.com',
    },
  }

  it('renders the given props correctly', () => {
    const { getByText, getByAltText } = render(<WorkItem {...props} />)

    expect(getByAltText(props.logo.alt)).toBeTruthy()
    expect(getByText(descriptionText)).toBeTruthy()
    expect(getByText(`${props.dates.from} - ${props.dates.to}`)).toBeTruthy()
  })

  it('renders an HR when it the prop is true', () => {
    const { container } = render(<WorkItem {...props} hasHR />)
    expect(container.querySelector('hr')!.classList.contains('border-primary')).toBeTruthy()
  })
})
