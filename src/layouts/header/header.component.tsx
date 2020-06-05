import React, { useState } from 'react'

import { Navigation, MobileNavigation, NavigationItem } from '../../components/navigation'
import Logo from '../../components/logo'
import MobileButton from '../../components/navigation/mobile-button.component'

import { NavigationItem as NavigationItemType } from '../../types'

interface HeaderProps {
  navigationItems: NavigationItemType[]
}

const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const toggleButton = () => setIsMobileNavOpen(!isMobileNavOpen)

  return (
    <header className="flex items-center bg-primary p-3 flex-wrap">
      <Logo />

      <MobileButton handleClick={toggleButton} buttonType="open" />

      <Navigation>
        {navigationItems.map((navigationItem, index) => (
          <NavigationItem
            to={navigationItem.to}
            label={navigationItem.label}
            key={navigationItem.label}
            external={navigationItem.external}
            className={index > 0 ? 'ml-3' : undefined}
          />
        ))}
      </Navigation>

      <MobileNavigation isVisible={isMobileNavOpen} handleCloseButtonClick={toggleButton}>
        {navigationItems.map((navigationItem, index) => (
          <NavigationItem
            to={navigationItem.to}
            label={navigationItem.label}
            key={navigationItem.label}
            external={navigationItem.external}
            className={index + 1 < navigationItems.length ? 'mb-8' : undefined}
          />
        ))}
      </MobileNavigation>
    </header>
  )
}

export default Header
