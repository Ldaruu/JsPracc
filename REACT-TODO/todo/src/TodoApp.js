import React, { Component } from 'react';
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'



class TodoApp extends Component {
    render(){
        console.log('Anyad', this)
        return(
         <div className="App">
             <AddTodo/>
           <VisibleTodos  />
          
        </div>
      );
    }
}

export default TodoApp
