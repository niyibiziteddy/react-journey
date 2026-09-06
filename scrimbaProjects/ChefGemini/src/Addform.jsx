

export default function Addform(props){

    
    return(
        <form className="add_ingre_form" action={props.getData}>
            <input 
            className="ingredients_input" type="text" 
            name="ingredients" id="ingredients"/>
            <button>Add Ingredients</button>
        </form>
    )
}