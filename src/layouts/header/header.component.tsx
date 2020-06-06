import React, { useState } from 'react'

import { Navigation, MobileNavigation, NavigationItem } from '@components/navigation'
import Logo from '@components/logo'
import MobileButton from '@components/navigation/mobile-button.component'

import { NavigationItem as NavigationItemType } from '@typings'

export interface HeaderProps {
  navigationItemsTotal: number
  navigationItems: NavigationItemType[]
}

const Header: React.FC<HeaderProps> = ({ navigationItems, navigationItemsTotal }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const toggleButton = () => setIsMobileNavOpen(!isMobileNavOpen)

  return (
    <header className="flex items-center bg-primary p-3 flex-wrap">
      <Logo />

      <MobileButton handleClick={toggleButton} buttonType="open" />

      <Navigation>
        {navigationItems.map((item, index) => (
          <NavigationItem
            to={item.to}
            label={item.label}
            key={item.label}
            external={item.external}
            className={index > 0 ? 'ml-3' : undefined}
          />
        ))}
      </Navigation>

      <MobileNavigation isVisible={isMobileNavOpen} handleCloseButtonClick={toggleButton}>
        {navigationItems.map((item, index) => (
          <NavigationItem
            to={item.to}
            label={item.label}
            key={item.label}
            external={item.external}
            className={index + 1 < navigationItemsTotal ? 'mb-8' : undefined}
          />
        ))}
      </MobileNavigation>
    </header>
  )
}

export default Header
