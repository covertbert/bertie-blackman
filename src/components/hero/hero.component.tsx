import React from 'react'
import { Document } from '@contentful/rich-text-types'

import Section from '@layouts/section'

import { convertRichText } from '@utils'

export interface HeroProps {
  heading: string
  body?: Document
}

const Hero: React.FC<HeroProps> = ({ heading, body, children }) => (
  <Section background="primary">
    <h1 className="leading-tight">{heading}</h1>

    <div className="max-w-3xl text-accent text-xl">{body && convertRichText(body)}</div>

    {children}
  </Section>
)

export default Hero
