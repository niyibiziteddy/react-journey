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
        console.log( typeof Number('+') === 'number')
        //Taking all the operators at once
        let operators = allCalc.filter(el => (['/','-','+','x'].includes(el)))
        //Aranging the operators to make sure the are aranged according to bodmas
        let myOperators = bodmas(operators)
        console.log(allCalc)
        for(let i = 0;i< operators.length;i++){
            let a = allCalc[allCalc.indexOf(operators[i]) - 1]
            let b = allCalc[allCalc.indexOf(operators[i]) + 1]
            let c = 0;
            allCalc[allCalc.indexOf(operators[i]) - 1] = ""
            allCalc.splice(allCalc.indexOf(operators[i]),2)
            switch(operators[i]){
                case('/'):
                    c = Number(a)/Number(b)
                    break;
                case('x'):
                    c = Number(a)*Number(b)
                    break;
                case('+'):
                    c = Number(a)+Number(b)
                    break;
                case('-'):
                    c = Number(a)-Number(b)
                    break;
            }
            allCalc[allCalc.indexOf("")] = c;
            console.log(allCalc)
        }
        //setData(allCalc[0]);


    }
    function bodmas(op){
        if(op.includes('/') && !op.includes('x')){
            let slash_len = op.filter(e => e !== "/").length
            let newOp = op.filter(e => e !== "/")
            let slashes = "/".repeat(slash_len);
            slashes = slashes.split('')
            return [...slashes,...newOp];
        }
        else if(op.includes('x') && !op.includes('/')){
            let prodx_len = op.filter(e => e !== "x").length
            let newOp = op.filter(e => e !== "x")
            let prodx = "x".repeat(prodx_len);
            prodx = prodx.split('')
            return [...prodx,...newOp];
        }
        else if(op.includes('x') && op.includes('/')){
            let slash_len = op.filter(e =>e === '/').length
            let newOp = op.filter(e => e !== "x" && e !== '/')
            let slashes = "/".repeat(slash_len);
            slashes = slashes.split('')
            console.log("These are slashes",slashes)
            let prodx_len = op.filter(e => e === "x").length
            let prodx = "x".repeat(prodx_len);
            prodx = prodx.split('')
            return [...prodx,...slashes,...newOp];
        }
        else return op
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