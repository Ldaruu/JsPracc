import React, { Component } from 'react';
import AddTodo from './AddTodo'
import AppContainer from './VisibleTodos'




class TodoApp extends Component {
    render(){
        return(
         <div className="App">
             <AddTodo/>
           <AppContainer />
          
        </div>
      );
    }
}

export default  TodoApp
