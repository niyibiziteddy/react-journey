import Calc_screen from "./calc_components/Calc_screen"
import Calc_funcpad from "./calc_components/Calc_funcPad"
import Calc_numberPad from "./calc_components/Calc_numberPad"
import Calc_operatorPad from "./calc_components/Calc_operatorPad"
import { useState } from "react"
import Header from "./Header"
import { deleter,clearFunc,bodmas,calculate } from "./calculating_functions";

export default function Main_calc(){
    const[data,setData] = useState("");
    const[turnedOn,setTurnedOn] = useState(false)
    function turner(){
        setTurnedOn(!turnedOn)
        setData([])
    }
    let calcArray = data;    

    function displayer(num){
        if(Object.is(Number(num),NaN) && num !== '.') calcArray+=` ${num} `
        else calcArray+=num
        setData(calcArray)
    };

    
    return(
        <>
            <div className="container">
                <Header />
                {turnedOn ?<Calc_screen data = {data}/> : <div className="turned-off"></div> }
                <Calc_funcpad clearFunc ={clearFunc} turner = {turner}/>
                <div className="lower-part">
                    <Calc_numberPad displayer={displayer} deleter={deleter}/>
                    <Calc_operatorPad displayer={displayer} calculate = {calculate}/>
                </div>
            </div>
        </>
    )
}