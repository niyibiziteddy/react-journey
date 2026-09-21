import InputContext from "./Counter.jsx"
export default function ActualScreen({setMin,setSec,setHour,sec,min,hour}){
    console.log(hour)
    return(
        <>
            <div className="screen input">
                <input value={hour} onChange={() => setHour(hour)}  type="number" className="hours" min={0} max={59}/>
                <input value={min} onChange={() => setMin(min)} type="number" className="min" min={0} max={59}/>
                <input value={sec} onChange={() => setSec(sec)} type="number" className="seconds" min={0} max={59}/>
            </div>
        </>
    )
}