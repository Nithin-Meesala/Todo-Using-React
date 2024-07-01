import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){

    const[task,setTask]= useState("");
    const dispatch = useDispatch();
    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task))
    }
    return(
        <>
        <form action="" onSubmit={submitHandler}>

            <input className="input" type="text" name="" id="" onChange={(e)=> setTask(e.target.value)} />
            <button className="addtask">Add Task</button>
        </form>
        
        
        </>
    )
}