import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/Homepage.jsx'
// yJWmmpj9E2JFaTs8
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="whole-page">
        <HomePage />
      </div>
    </>
  )
}

export default App
