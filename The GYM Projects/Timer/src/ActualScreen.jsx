import InputContext from "./Counter.jsx"
export default function ActualScreen({setRealTimeObj,sec,min,hour}){
    function handleOnchange(name,val,e){
        setRealTimeObj(prevReal => ({...prevReal,[name]:val}))
    }
    return(
        <>
            <div className="screen input">
                <input value={hour} onChange={(e) => handleOnchange("hour",Number(e.target.value),e)}  
                                                    type="number" className="hours" min={0} max={59}/>
                <input value={min} onChange={(e) => handleOnchange("min",Number(e.target.value),e)} 
                                                    type="number" className="min" min={0} max={59}/>
                <input value={sec} onChange={(e) => handleOnchange("sec",Number(e.target.value),e)} 
                                                    type="number" className="seconds" min={0} max={59}/>
            </div>
        </>
    )
}