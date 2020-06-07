import React from 'react'
import { navigate } from 'gatsby'

setTimeout(() => {
  navigate('/')
}, 2500)

const browser = typeof window !== 'undefined' && window

const App = () =>
  browser && (
    <div className="absolute w-full h-full flex flex-col justify-center items-center bg-primary">
      <h1>Page not found!</h1>
      <h3>Redirecting to the home page</h3>
    </div>
  )

export default App
