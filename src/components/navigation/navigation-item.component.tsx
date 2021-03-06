import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'

export interface NavigationItemProps {
  label: string
  to: string
  external?: boolean
  className?: string
}

const linkClasses = `
  lg:inline-flex
  lg:w-auto
  w-full
  px-2
  py-2
  text-accent
  items-center
  justify-center
  border-b-2
  border-transparent
  hover:border-accent
`

const NavigationItem: React.FC<NavigationItemProps> = ({ label, to, external, className }) => {
  const formattedLabel = label.toLowerCase()

  return (
    <li className={classnames('text-center', className)}>
      {external ? (
        <a href={to} className={linkClasses} target="_blank" rel="noreferrer">
          {formattedLabel}
        </a>
      ) : (
        <Link to={to} className={linkClasses}>
          {formattedLabel}
        </Link>
      )}
    </li>
  )
}

export default NavigationItem
