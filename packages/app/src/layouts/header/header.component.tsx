import React from 'react'

import Logo from '../../components/logo'
import { Navigation, NavigationItem } from '../../components/navigation'

const GITHUB_URL = 'https://github.com/covertbert/'

const Header: React.FC = () => (
  <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
    <Logo />
    <Navigation>
      <NavigationItem to="/work" label="Work" />
      <NavigationItem to="/blog" label="Blog" />
      <NavigationItem external to={GITHUB_URL} label="GitHub" />
    </Navigation>
  </nav>
)

export default Header
