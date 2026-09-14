import { useState } from "react"
export default function FullCount (){
    const [count,setCount] = useState(0);
    console.log(count)
    function add(){
        setCount(count + 1)
    }
    function reduce(){
        count === 0 ? setCount(0) : setCount(count - 1)
    }
    return(
        <>
            <div className="container">
                <p className="display">{count}</p>
                <div className="buttons">
                    <button id="minus" onClick={reduce}>-</button>
                    <button id="plus" onClick={add}>+</button>
                </div>
            </div>
        </>
    )
}