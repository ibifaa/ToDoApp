import React from "react";
import { useState, createContext } from "react";
import AddTask from "../components/AddTask"

export const AppContext = createContext();

const TodoApp = ()=>{
    const [newTask, setTask] = useState("");
    const [addTodo, setTodo] = useState([]);

    <AppContext.Provider value={{newTask, setTask, addTodo, setTodo}}>

    
return(
    <div>
        <div className="container">
            <h1>To Do List</h1>
            <AddTask />
        </div>

    </div>
)
</AppContext.Provider>

}

export default TodoApp;