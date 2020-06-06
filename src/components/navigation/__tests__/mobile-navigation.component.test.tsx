import React from 'react'
import { render } from '@testing-library/react'

import MobileNavigation, { MobileNavigationProps } from '../mobile-navigation.component'

describe('MobileNavigation', () => {
  it('renders no navigation when isVisible is false', () => {
    const props: MobileNavigationProps = {
      handleCloseButtonClick: jest.fn(),
      isVisible: false,
    }

    const { queryByText } = render(<MobileNavigation {...props} />)

    expect(queryByText('Close')).toBeNull()
  })

  it('renders the navigation when isVisible is true', () => {
    const props: MobileNavigationProps = {
      handleCloseButtonClick: jest.fn(),
      isVisible: true,
    }

    const { queryByText } = render(<MobileNavigation {...props} />)

    expect(queryByText('Close')).toBeDefined()
  })
})
