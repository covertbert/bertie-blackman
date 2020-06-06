import React from 'react'
import { render } from '@testing-library/react'

import NavigationItem, { NavigationItemProps } from '../navigation-item.component'

describe('NavigationItem', () => {
  it('has target when the "external" prop is passed', () => {
    const props: NavigationItemProps = {
      external: true,
      label: 'Outside',
      to: 'https://the-outside-world.com',
    }

    const { getByText } = render(<NavigationItem {...props} />)

    const linkElement = getByText(props.label)

    expect(linkElement.constructor.name).toBe('HTMLAnchorElement')
    expect(linkElement.hasAttribute('target')).toBeTruthy()
  })

  it('has no target when "external" prop is not passed', () => {
    const props: NavigationItemProps = {
      label: 'Bed',
      to: '/bed',
    }

    const { getByText } = render(<NavigationItem {...props} />)

    const linkElement = getByText(props.label)

    expect(linkElement.constructor.name).toBe('HTMLAnchorElement')
    expect(linkElement.hasAttribute('target')).toBeFalsy()
  })
})
