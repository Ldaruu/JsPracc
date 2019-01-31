import React, { Component } from 'react';
import AddTodo from './containers/AddTodo'

class TodoApp extends Component {
    render(){
        return(
         <div className="App">
             <AddTodo />
        </div>
      );
    }
}

export default TodoApp
