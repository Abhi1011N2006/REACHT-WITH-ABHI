import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // let Counter = 15;
  // const addValue = ()=>{
  //   console.log(Counter , Math.random() )   //cannot reflect changes in web
  //   Counter=Counter+1;
  // }

  let [Counter, setCount] = useState(15)  //used to initialized variable any change in variable reflect in all place where it is used when change done by using 'setCounter' ,setCounter is not function itis variable
  const addValue=()=>{
    if(Counter < 100){
      setCount(Counter+1)
    }
    ;
    console.log(Counter , Math.random());
  }
  const decValue=()=>{
    if(Counter > 0){setCount(Counter-1);}
    
  }

  return (
    <>
      <h1>Abhi with React</h1>
      <h2>Counter Value :{Counter} </h2>
      <button
        onClick={addValue}>Add value :{Counter}</button>      
      <br />
      <button
        onClick={decValue}>decrease value :{Counter}</button>
      <br />
      <footer>footer : {Counter}</footer>
    </>
  )
}

export default App
