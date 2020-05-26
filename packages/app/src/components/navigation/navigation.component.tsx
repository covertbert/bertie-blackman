import React from 'react'

const Navigation: React.FC = ({ children }) => (
  <nav className="hidden top-navbar w-full sm:inline-flex sm:flex-grow sm:w-auto">
    <ul className="sm:inline-flex sm:flex-row sm:ml-auto sm:w-auto w-full sm:items-center items-start flex flex-col sm:h-auto">
      {children}
    </ul>
  </nav>
)

export default Navigation
