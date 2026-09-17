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
        setData(calcArray)
    };

    function deleter(){
        let temp = data;
        setData(temp.slice(0,-1));
        
    }

    function calculate(){
        let temp = data;
        let allCalc = temp.split('')
        let operators = allCalc.filter(el => (['/','-','+','x'].includes(el)))
        console.log(bodmas(operators))
        


    }
    function bodmas(op){
        if(op.includes('/')){
            let ind = op.indexOf('/');
            console.log(op,ind)
            let slash_len = op.filter(e => e !== "/").length
            let newOp = op.filter(e => e !== "/")
            let slashes = "/".repeat(slash_len);
            slashes = slashes.split('')
            return [...slashes,...newOp];
        }
        else if(op.includes('x')){
            let ind = op.indexOf('/');
            console.log(op,ind)
            op.splice(ind,1);
            return ['/',...op];
        }
    }
    return(
        <>
            <div className="container">
                <Calc_screen data = {data}/>
                <Calc_funcpad />
                <div className="lower-part">
                    <Calc_numberPad displayer={displayer} deleter={deleter}/>
                    <Calc_operatorPad displayer={displayer} calculate = {calculate}/>
                </div>
            </div>
        </>
    )
}