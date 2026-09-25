import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello react</h1>
    </>
  )
};

function Person () {
  const age = 17;
  const name = 'Jolil';

  return (
    <p>I am a person : {name} {age}</p>
  )
};

function Sports () {
  return(
    <div>
      <h3>cricket</h3>
      <p>playing and losing</p>
    </div>
  )
};

function Pet () {
  return(
    
      <p>cat</p>
    
  )
};


export default App
