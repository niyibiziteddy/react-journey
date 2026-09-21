import Screen from "./Screen"
import { useEffect,useState,useRef,createContext } from "react"
import Buttons from "./Buttons"
export const InputContext = createContext();
import ActualScreen from "./ActualScreen";
export default function Counter(){
    const [sec,setSec] = useState(0);
    const [min,setMin] = useState(0);
    const [hour,setHour] = useState(0);
    const [start,setStart] = useState(false);
    const [isEditing,setIsEditing] = useState(false)
    let count = useRef(0)
    let intervalId = useRef(null)
    let yesStart = false
    console.log(hour,min,sec)
    const [initialSec,setInitialSec] = useState();
    const [initialmin,setInitialMin] = useState();
    const [initialHour,setInitialHour] = useState();
    function reset(){
        setHour(initialHour)
        setMin(initialmin)
        setSec(initialSec)
    }
    function handleStart(){
        console.log('Starting timer...')
        setStart(!start)
        setIsEditing(false)
        if(count.current === 1){
            setInitialSec(sec)
            setInitialMin(min);
            setInitialHour(hour);
        }
        count.current++
        console.log(initialHour,initialSec)
    }
    function isEditFunc(){
        setIsEditing(true)
        count.current = 1
        console.log("you can edit now")
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
                    {isEditing ? <ActualScreen sec={`${sec}`} min={`${min}`} hour={`${hour}`} setHour={setHour} setSec={setSec} setMin={setMin}/> :
                    <Screen sec={`${sec}`} min={`${min}`} hour={`${hour}`} isEditing={isEditFunc} state={start}/>}
                    <Buttons editState={isEditing} handleStart={handleStart} yesStart={yesStart} state={start} reset ={reset}/>
                </div>
            </InputContext>
        </>
    )
}