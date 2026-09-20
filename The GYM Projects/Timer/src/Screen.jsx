export default function Screen({sec,min,hour}){

    return(
        <>
            <div className="screen">
                <p className="hours">{hour}:</p>
                <p className="min">{min}:</p>
                <p className="seconds">{sec}</p>
            </div>
        </>
    )
}