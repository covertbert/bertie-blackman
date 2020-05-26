import React from 'react'
import { Link } from 'gatsby'

interface NavigationItemProps {
  label: string
  to: string
  external?: boolean
}

const linkClasses = `
  lg:inline-flex 
  lg:w-auto 
  w-full 
  px-3 
  py-2 
  text-gray-400 
  items-center 
  justify-center 
  hover:bg-gray-900 
  hover:text-white
`

const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  to,
  external,
}) => (
  <li>
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
