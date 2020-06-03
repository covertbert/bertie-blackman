import React, { SVGAttributes } from 'react'
import { render } from '@testing-library/react'

import WorkItem, { WorkItemProps } from '../work-item.component'

describe('WorkItem', () => {
  const svgText = 'I am an SVG'
  const props: WorkItemProps = {
    Logo: () => <svg>{svgText}</svg>,
    dates: {
      from: 'Kitten',
      to: 'Dog',
    },
    description: 'Dogs and kittens together',
  }

  it('renders the given props correctly', () => {
    const { getByText } = render(<WorkItem {...props} />)

    expect(getByText(svgText)).toBeTruthy()
    expect(getByText(props.description)).toBeTruthy()
    expect(getByText(`${props.dates.from} - ${props.dates.to}`)).toBeTruthy()
  })

  it('renders an HR when it the prop is true', () => {
    const { container } = render(<WorkItem {...props} hasHR />)
    expect(container.querySelector('hr')!.classList.contains('border-primary')).toBeTruthy()
  })
})
