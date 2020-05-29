import React from 'react'

import Section from '../../layouts/section'

export interface HeroProps {
  heading: string
  body?: string
}

const Hero: React.FC<HeroProps> = ({ heading, body, children }) => (
  <Section background="primary">
    <h1 className="text-white leading-tight">{heading}</h1>

    <div className="max-w-3xl">{body && <p className="text-white text-lg">{body}</p>}</div>

    {children}
  </Section>
)

export default Hero
