export default function Place_divisions(props){
    return(

            <div className="place-container">
                <div className="place-image">
                    <img src={props.img} alt="" />
                </div>
                <div className="place-description">
                    <div className="place-location">
                        <img src="/location.svg" alt="" />
                        <span className="country_name">{props.location}</span>
                        <a href={props.google_maps_link} className="place_location">View on Gogle Maps</a>
                    </div>
                    <div className="place_heading">
                        <h2>{props.landmark}</h2>
                    </div>
                    <h4 className="place_date">{props.dates}</h4>
                    <div className="place_passage"><p>{props.description}</p></div>
                </div>
            </div>
    )
}