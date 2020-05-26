import React from 'react'

interface HeroProps {
  heading: string
}

const Hero: React.FC<HeroProps> = ({ heading, children }) => (
  <section className="flex flex-col items-center bg-primary p-10">
    <h1 className="text-center text-white leading-tight">{heading}</h1>

    {children}
  </section>
)

export default Hero
