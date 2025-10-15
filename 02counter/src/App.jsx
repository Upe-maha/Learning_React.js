import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const name = "Upendra Mahatara"

  const increment = () => {
    if (counter < 22) {
      counter = counter + 1
      console.log(counter, Math.random())
      setCounter(counter)
    }
    else counter = 22
  }
  const decrement = () => {
    if (counter > 0) {
      counter = counter - 1
      console.log(counter, Math.random())
      setCounter(counter)
    }
    else counter = 0
  }
  return (
    <>
      <h1>This is a Counter App By <span style={{ color: "orange" }}>{name}</span></h1>
      <h1>Count:  <span style={{ color: "red" }}>{counter}</span></h1>
      <button
        onClick={increment}
      >
        Add Count {counter}</button>
      <br />
      <button
        onClick={decrement}>Remove Count {counter}</button>
      <br />
      <footer>
        <h3>default count: {15}</h3>
      </footer>
    </>
  )
}

export default App
