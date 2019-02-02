import React from 'react'
import {toggleTodo} from '../actions/index'

const TodoList = ({ todos, dispatch}) => (
<ul>
    {todos.map(todo =>
        <li key={todo.id}
        onClick={() =>{
            dispatch(toggleTodo(todo.id))}}
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
            {todo.text}
        </li>)}
</ul>
)

export default TodoList