import React, { Component } from 'react';
import {connect} from 'react-redux';



class AddTodo extends Component {

    state = {
        todo:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        console.log(e.target[0].value)
        e.preventDefault();
        const todo = this.state.todo
        this.props.dispatch({type:'ADD_TODO',todo:todo})
        e.target[0].value = ''; 
        this.setState({
                todo:''
            })
    }

    render(){
        return(
         <div>
          <form onSubmit ={this.handleSubmit}>
              <label htmlFor="todo">New Todo:</label>
              <input type="text"id="todo" onChange={this.handleChange}  />
              <button>Submit</button>
         </form>  
        </div>
      );
    }
}

export default connect()(AddTodo)
