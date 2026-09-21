import ActualScreen from "./ActualScreen"

export default function Screen({sec,min,hour,isEditing}){



    return(
        <>
            {<ActualScreen />}
            <div className="screen" onClick={isEditing}>
                <p className="hours">{hour}:</p>
                <p className="min">{min}:</p>
                <p className="seconds">{sec}</p>
            </div>
        </>
    )
}