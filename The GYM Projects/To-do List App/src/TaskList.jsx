import delete_svg from "./assets/delete-svg.svg"
import edit_icon from "./assets/edit-svg.svg"
export default function TaskList({onSave,onEdit,taskObj,onDelete,onChecker,isEditing}){
    const taskDivs = taskObj.map(item => {
        const bindOnSave = onSave.bind(null,item.id)
        if(!item.editing){
            return (<div key={item.id} className={`task-item ${item.finished ? "mark-finished":"mark-unfinished"}`}>
                    <p className="task-parag">{item.task}</p>
                    <input className="task-checkBox" onClick={(e) => onChecker(item.id,e.target.checked) } type="checkbox" />
                    <button className="task-delete" onClick={() => onDelete(item.id)}><img src={delete_svg}/></button>
                    <button className="task-edit" onClick={() => onEdit(item.id)}><img src={edit_icon}/></button>
                </div>)
        }
        else{
            return(
                <form key={item.id} className="task-item saveForm" action={bindOnSave}>
                    <input defaultValue={item.task} type="text" name="edit-task"/>
                    <button>Save</button>
                </form>
            )
        }
        
    })

    return(
        <>
            {taskObj.length > 0 ? <div className="task-container">
                {taskDivs}
            </div> : <h2>No items yet</h2>}
        </>
    )
}