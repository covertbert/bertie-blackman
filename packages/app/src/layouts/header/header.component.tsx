import React from 'react'
import { Link } from 'gatsby'

import MobileMenuButton from './components/mobile-menu-button.component'

const Header: React.FC = () => (
  <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
    <Link className="p-2 mr-4 inline-flex items-center" to="/">
      bertieblackman
    </Link>

    <MobileMenuButton />

    <div
      className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
      id="navigation"
    >
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        <a
          href="#"
          className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Home</span>
        </a>
        <a
          href="#"
          className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Work</span>
        </a>
        <a
          href="#"
          className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Blog</span>
        </a>
      </div>
    </div>
  </nav>
)

export default Header
