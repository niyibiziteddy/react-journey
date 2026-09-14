
export default function(){
    const array = ["Project Hail Mary","Michael","Spider-Man: Brand New Day", "The Odyssey","Obsession","Toy Story 5","The Super Mario Galaxy Movie", "The Invite", "Backrooms","28 years Later"];
    const arra_lists = array.map(item => {
        return <li>{item}</li>
    })
    return(
        <>
            <div className="movie-container">
                {/* <div className="blurer"> */}
                    <h1>Top 10 Movies in 2026</h1>
                    <ol>
                    {arra_lists}
                    </ol>
                {/* </div> */}
            </div>
        </>
    )
}