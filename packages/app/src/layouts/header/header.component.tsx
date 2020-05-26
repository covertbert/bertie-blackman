import React from 'react'

import Logo from '../../components/logo'
import { Navigation, NavigationItem } from '../../components/navigation'

const GITHUB_URL = 'https://github.com/covertbert/'

const Header: React.FC = () => (
  <div className="flex items-center bg-primary p-3 flex-wrap">
    <Logo />
    <Navigation>
      <NavigationItem to="/work" label="work" />
      <NavigationItem to="/blog" label="blog" />
      <NavigationItem external to={GITHUB_URL} label="github" />
    </Navigation>
  </div>
)

export default Header
