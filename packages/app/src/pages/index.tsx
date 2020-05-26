import React from 'react'

import Header from '../layouts/header'
import SEO from '../components/seo'
import Hero from '../components/hero'

const HERO_TEXT = 'software engineer based in the high peak'

const App = () => (
  <>
    <SEO title="home" />

    <Header />
    <Hero heading={HERO_TEXT} />
  </>
)

export default App
