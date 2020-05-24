import React from 'react'

const MobileMenuButton = () => (
  <button
    className="text-white inline-flex p-3 hover:bg-gray-900 lg:hidden ml-auto hover:text-white outline-none nav-toggler"
    data-target="#navigation"
  >
    <i className="sm-annotation h-8 w-8">menu</i>
  </button>
)

export default MobileMenuButton
