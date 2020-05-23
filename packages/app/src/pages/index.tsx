import React from 'react'
import { Helmet } from 'react-helmet'

const App = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <html lang="en" />
    </Helmet>
    Hello world!
  </div>
)

export default App
