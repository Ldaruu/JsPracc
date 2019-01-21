import React, { Component } from 'react';
import Accounts from './Accounts';


class App extends Component {
  state = {
    accounts: [
      {name: 'Bob', age: 25, city:'London', balance: 10000, id: 1},
      {name: 'John', age: 33, city:'Budapest',  balance: 15000, id: 2},
      {name: 'Linda', age: 28, city:'NewYork', balance: 20000, id: 3},
      {name: 'Susan', age: 45, city:'Toronto',balance: 330000, id: 4}
    ]
  }
  render() {
    return (
      <div className="App">
       <h1>My first React App!</h1>
       <h4>Bank of React</h4>
       <Accounts accounts={this.state.accounts}/>
      </div>
    );
  }
}

export default App;

