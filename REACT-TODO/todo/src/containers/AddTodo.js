import React, { Component } from 'react';

class AddTodo extends Component {
    render(){
        return(
         <div>
          <form>
              <label htmlFor="todo">New Todo:</label>
              <input type="text"id="todo"/>
              <button>Submit</button>
         </form>  
        </div>
      );
    }
}

export default AddTodo
