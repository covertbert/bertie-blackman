import React from 'react'

import Logo from '../../components/logo'
import { Navigation, NavigationItem } from '../../components/navigation'

const GITHUB_URL = 'https://github.com/covertbert/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/bertie-blackman-3654767a/'

const Header: React.FC = () => (
  <div className="flex items-center bg-primary p-3 flex-wrap">
    <Logo />
    <Navigation>
      <NavigationItem to="/work" label="work" />
      <NavigationItem to="/blog" label="blog" />
      <NavigationItem external to={GITHUB_URL} label="github" />
      <NavigationItem external to={LINKEDIN_URL} label="linkedin" />
    </Navigation>
  </div>
)

export default Header
