export default function Getrecipe(props){
    return(
    <div className="sendRecipe">
        <div className="message">
          <p>You can now send Your Ingredients to get a Well made Recipe</p>
        </div>
        <button onClick={(props.prep_recipe)}>Get Recipe</button>
      </div>
    )
}