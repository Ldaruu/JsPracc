import React, { Component } from 'react';
import TodoApp from './containers/TodoApp';
import { connect } from 'react-redux';



class App extends Component {

  render() {
    console.log('THIS',this)
    return (
     <TodoApp />
    );
  }
}

export default connect() (App);
