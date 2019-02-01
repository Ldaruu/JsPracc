import React, { Component } from 'react';
import {connect} from 'react-redux';
import AppContainer from './VisibleTodos';



class AddTodo extends Component {

    state = {
        todo:''
    }

    handleChange = (e) =>{
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const todo = this.state.todo
        this.props.dispatch({type:'ADD_TODO',todo:todo})

        this.setState({
                todo:''
            })
    }

    render(){
       
        return(
         <div>
          <form onSubmit ={this.handleSubmit}>
              <label htmlFor="todo">New Todo:</label>
              <input type="text"id="todo" onChange={this.handleChange} value={this.state.text}/>
              <button>Submit</button>
         </form>  
        </div>
      );
    }
}

export default connect()(AddTodo,AppContainer)
