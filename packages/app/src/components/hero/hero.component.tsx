import React from 'react'

interface HeroProps {
  heading: string
}

const Hero: React.FC<HeroProps> = ({ heading }) => (
  <section className="flex flex-col bg-primary p-10">
    <h1 className="text-center text-white leading-tight">{heading}</h1>
  </section>
)

export default Hero
