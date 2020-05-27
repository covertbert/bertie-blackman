import React from 'react'

interface HeroProps {
  heading: string
  body?: string
}

const Hero: React.FC<HeroProps> = ({ heading, body, children }) => (
  <section className="flex flex-col bg-primary p-10">
    <h1 className="text-white leading-tight">{heading}</h1>

    {body && <p className="text-white">{body}</p>}

    {children}
  </section>
)

export default Hero
