import Form from "./Form"
import TaskList from "./TaskList"
export default function App(){
    return(
        <>
            <div className="container">
                <Form />
                <br />
                <TaskList />
            </div>
        </>
    )
}