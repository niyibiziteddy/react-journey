export default function TaskList({onEdit,taskObj,onDelete,onChecker,isEditing}){
    const taskDivs = taskObj.map(item => {
        if(isEditing){
            return (<div key={item.id} className={`task-item ${item.finished ? "mark-finished":"mark-unfinished"}`}>
                    <p className="task-parag">{item.task}</p>
                    <input onClick={(e) => onChecker(item.id,e.target.checked) } type="checkbox" />
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                    <button onClick={onEdit}>Edit</button>
                </div>)
        }
        else{
            return(
                <form className="task-item" action="">
                    <input type="text" name="edit-task"/>
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