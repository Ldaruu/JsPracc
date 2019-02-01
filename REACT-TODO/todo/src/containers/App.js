import React, { Component } from 'react';
import TodoApp from './TodoApp';



class App extends Component {


  render() {
    console.log('THIS',this)
    return (
     <TodoApp todos={this.props} />
    );
  }
}

export default  App;
