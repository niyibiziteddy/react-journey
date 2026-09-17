export default function Calc_operatorPad({displayer, calculate}){
    return(
        <>
            <div className="operator-pad">
                <button className="operators" onClick={() => displayer('+')}>+</button>
                <button className="operators" onClick={() => displayer('-')}>-</button>
                <button className="operators" onClick={() => displayer('x')}>x</button>
                <button className="operators" onClick={() => displayer('/')}>/</button>
                <button className="operators" onClick = {calculate}>=</button>
            </div>
        </>
    )
}