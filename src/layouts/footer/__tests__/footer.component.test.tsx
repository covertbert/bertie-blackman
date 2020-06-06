import React from 'react'
import { render } from '@testing-library/react'

import Footer, { FooterProps } from '../footer.component'

describe('Footer', () => {
  it('displays the navigation items given to it', () => {
    const props: FooterProps = {
      navigationItems: [
        { to: '/labrador', label: 'labrador' },
        { to: '/newfoundland', label: 'newfoundland' },
        { to: '/west-highland', label: 'west highland' },
      ],
    }

    const { getByText } = render(<Footer {...props} />)

    props.navigationItems.forEach(item => {
      expect(getByText(item.label)).toBeTruthy()
    })
  })
})
