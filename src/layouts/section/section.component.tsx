import React from 'react'
import classnames from 'classnames'

interface SectionProps {
  title?: string
  background: 'primary' | 'secondary' | 'white'
}

const Section: React.FC<SectionProps> = ({ children, title, background }) => (
  <section className={classnames('flex flex-col p-10', `bg-${background}`)}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
)

export default Section
