import React from 'react'
import { useState } from 'react'
import Calc from './Calc'
import './calc.css'

// Loader Component
function Loader () {
  return (
  <div className="ring">Loading
    <span></span>
  </div>
  )
}



function App() {
  const [isLoading, setIsLoading] = useState(true)

  //set time out

  setTimeout ( () => {
    setIsLoading(false);
  }, 5000)
  return (
    <div>
      {isLoading? <Loader /> : <Calc />}
    </div>
  )
}

export default App
