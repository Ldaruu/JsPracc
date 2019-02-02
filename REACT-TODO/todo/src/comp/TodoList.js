import  React  from 'react';
import { Button } from "primereact/button";

const todoList = (todos, toggleTodo)=>{

    if(todos.length === 0 || todos.length === null || todos.length === undefined){
        return(
            <div>
            <h1>No Todos</h1>
            <Button
                label="Just Test BTN"/>
            </div>
        )
    }else{
    return(
    <div>
        <ul>
            {todos.map(todo =>
            <li key={todo.id} onClick={()=>toggleTodo(todo.id)}>{todo.todo}</li>
            )}
        </ul>

    </div>
    )
    }
}

export default todoList
