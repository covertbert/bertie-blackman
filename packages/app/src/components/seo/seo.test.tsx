import React from 'react'
import { render, waitFor } from '@testing-library/react'

import SEO from './seo.component'
import { SEOProps } from './types'

jest.mock('@reach/router', () => ({
  useLocation: () => ({ pathname: 'mock-pathname' }),
}))

const getMetaTagValue = (metaName: string) => {
  const metaTags = document.getElementsByTagName('meta')

  for (let i = 0; i < metaTags.length; i++) {
    if (metaTags[i].getAttribute('name') === metaName) {
      return metaTags[i].getAttribute('content')
    }
  }

  return ''
}

describe('SEO', () => {
  it('renders', async () => {
    const props: SEOProps = {
      title: 'Big dog',
      description: 'It is quite a big dog',
    }

    render(<SEO title={props.title} description={props.description} />)

    await waitFor(() => {
      expect(document.title).toEqual(`${props.title} · Mock Land`)

      expect(getMetaTagValue('description')).toEqual(props.description)
    })
  })
})
