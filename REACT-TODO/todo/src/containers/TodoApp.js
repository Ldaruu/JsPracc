import React, { Component } from 'react';
import AddTodo from './AddTodo'
import AppContainer from './VisibleTodos'
import { connect } from 'react-redux';



class TodoApp extends Component {
    render(){
        console.log('Anyad', this)
        return(
         <div className="App">
             <AddTodo/>
           <AppContainer />
          
        </div>
      );
    }
}

export default connect()  (TodoApp)
