import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibletodoList from '../containers/VisibletodoList'

const App = () => {
  
    return (
      <div className="App">
       <h1>Welcome on my TODO App</h1>
       <AddTodo/>
       <VisibletodoList/>
      </div>
    );
  }
  console.log('AA',this)


export default App;
