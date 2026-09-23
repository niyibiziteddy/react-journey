export default function Form({onGetTasks}){
    
    return(
        <>
            <form className="addTask"  action={onGetTasks}>
                <input placeholder="Enter the text here..." name="task" type="text" />
                <button>Add Task</button>
            </form>
        </>
    )
}