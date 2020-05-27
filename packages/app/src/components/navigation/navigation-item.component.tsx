import React from 'react'
import { Link } from 'gatsby'

export interface NavigationItemProps {
  label: string
  to: string
  external?: boolean
}

const linkClasses = `
  lg:inline-flex
  lg:w-auto
  w-full
  px-2
  py-2
  text-white
  items-center
  justify-center
  border-b-2
  border-transparent
  hover:border-white
`

const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  to,
  external,
}) => (
  <li className="ml-3">
    {external ? (
      <a href={to} className={linkClasses} target="_blank" rel="noreferrer">
        {label}
      </a>
    ) : (
      <Link to={to} className={linkClasses}>
        {label}
      </Link>
    )}
  </li>
)

export default NavigationItem
