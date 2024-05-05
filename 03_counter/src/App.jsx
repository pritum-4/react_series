import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState(5)
  
  //let counter = 5;
  const addValue = () => {
    setCounter((counter)=>{
      if(counter>=20){
        return 20;
      }
      else{
        return counter+1;
      }

    });
    console.log("value added",counter);
  }

  const subValue = () => {
    setCounter((counter)=>{
      if(counter<=0){
        return 0;
      }
      else{
        return counter-1;
      }
    })
    console.log("value substracted",counter);
  }

  return (
    <>
      <h1>REACT CODING</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
      >Increment</button>
      <br />
      <button
      onClick={subValue}
      >Decrement</button>
      <p>Counter {counter}</p>
    </>
  )
}

export default App
