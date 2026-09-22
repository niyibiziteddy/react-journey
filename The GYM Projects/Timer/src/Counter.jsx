import Screen from "./Screen"
import { useEffect,useState,useRef } from "react"
import Buttons from "./Buttons"
import ActualScreen from "./ActualScreen";
export default function Counter(){
    const [realTimeObj,setRealTimeObj] = useState({sec:0,min:0,hour:0})
    const {min,sec,hour} = realTimeObj
    const [start,setStart] = useState(false);
    const [isEditing,setIsEditing] = useState(false)
    const [initObj,setInitObj] = useState({initSec:null,initMin:null,initHour:null});
    const {initSec,initMin,initHour} = initObj;
    let count = useRef(0)
    let intervalId = useRef(null)
    let yesStart = false
    function reset(){
        setRealTimeObj(prevTime => ({hour:initHour,min:initMin,sec:initSec}))
    }
    function handleStart(){
        console.log('Starting timer...')
        setStart(!start)
        setIsEditing(false)
        if(count.current === 1){
            setInitObj({initSec:sec,initMIn:min,initHour:hour})
        }
        count.current++
    }
    function isEditFunc(){
        setIsEditing(true)
        count.current = 1
        console.log("you can edit now")
    }
    if(min === 0 && hour !==0 && !isEditing){
        setRealTimeObj(prevReal => ({...prevReal,hour:hour-1,min:59}))
    }
    else if(sec === 0 && min !== 0 && !isEditing){
        setRealTimeObj(prevReal => ({...prevReal,min:min-1,sec:59}))
    }
    else if((hour === 0 && min === 0 && sec === 0) && start && !isEditing){
        clearInterval(intervalId.current)
        yesStart = true
    }

    useEffect(() => {
        if(hour !== 0 || min !== 0 || sec !== 0){
            if(start){
            intervalId.current = setInterval(() => {
                setRealTimeObj(prevReal => ({...prevReal,sec:sec-1}))
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
            <div className="container">
                {isEditing ? <ActualScreen sec={`${sec}`} min={`${min}`} hour={`${hour}`} setRealTimeObj={setRealTimeObj}/> :
                <Screen sec={`${sec}`} min={`${min}`} hour={`${hour}`} isEditing={isEditFunc} state={start}/>}
                <Buttons editState={isEditing} handleStart={handleStart} yesStart={yesStart} state={start} reset ={reset}/>
            </div>
        </>
    )
}