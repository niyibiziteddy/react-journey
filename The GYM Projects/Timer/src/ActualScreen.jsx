import InputContext from "./Counter.jsx"
export default function ActualScreen({setMin,setSec,setHour,sec,min,hour}){
    return(
        <>
            <div className="screen input">
                <input value={hour} onChange={(e) => setHour(Number(e.target.value))}  type="number" className="hours" min={0} max={59}/>
                <input value={min} onChange={(e) => setMin(Number(e.target.value))} type="number" className="min" min={0} max={59}/>
                <input value={sec} onChange={(e) => setSec(Number(e.target.value))} type="number" className="seconds" min={0} max={59}/>
            </div>
        </>
    )
}