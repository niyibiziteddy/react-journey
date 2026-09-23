import { useReducer, useState } from "react"
import Form from "./Form"
import TaskList from "./TaskList"


export default function App(){

    // const [taskObj,settaskObj] =  useState(["Sleeping","Waking up"])

    const [taskObj,dispatcher] = useReducer(reducer,[{id:crypto.randomUUID(),task:"sleeping",finished:false}])
    function deleter(key){
        dispatcher({type:"delete_item",id:key})
    }   
    function getTasks(formData){
        let data = formData.get("task")
        dispatcher({type:"add_task",task:data})
        //settaskObj(prevArray => ([...prevArray,data]))
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
                <TaskList onChecker={checker} onDelete={deleter} taskObj={taskObj}/>
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
            break;
        default:
            console.log("unknown action")
            break;
    }
}