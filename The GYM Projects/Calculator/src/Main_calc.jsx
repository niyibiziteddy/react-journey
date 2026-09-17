import Calc_screen from "./calc_components/Calc_screen"
import Calc_funcpad from "./calc_components/Calc_funcPad"
import Calc_numberPad from "./calc_components/Calc_numberPad"
import Calc_operatorPad from "./calc_components/Calc_operatorPad"
import { useState } from "react"

export default function Main_calc(){
    const[data,setData] = useState("");
    let calcArray = data;

    function displayer(num){
        calcArray+=num
        console.log("ready to use setData")
        setData(calcArray)
    };

    function deleter(){
        let temp = data;
        console.log(temp);
        
    }
    console.log("These are data",data)
    return(
        <>
            <div className="container">
                <Calc_screen data = {data}/>
                <Calc_funcpad />
                <div className="lower-part">
                    <Calc_numberPad displayer={displayer} deleter={deleter}/>
                    <Calc_operatorPad displayer={displayer}/>
                </div>
            </div>
        </>
    )
}