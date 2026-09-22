

export default function Buttons({handleStart,state,reset,yesStart,isEditing}){
    return(
        <>
            <div className="buttons">
                <button className={`buttons-item`} onClick={handleStart}>{!state || yesStart ? "Start" : "Stop"}</button>
                <button className={`buttons-item ${state || yesStart && 'no-reset'}`} onClick={reset} >Reset</button>
            </div>
        </>
    )
}