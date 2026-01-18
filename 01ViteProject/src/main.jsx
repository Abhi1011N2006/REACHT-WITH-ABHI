import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx' 

function MyApp(){
  return(
    <>
    <h1>Custom App made by Abhi</h1>
    </>
  )
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">google</a>
)

const anotherVar = "Abcdefghijklmnopqrwstuvwxyz"
const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com' , target : "_blank"},
  'click me to visit google',
  anotherVar
)



createRoot(document.getElementById('root')).render(
  ReactElement
)
