import { useState } from 'react'
import './App.css'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Task />
    </div>
  )
}

export default App
