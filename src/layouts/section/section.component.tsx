import React from 'react'
import classnames from 'classnames'
import { Document } from '@contentful/rich-text-types'

export interface SectionProps {
  title?: string
  background?: 'primary' | 'white'
}

const Section: React.FC<SectionProps> = ({ children, title, background = 'white' }) => (
  <section className={classnames('flex flex-col p-10 text-lg', `bg-${background}`)}>
    {title && <h2 className="mb-4">{title}</h2>}
    {children}
  </section>
)

export default Section
