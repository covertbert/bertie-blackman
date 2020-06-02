import React from 'react'

import Section from '../../layouts/section'

export interface HeroProps {
  heading: string
  body?: string
}

const Hero: React.FC<HeroProps> = ({ heading, body, children }) => (
  <Section background="primary">
    <h1 className="leading-tight">{heading}</h1>

    <div className="max-w-3xl">{body && <p className="text-accent text-xl">{body}</p>}</div>

    {children}
  </Section>
)

export default Hero
