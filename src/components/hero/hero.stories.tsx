import React from 'react'
import { action } from '@storybook/addon-actions'
import { BLOCKS } from '@contentful/rich-text-types'

import Hero, { HeroProps } from './hero.component'
import CTA from '@components/cta'

export default {
  component: Hero,
  title: 'Hero',
}

const bodyText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae volutpat elit. Cras in nisi auctor, vehicula lacus in, pharetra justo. Suspendisse posuere, libero at imperdiet laoreet, enim velit molestie tellus, ut ultrices nisl urna et libero.'

const heroProps: HeroProps = {
  body: {
    content: [
      {
        content: [
          {
            data: {},
            marks: [],
            nodeType: 'text',
            value: bodyText,
          },
        ],
        data: {},
        nodeType: BLOCKS.PARAGRAPH,
      },
    ],
    data: {},
    nodeType: BLOCKS.DOCUMENT,
  },
  heading: 'Welcome to storybook',
}

export const LandingPage = () => (
  <Hero {...heroProps}>
    <CTA text="Click me" handleClick={action('click-me')} />
  </Hero>
)
