import React from 'react'

export interface HeroProps {
  heading: string
  body?: string
}

const Hero: React.FC<HeroProps> = ({ heading, body, children }) => (
  <section className="flex flex-col bg-primary p-10">
    <h1 className="text-white leading-tight">{heading}</h1>

    <div className="max-w-3xl">
      {body && <p className="text-white text-lg">{body}</p>}
    </div>

    {children}
  </section>
)

export default Hero
