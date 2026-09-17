import Calc_screen from "./calc_components/Calc_screen"
import Calc_funcpad from "./calc_components/Calc_funcPad"
import Calc_numberPad from "./calc_components/Calc_numberPad"
import Calc_operatorPad from "./calc_components/Calc_operatorPad"

export default function Main_calc(){
    return(
        <>
            <div className="container">
                <Calc_screen />
                <Calc_funcpad />
                <div className="lower-part">
                    <Calc_numberPad />
                    <Calc_operatorPad />
                </div>
            </div>
        </>
    )
}