import { useState } from "react"
export default function TypeAdd(){
    const [char,setChar] = useState('')

    function addChar(e){
        setChar(e.currentTarget.value)
    }
    
    return(
        <>
            <div className="container">
                <form>
                    <input type="text" value={char} onChange={addChar} placeholder="Enter text here..."/>
                </form>
                <p>{char === ''? 'No typed text yet' : char}</p>
            </div>
            
        </>
    )
}