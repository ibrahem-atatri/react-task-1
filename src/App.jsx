import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const name = 'John Doe';
const age = 20;
  return (
    <>
      <h1>hello {name}</h1>
      <h1>you age is {age}</h1>
    </>
  )
}

export default App
