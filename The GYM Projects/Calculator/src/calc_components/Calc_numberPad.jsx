export default function Calc_numberPad({displayer}){
    return(
        <>
            <div className="number-pad">
                <button className="numbers" onClick={() => displayer('7')}>7</button>
                <button className="numbers" onClick={() => displayer('8')}>8</button>
                <button className="numbers" onClick={() => displayer('9')}>9</button>
                <button className="numbers" onClick={() => displayer('4')}>4</button>
                <button className="numbers" onClick={() => displayer('5')}>5</button>
                <button className="numbers" onClick={() => displayer('6')}>6</button>
                <button className="numbers" onClick={() => displayer('1')}>1</button>
                <button className="numbers" onClick={() => displayer('2')}>2</button>
                <button className="numbers" onClick={() => displayer('3')}>3</button>
                <button className="numbers" onClick={() => displayer('.')}>.</button>
                <button className="numbers" onClick={() => displayer('0')}>0</button>
                <button className="numbers">del</button>
            </div>
        </>
    )
}