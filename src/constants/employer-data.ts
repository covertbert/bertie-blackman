import React, { SVGAttributes } from 'react'

import CinchLogo from '../assets/logos/cinch.svg'
import SainsburysLogo from '../assets/logos/sainsburys.svg'
import HavasLogo from '../assets/logos/havas.svg'

export interface EmployerData {
  logo: React.FC<SVGAttributes<SVGElement>>
  dates: { from: string; to: string }
  description: string
}

const employerData: EmployerData[] = [
  {
    logo: CinchLogo,
    dates: {
      from: 'March 2020',
      to: 'Current',
    },
    description: `
      I recently started at cinch which has been a brilliant experience thus far!
      The fast-paced nature of the work combined with incredibly talented people and
      a React/TypeScript stack is my dream environment. Looking forward to what the future
      here has to bring...
    `,
  },
  {
    logo: SainsburysLogo,
    dates: {
      from: 'May 2018',
      to: 'March 2020',
    },
    description: `
      My time at Sainsbury's was an incredible learning experience and really allowed me to grow
      as a software developer. Managing enterprise development environments as well as complex 
      sets of business requirements required developing a strong skill set that will serve me for
      the rest of my career. It also gave me my first foray into TypeScript and GraphQL, both of which
      I still enjoy using regularly!
    `,
  },
  {
    logo: HavasLogo,
    dates: {
      from: 'March 2015',
      to: 'May 2018',
    },
    description: `
      Havas Lynx gave me my professional introduction to web development. My time there taught me
      important skills such as version control and the concept of using build tooling, both of
      which gave me the foundations on which to become a good developer.
    `,
  },
]

export default employerData
