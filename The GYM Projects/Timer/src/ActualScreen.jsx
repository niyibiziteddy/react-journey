import InputContext from "./Counter.jsx"
export default function ActualScreen(){
    return(
        <>
            <div className="screen input">
                <input  type="number" className="hours" min={0} max={59}/>
                <input  type="number" className="min" min={0} max={59}/>
                <input  type="number" className="seconds" min={0} max={59}/>
            </div>
        </>
    )
}