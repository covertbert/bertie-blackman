import React, { SVGAttributes } from 'react'

import CinchLogo from '../assets/logos/cinch.svg'
import SainsburysLogo from '../assets/logos/sainsburys.svg'
import HavasLogo from '../assets/logos/havas.svg'

export interface EmployerData {
  Logo: React.FC<SVGAttributes<SVGElement>>
  dates: { from: string; to: string }
  description: string
}

const employerData: EmployerData[] = [
  {
    Logo: CinchLogo,
    dates: {
      from: 'March 2020',
      to: 'Current',
    },
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut minim veniam, quis nostrud exercitation ullamco
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
  },
  {
    Logo: SainsburysLogo,
    dates: {
      from: 'May 2018',
      to: 'March 2020',
    },
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
  },
  {
    Logo: HavasLogo,
    dates: {
      from: 'March 2015',
      to: 'May 2018',
    },
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
  },
]

export default employerData
