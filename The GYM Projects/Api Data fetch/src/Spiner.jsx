export default function Spiner(){
    return(
        <>
            <div className="spiner-container">

                <div className="spinner">
                <svg viewBox="0 0 100 100">
                    <circle 
                        cy="50" 
                        cx="50" 
                        r="20" 
                        fill="none" 
                        stroke="red" 
                        strokeWidth="5" 
                        strokeDasharray="90 30"
                    />
                </svg>
        </div>
            </div>
        </>
    )
}