import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const myObj = {
    name: 'Dilva',
    age: 22,
    city: 'New York'
  }

  const myArr = [1, 2, 3, 4, 5]
  // const [count, setCount] = useState(0)
  return (
    <>
      <h1 class="relative bg-green-500 text-black rounded-xl mb-4">This is Tailwind</h1>
      <Card userName='Devi' button='Click Me' />
      <Card userName='Sita' button='Submit' />
    </>
  )
}

export default App
