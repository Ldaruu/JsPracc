import React, { Component } from 'react';
import TodoList from './comp/TodoList';

const App = ({ todos, getTodos }) => {
{console.log(todos)}
  if(todos.length === 0){
    return <button onClick={getTodos}>Get todos</button>
  } else {
    return <TodoList listOfTodos={todos}/>
  }
};

export default App;

