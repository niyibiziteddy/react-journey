import Header from "./Header"
import Addform from "./Addform"
import IngredSection from "./IngredSection"
import { useState } from "react"
import Another from "./another"
import Prep_recipe from "./Prep_recipe"
import Getrecipe from "./Getrecipe"

export default function App(){

  const [ingredient,setIngredient] = useState([]);
  const [click,setClick] = useState(false)

    function getData(formData){
        let ingred = formData.get('ingredients')
        setIngredient(prev => [...prev,ingred])
    }

    function prep_recipe(){
      setClick(!click)
      console.log('clicked')
    }

  return(
    <>
      <Header />
      <Addform  getData={getData}/>
      <IngredSection ingredient={ingredient}/>
      {ingredient.length > 3 && <Getrecipe prep_recipe= {prep_recipe}/>}
      {click && <Prep_recipe />}
    </>
  )
}