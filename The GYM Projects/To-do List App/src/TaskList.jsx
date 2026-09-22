export default function TaskList(){

    return(
        <>
            <div className="task-container">
                <div className="task-item">
                    <p className="task-parag">My first task</p>
                    <input className="mark-finished" type="checkbox" />
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </>
    )
}