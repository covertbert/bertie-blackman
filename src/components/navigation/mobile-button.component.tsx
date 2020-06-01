import React from 'react'
import classnames from 'classnames'

import MenuIcon from '../../assets/icons/menu.svg'
import CloseIcon from '../../assets/icons/close.svg'

interface MobileButtonProps {
  handleClick: () => void
  buttonType: 'open' | 'close'
  className?: string
}

const MobileButton: React.FC<MobileButtonProps> = ({ handleClick, buttonType, className }) => (
  <button
    onClick={handleClick}
    className={classnames('sm:hidden inline-flex ml-auto p-3 outline-none', className)}
    aria-label="Menu button"
  >
    {buttonType === 'open' && (
      <>
        <span className="invisible absolute">Menu</span>
        <MenuIcon className="w-8 fill-current text-accent" />
      </>
    )}
    {buttonType === 'close' && (
      <>
        <span className="invisible absolute">Close</span>
        <CloseIcon className="w-8 fill-current text-accent" />
      </>
    )}
  </button>
)

export default MobileButton
