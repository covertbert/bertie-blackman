import React from 'react'
import { navigate } from 'gatsby'

setTimeout(() => {
  navigate('/')
}, 4000)

const App = () => (
  <div className="absolute w-full h-full flex justify-center items-center bg-primary">
    <h1>Nice one!</h1>
  </div>
)

export default App
