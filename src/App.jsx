

import './App.css'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <Pet></Pet>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
    </>
  )
}; 

function Person () {
  const age = 17;
  const name = 'Jolil';

  const personStyle = {
    color : 'red'
  }

  return (
    <p style={personStyle}>I am a person : {name} {age}</p>
  )
};

function Sports () {
  return(
    <div>
      <h3>cricket</h3>
      <p style={{
        color : 'yellow',
        border : '2px solid green',
      }}>playing and losing</p>
    </div>
  )
};

function Pet () {
  return(
    
      <p className='cat'>cat</p>
    
  )
};


export default App
