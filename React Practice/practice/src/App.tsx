import { useState } from 'react'
import './App.css'
import Demo from './demo'

function App() {
  const [count, setCount] = useState("sent to chield")

  const handleParent = (date: any) => {
    setCount(date)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <h1>come dayta from cho=iend is {count}</h1>
      
      <Demo name={handleParent} />
    </>
  )
}

export default App
