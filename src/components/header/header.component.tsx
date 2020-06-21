import React from 'react'

const Header: React.FC = ({ children }) => (
  <header className="flex items-center bg-primary p-3 flex-wrap">{children}</header>
)

export default Header
