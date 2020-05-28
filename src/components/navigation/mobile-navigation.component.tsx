import React from 'react'

import MobileButton from './mobile-button.component'

interface MobileNavigationProps {
  isVisible: boolean
  handleCloseButtonClick: () => void
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  children,
  isVisible,
  handleCloseButtonClick,
}) => (
  <>
    {isVisible && (
      <nav className="w-full h-full absolute top-0 left-0 flex items-center justify-center flex flex-col bg-primary">
        <MobileButton
          handleClick={handleCloseButtonClick}
          buttonType="close"
          className="absolute top-0 right-0 p-6"
        />

        <ul className="text-3xl">{children}</ul>
      </nav>
    )}
  </>
)

export default MobileNavigation
