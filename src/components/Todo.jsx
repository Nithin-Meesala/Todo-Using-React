import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

function Todo(){
    const todos = useSelector((state)=> state.todos);
    console.log(todos);

    const dispatch = useDispatch();

function deleteHandler(id){
console.log("delete" , id);
dispatch(deleteTodo(id));
}
function MarkHandler(id){
    console.log("Marked to set", id);
    dispatch(markAsDone(id));
}
    return(
<>
    <h1>Todos</h1>  
    <AddForm></AddForm>
    <div className="listcontainer">
        <ul> 
            {todos.map((todo)=>(
                <li className="list" key = {todo.id}  style={{textDecoration: todo.isDone ? "line-through" : "none",}} > 
                    <span className="task">{todo.task}</span> 
                    <div className="button-container">
                        <button className="delete" onClick={()=>deleteHandler(todo.id)}>Delete</button>
                        <button className="markasdone" onClick={()=>MarkHandler(todo.id)}>Mark as Done</button>
                    </div>
                </li>
               ))}
        </ul>
    </div>
</>)
}

export default Todo;
