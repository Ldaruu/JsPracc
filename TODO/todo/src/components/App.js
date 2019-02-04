import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibletodoList from '../containers/VisibletodoList'
import Selector from './Selector';

const App = () => {
  
    return (
      <div className="App">
       <h1>Welcome on my TODO App</h1>
       <AddTodo/>
       <VisibletodoList/>
       <Selector/>
      </div>
    );
  }


export default App;
