import React, {Component} from 'react';
import Accounts from './Accounts';
import AddAccount from './AddAccount';

class Home extends Component{
    state = {
        accounts: [
          {name: 'Bob', age: 25, city:'London', balance: 10000, id: 1},
          {name: 'John', age: 33, city:'Budapest',  balance: 15000, id: 2},
          {name: 'Linda', age: 28, city:'NewYork', balance: 20000, id: 3},
          {name: 'Susan', age: 45, city:'Toronto',balance: 330000, id: 4}
        ]
      }
      addAccount = (account) => {
        account.id = Math.floor(Math.random() * Math.floor(100));
        let newAccount = [...this.state.accounts, account];
        this.setState({
          accounts: newAccount
        })
      }
      deleteAccout = (id) =>{
        let acc = this.state.accounts.filter(account => {
          return account.id !== id
        });
        this.setState({
          accounts: acc
        })
      }
      
      render() {
        return (
          <div className="App">
           <h1>My first React App!</h1>
           <h4>Bank of React</h4>
           <Accounts deleteAccout={this.deleteAccout} accounts={this.state.accounts}/>
           <AddAccount addAccount ={this.addAccount} />
          </div>
        );
      }
    }
    
    export default Home;
    
