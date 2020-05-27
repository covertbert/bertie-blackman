import React from 'react'
import { render, waitFor } from '@testing-library/react'

import SEO, { SEOProps } from '../seo.component'
import { getMetaTagContent } from '../../../../test/helpers'

jest.mock('@reach/router', () => ({
  useLocation: () => ({ pathname: 'mock-pathname' }),
}))

describe('SEO', () => {
  it('renders', async () => {
    const props: SEOProps = {
      title: 'Big dog',
      description: 'It is quite a big dog',
    }

    render(<SEO title={props.title} description={props.description} />)

    await waitFor(() => {
      expect(document.title).toEqual(`${props.title} · Mock Land`)
      expect(getMetaTagContent('description')).toEqual(props.description)
    })
  })
})
