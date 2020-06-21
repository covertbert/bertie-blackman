import React from 'react'

import NavigationItem from './navigation-item.component'
import Navigation from './navigation.component'
import { Header } from '@components/header'
import Logo from '@components/logo'

export default {
  component: Navigation,
  title: 'Navigation',
}

const navigationItems = [
  { external: false, label: 'UPSTAIRS', to: '/upstairs' },
  { external: false, label: 'Downstairs', to: '/downstairs' },
  { external: false, label: 'Inside', to: '/inside' },
  { external: false, label: 'Outside', to: '/outside' },
]

export const Full = () => (
  <Header>
    <Logo />

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
  </Header>
)

export const Item = () => (
  <ul className="list-none">
    <NavigationItem
      to={navigationItems[0].to}
      label={navigationItems[0].label}
      key={navigationItems[0].label}
      external={navigationItems[0].external}
    />
  </ul>
)
