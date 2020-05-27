import React from 'react'

import MenuIcon from '../../assets/icons/menu.svg'

const MobileButton: React.FC = () => (
  <button className="sm:hidden inline-flex ml-auto p-3 outline-none">
    <MenuIcon className="w-8 fill-current text-white" />
  </button>
)

export default MobileButton
