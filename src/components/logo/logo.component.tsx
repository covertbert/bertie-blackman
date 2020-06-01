import React from 'react'
import { Link } from 'gatsby'

const Logo = () => (
  <Link aria-label="Home" className="p-2 inline-flex items-center text-accent text-2xl" to="/">
    bertie.dev
  </Link>
)

export default Logo
