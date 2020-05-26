import React from 'react'

const Navigation: React.FC = ({ children }) => (
  <nav className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto">
    <ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
      {children}
    </ul>
  </nav>
)

export default Navigation
