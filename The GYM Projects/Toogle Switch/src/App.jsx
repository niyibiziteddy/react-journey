import Screen from "./Screen";
import Switch from "./Switch";
import { useState } from "react";

export default function App(){
  const [state,setState] = useState(false)
  function changeState(){
    setState(prev => !prev)
    console.log(state)
  }
  return(
    <>
      <div className="container">
        <Screen className= {state ? 'light' : 'dark'}/>
        <div className="buttons">
          <Switch changeState={changeState} className={state ? 'on' : 'off'}/>
        </div>
        
      </div>
    </>
  )
}