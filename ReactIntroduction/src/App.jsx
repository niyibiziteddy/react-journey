export default function App(){
  return (
    <>
    <form>
      <label htmlFor="add">New Item</label>
      <input type="text" name="add" id="add" />
      <button id="add">Add</button>
    </form>
    <h1>List of Items</h1>
    <ul className="list-items">
      <li>
        <label htmlFor="item1">
          <input type="checkbox" id="item1"/>
          Item1
        </label>
        <button>Delete</button>
      </li>
      <li>
        <label htmlFor="item2">
          <input type="checkbox" id="item2"/>
          Item1
        </label>
        <button>Delete</button>
      </li>
    </ul>
    </>
  )
}