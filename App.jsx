import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components2/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div> 
    <Navbar/>
    </div>
    </>
  )
}

export default App
