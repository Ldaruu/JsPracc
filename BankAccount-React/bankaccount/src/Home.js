import React, {Component} from 'react';
import Accounts from './Accounts';
import AddAccount from './AddAccount';
import axios from 'axios';
import {connect} from 'react-redux';

class Home extends Component{
    
    state = {
        img: []
      }
      componentDidMount(){
        axios.get('http://api.giphy.com/v1/gifs/search?q=money&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8')
            .then(res => {
                this.setState({
                    img: res.data.data.slice(1,2)
                })
            })
    }

      addAccount = (account) => {
        account.id = Math.floor(Math.random() * Math.floor(100));
        let newAccount = [...this.props.accounts, account];
        this.setState({
          accounts: newAccount
        })
      }
      deleteAccout = (id) =>{
        let acc = this.props.accounts.filter(account => {
          return account.id !== id
        });
        this.setState({
          accounts: acc
        })
      }
      
      render() {
          console.log(this.props)
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
           <Accounts deleteAccout={this.deleteAccout} accounts={this.props.accounts}/>
           <AddAccount addAccount ={this.addAccount} />
          </div>
        );
      }
    }

    const mapStateToProps = (state) =>{
        return{
            accounts: state.accounts
        }
    }
    
    export default connect(mapStateToProps)(Home)
    
