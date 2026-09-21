import Screen from "./Screen"
import { useEffect,useState,useRef,createContext } from "react"
import Buttons from "./Buttons"
export const InputContext = createContext();
export default function Counter(){
    const [sec,setSec] = useState(5);
    const [min,setMin] = useState(1);
    const [hour,setHour] = useState(0);
    const [start,setStart] = useState(false);
    let intervalId = useRef(null)

    let yesStart = false

    function initializer(hour,min,sec){
        setMin(min)
        setSec(sec)
        setHour(hour)
    }

    function reset(){
        
    }
    if(min === 0 && hour !==0){
        setHour(hour-1)
        setMin(1)
    }
    else if(sec === 0 && min !== 0){
        setMin(min-1)
        setSec(10)
    }
    else if((hour === 0 && min === 0 && sec === 0) && start){
        clearInterval(intervalId.current)
        yesStart = true
    }

    useEffect(() => {
        if(hour !== 0 || min !== 0 || sec !== 0){
            console.log('Starting timer...')
            if(start){
            intervalId.current = setInterval(() => {
            setSec((prev) => {
                return prev - 1
            })
            },1000)
            return () => clearInterval(intervalId.current)
            }
        }
        else if((hour === 0 && min === 0 && sec === 0) && start){
            setStart(false)
        }
        
    },[start])

    return (
        <>  
            <InputContext value={() => initializer(hour,min,sec)}>
                <div className="container">
                    <Screen sec={`${sec}`} min={`${min}`} hour={`${hour}`}/>
                    <Buttons handleStart={() => setStart(!start)} yesStart={yesStart} state={start} reset ={reset}/>
                </div>
            </InputContext>
        </>
    )
}