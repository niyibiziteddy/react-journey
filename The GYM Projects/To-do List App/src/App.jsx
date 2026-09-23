import { useReducer, useState } from "react"
import Form from "./Form"
import TaskList from "./TaskList"


export default function App(){

    // const [taskObj,settaskObj] =  useState(["Sleeping","Waking up"])
    const [isEditing,setIsEditing] = useState(false)

    const [taskObj,dispatcher] = useReducer(reducer,[{id:crypto.randomUUID(),task:"sleeping",finished:false,editing:false}])
    function deleter(key){
        dispatcher({type:"delete_item",id:key})
    }   
    function getTasks(formData){
        let data = formData.get("task")
        if(data !== ''){
            dispatcher({type:"add_task",task:data})
        }
        //settaskObj(prevArray => ([...prevArray,data]))
    } 
    function editTasks(key,formData){
        let data = formData.get("edit-task");
        dispatcher({type:"edit-task",change:data,id:key})
    }
    function enableEdit(key){
        dispatcher({type:"enable_edit",id:key})
    }
    function checker(key,checked){
        console.log("runned checker")
        dispatcher({type:"mark_checked",id:key,checked})
    } 
    return(
        <>
            <div className="container">
                <Form onGetTasks={getTasks} />
                <br />
                <TaskList onSave={editTasks} onEdit={enableEdit}  onChecker={checker} onDelete={deleter} taskObj={taskObj}/>
            </div>
        </>
    )
}

function reducer(state,action){
    switch(action.type){
        case("add_task"):
            return ([...state,{id:crypto.randomUUID(),task:action.task}])
        case("delete_item"):
            return [...state].filter(item => item.id !== action.id)
        case("mark_checked"):
            console.log("checked: ",action.checked)
            return [...state].map(item => {
                if(item.id === action.id){
                    return {...item,finished: action.checked}
                }
                else return item
            })
        case("edit-task"):
            return [...state].map(item => {
                if(item.id === action.id){
                    return {...item,task:action.change,editing:false}
                }
                else return item
            })
        case("enable_edit"):
            console.log("changed to true")
            return [...state].map(item => {
                if(item.id === action.id){
                    
                    return {...item,editing:true}
                }
                else return item
            })
        default:
            console.log("unknown action")
            break;
    }
}