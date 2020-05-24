import React from 'react'
import { render } from '@testing-library/react'

import SEO from './seo.component'

jest.mock('@reach/router', () => ({
  useLocation: () => ({ pathname: 'mock-pathname' }),
}))

describe('SEO', () => {
  it('renders', () => {
    const { debug } = render(<SEO />)
    debug()
  })
})
