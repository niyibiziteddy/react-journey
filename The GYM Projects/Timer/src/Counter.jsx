import Screen from "./Screen"
import { useEffect,useState } from "react"
import Buttons from "./Buttons"
export default function Counter(){

    const [sec,setSec] = useState(4);
    const [min,setMin] = useState(2);
    const [hour,setHour] = useState(1);
    const [start,setStart] = useState(false);

    const handleStart = (prev) => {setStart(!prev)};
    
    if(sec === 0 && min !== 0){
        setMin(min-1)
        setSec(59)
    }

    useEffect(() => {
        console.log('started')
        let interval = setInterval(() => {
            setSec((prev) => prev-1)
        },1000)
        return () => clearInterval(interval)
    },[])

    return (
        <>
            <div className="container">
                <Screen sec={`${sec}`} min={`${min}`} hour={`${hour}`}/>
                <Buttons handleStart={handleStart}/>
            </div>
        </>
    )
}