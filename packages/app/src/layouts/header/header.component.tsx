import React from 'react'
import { Link } from 'gatsby'

const Header: React.FC = () => (
  <header>
    <Link to="/">bertieblackman</Link>

    <nav>
      <ul>
        <li>
          <Link activeStyle={{ color: 'red' }} to="/work">
            work
          </Link>
        </li>
        <li>
          <Link activeStyle={{ color: 'red' }} to="/blog">
            blog
          </Link>
        </li>
        <li>github</li>
      </ul>
    </nav>
  </header>
)

export default Header
