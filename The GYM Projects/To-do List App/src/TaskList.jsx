export default function TaskList({taskObj,onDelete,onChecker}){
    const taskDivs = taskObj.map(item => {
        return (<div key={item.id} className="task-item">
                    <p className="task-parag">{item.task}</p>
                    <input onClick={(e) => onChecker(item.id,e.target.checked) } className="mark-finished" type="checkbox" />
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                    <button>Edit</button>
                </div>)
    })

    return(
        <>
            {taskObj.length > 0 ? <div className="task-container">
                {taskDivs}
            </div> : <h2>No items yet</h2>}
        </>
    )
}