import React, {Component} from 'react';
import Accounts from './Accounts';
import AddAccount from './AddAccount';
import axios from 'axios';

class Home extends Component{
    state = {
        accounts: [
          {name: 'Bob', age: 25, city:'London', balance: 10000, id: 1},
          {name: 'John', age: 33, city:'Budapest',  balance: 15000, id: 2},
          {name: 'Linda', age: 28, city:'NewYork', balance: 20000, id: 3},
          {name: 'Susan', age: 45, city:'Toronto',balance: 330000, id: 4}
        ],
        img: []
      }
      componentDidMount(){
        axios.get('http://api.giphy.com/v1/gifs/search?q=money&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8')
            .then(res => {
                console.log(res.data.data);
                this.setState({
                    img: res.data.data.slice(1,2)
                })
            })
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
          const{img} = this.state
          const image = img.length ? (
              img.map(pic => {
                  let imgUrl = pic.images.original.url ;
                  console.log(imgUrl);
                  return(
                      <div key={pic.id}>
                        <img src={imgUrl}  alt="$$$" height="200" width="200"/>
                      </div>
                  )
              })
          ) : (
              <div>Bank is Closed!</div>
          )

        return (
          <div className="App">
           <h1>My first React App!</h1>
           <h4>Bank of React</h4>
           {image}
           <Accounts deleteAccout={this.deleteAccout} accounts={this.state.accounts}/>
           <AddAccount addAccount ={this.addAccount} />
          </div>
        );
      }
    }
    
    export default Home;
    
