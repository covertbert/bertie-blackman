import React from 'react'

import Page from '../layouts/page'

import Hero from '../components/hero'
import WorkItem from '../components/work-item'

import { employerData } from '../constants'

const App = () => (
  <Page title="work">
    <Hero
      heading="work"
      body="I've spent the last 5 years in the industry working on a variety of products backed by varying tech stacks."
    />

    {employerData.map((employer, index) => (
      <WorkItem
        key={employer.description}
        Logo={employer.Logo}
        description={employer.description}
        dates={employer.dates}
        hasHR={index + 1 < employerData.length}
      />
    ))}
  </Page>
)

export default App
