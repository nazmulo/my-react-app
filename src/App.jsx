

import './App.css'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <Pet></Pet>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Developer name="Mojumder" tech="JS"/>
      <Developer name="Rajon" tech="Phyton"/>
      <Developer name="Sabana" tech="JAVA"/>
      <Salami event="Roja" amount="20"/>
      <Salami event="Eid" amount="10"/>
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

function Developer (props) {
  return(

    <div style={{
      border : '2px solid green',
      borderRadius : '20px',
    }}>

      <h3>Developer :{props.name}</h3>

      <p>Technology :{props.tech}</p>

    </div>
  )
};

function Salami ({event,amount=10}) {
  return(

    <div className='cat'>
      <p>salami for : {event}</p>
      <p>amount : {amount}</p>
    </div>
  )
};

export default App
