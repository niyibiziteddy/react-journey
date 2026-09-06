export default function IngredSection(props){

    let ingredientList = props.ingredient.map(ingred => {
        return <li key={ingred}>{ingred}</li>
    })
    return(
        <>
            {ingredientList.length === 0 && <h2 className="no_ing_list">No Ingredients yet</h2>} 
            {ingredientList.length > 0 &&
            <> 
                <h1 className="list_heading">List of Ingredients</h1>
                <ul className="ingred_list">
                    {ingredientList}
                </ul>
            </>}
            
        </>
    )
}