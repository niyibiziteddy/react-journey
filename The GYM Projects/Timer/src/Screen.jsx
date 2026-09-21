import ActualScreen from "./ActualScreen"

export default function Screen({sec,min,hour}){


    return(
        <>
            <ActualScreen />
            {/* <div className="screen">
                <p className="hours">{hour}:</p>
                <p className="min">{min}:</p>
                <p className="seconds">{sec}</p>
            </div> */}
        </>
    )
}