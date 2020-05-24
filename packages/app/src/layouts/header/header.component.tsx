import React from 'react'
import { Link } from 'gatsby'

const Header: React.FC = () => (
  <header>
    <Link to="/">bertieblackman</Link>

    <nav>
      <ul>
        <li>portfolio</li>
        <li>blog</li>
        <li>github</li>
      </ul>
    </nav>
  </header>
)

export default Header
