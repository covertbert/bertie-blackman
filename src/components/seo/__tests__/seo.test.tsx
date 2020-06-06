import React from 'react'
import { render, waitFor } from '@testing-library/react'

import SEO, { SEOProps } from '../seo.component'
import { getMetaTagContent } from '../../../test/helpers'

jest.mock('@reach/router', () => ({
  useLocation: () => ({ pathname: 'mock-pathname' }),
}))

describe('SEO', () => {
  it('renders title and description from props', async () => {
    const props: SEOProps = {
      description: 'It is quite a big dog',
      title: 'Big dog',
    }

    render(<SEO title={props.title} description={props.description} />)

    await waitFor(() => {
      expect(document.title).toEqual(`${props.title} · Mock Land`)
      expect(getMetaTagContent('description')).toEqual(props.description)
    })
  })
})
