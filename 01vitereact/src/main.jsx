import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <h1>Costum App</h1>
  )
}

const anotherElement = (
  <a href="https://google.com" targer="_blank">Click to google</a>
)

const anotherUsername = 'if You click you wiil find yourself in goolven'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click here to Jump in Google',
  anotherUsername
)
createRoot(document.getElementById('root')).render(


  reactElement

)
