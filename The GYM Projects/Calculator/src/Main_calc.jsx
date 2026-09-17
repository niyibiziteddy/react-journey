import Calc_screen from "./calc_components/Calc_screen"
import Calc_funcpad from "./calc_components/Calc_funcPad"
import Calc_numberPad from "./calc_components/Calc_numberPad"
import Calc_operatorPad from "./calc_components/Calc_operatorPad"
import { useState } from "react"

export default function Main_calc(){
    const[data,setData] = useState([]);

    let calcArray = []
    function displayer(num){
        calcArray.push(num)
        console.log(calcArray)
        setData(calcArray)

    }
    const readyData = data;
    return(
        <>
            <div className="container">
                <Calc_screen />
                <Calc_funcpad />
                <div className="lower-part">
                    <Calc_numberPad displayer={displayer}/>
                    <Calc_operatorPad displayer={displayer}/>
                </div>
            </div>
        </>
    )
}