
export default function Screen({sec,min,hour,isEditing,state}){



    return(
        <>
            <div className={`screen ${state && 'no-click'}`} onClick={isEditing}>
                <p className="hours">{hour}:</p>
                <p className="min">{min}:</p>
                <p className="seconds">{sec}</p>
            </div>
        </>
    )
}