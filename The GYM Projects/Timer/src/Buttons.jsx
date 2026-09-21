export default function Buttons({handleStart,state,reset,yesStart}){
    return(
        <>
            <div className="buttons">
                <button className="buttons-item" onClick={handleStart}>{!state || yesStart ? "Start" : "Stop"}</button>
                <button className="buttons-item" onClick={reset}>Reset</button>
            </div>
        </>
    )
}