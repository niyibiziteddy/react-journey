export default function Calc_funcPad(props){
    return(
        <>
            <div className="func-pad">
                <button className="functions"></button>
                <button className="functions"></button>
                <button className="functions"></button>
                <button className="functions" onClick={props.turner}>on/off</button>
                <button className="functions"></button>
                <button className="functions"></button>
                <button className="functions"></button>
                <button className="functions"></button>
                <button className="functions"></button>
                <button className="functions"></button>
              <button className="functions"></button>
                <button className="functions" onClick={props.clearFunc}>Clear</button>
            </div>
        </>
    )
}