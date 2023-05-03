import {useContext} from "react";
import { AppContext } from "./TodoApp";

const AddTask = () =>{
   const {addTodo, setTodo, newTask,setTask} = useContext(AppContext);
// line 7 is a tenary operator check if "addTodo" is empty if yes give the id a value of 1 but if its not empty take the last item id and increase it by 1
    const addNewTask = () => {const task = { id: addTodo.length === 0 ? 1 : addTodo[addTodo.length-1]+1,   
         taskName:newTask,
    };
    setTodo([...addTodo, task]);};
return(
    <div>
        {addTodo.map((newTask, key) => {
         return(
        <div>
            <h4 key={key}> {newTask.task}</h4>
            <input placeholder="Add a todo to the list" type="text" onChange={(event) =>{setTask(event.target.value)}}/>
            <button onClick={addNewTask}> Add Task</button>
        </div>
            
            
        )
        })};
    </div>
)
    
}

export default AddTask