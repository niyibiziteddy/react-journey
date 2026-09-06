import Header from "./Header"
import Place_divisions from "./Place_divisions"
import place_data from "./place_data"
export default function (){

  let place_components = place_data.map(item => {
    return <Place_divisions key={item.id} {...item}/>
  })
  return(
    <>
      <Header />
      <main>
        {place_components}
      </main>
      
    </>
  )
}