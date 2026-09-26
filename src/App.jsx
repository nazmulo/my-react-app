

import './App.css'

function App() {
  

  return (
    <>
    const time = 50;
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
      <ToDo task="learn" isDone="true" time="time" />
      <ToDo task="revice" isDone="false"/>
      <ToDo task="shawer" isDone="true" time="100" />
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
      <p>salami for:{event}</p>
    <p>amount:{amount}</p>

    </div>
  )
};

function ToDo ({task,isDone,time}) {

  if(isDone===true) {

    return(<li>done: {task} {time}</li>)

  }

  else {

    return(<li>pending: {task}</li>)

  }
  
};

//export default function ToDo ({task,isDone,time=0}){
//  return
//  idDone?
//  <li>done: {task}time: {time}</li>
//  <li>not done: {task}</li>
//}

//return
//  idDone &&  
//  <li>done: {task}</li>

export default App
