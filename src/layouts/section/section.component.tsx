import React from 'react'
import classnames from 'classnames'

interface SectionProps {
  background: 'primary' | 'secondary' | 'white'
}

const Section: React.FC<SectionProps> = ({ children, background }) => (
  <section className={classnames('flex flex-col p-10', `bg-${background}`)}>{children}</section>
)

export default Section
