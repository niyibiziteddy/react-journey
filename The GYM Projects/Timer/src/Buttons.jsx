export default function Buttons({handleStart}){
    return(
        <>
            <div className="buttons">
                <button className="buttons-item" onClick={handleStart}>Start</button>
                <button className="buttons-item">Reset</button>
            </div>
        </>
    )
}