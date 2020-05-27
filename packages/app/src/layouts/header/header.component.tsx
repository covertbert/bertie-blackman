import React, { useState } from 'react'

import { Navigation, MobileNavigation, NavigationItem } from '../../components/navigation'
import Logo from '../../components/logo'
import MobileButton from '../../components/navigation/mobile-button.component'

const GITHUB_URL = 'https://github.com/covertbert/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/bertie-blackman-3654767a/'

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const toggleButton = () => setIsMobileNavOpen(!isMobileNavOpen)

  return (
    <div className="flex items-center bg-primary p-3 flex-wrap">
      <Logo />

      <MobileButton handleClick={toggleButton} buttonType="open" />

      <Navigation>
        <NavigationItem to="/work" label="work" />
        <NavigationItem to="/blog" label="blog" className="ml-3" />
        <NavigationItem external to={GITHUB_URL} label="github" className="ml-3" />
        <NavigationItem external to={LINKEDIN_URL} label="linkedin" className="ml-3" />
      </Navigation>

      <MobileNavigation isVisible={isMobileNavOpen} handleCloseButtonClick={toggleButton}>
        <NavigationItem to="/work" label="work" className="mb-8" />
        <NavigationItem to="/blog" label="blog" className="mb-8" />
        <NavigationItem external to={GITHUB_URL} label="github" className="mb-8" />
        <NavigationItem external to={LINKEDIN_URL} label="linkedin" />
      </MobileNavigation>
    </div>
  )
}

export default Header
