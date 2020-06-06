import React from 'react'
import classnames from 'classnames'

export interface SectionProps {
  title?: string
  background?: 'primary' | 'white'
  className?: string
}

const Section: React.FC<SectionProps> = ({ children, title, background = 'white', className }) => (
  <section className={classnames('flex flex-col p-10 text-lg', `bg-${background}`, className)}>
    {title && <h2 className="mb-4">{title}</h2>}
    {children}
  </section>
)

export default Section
