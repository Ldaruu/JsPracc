import React,{ Component } from 'react';
import { connect } from 'react-redux';


class UserAcc extends Component{

render(){
    console.log('EZ',this.props.account.name)
    return(
        <div>
        <table>
             <thead>
             <tr>
                 <th>Name</th>
                 <th>Age</th>
                 <th>City</th>
                 <th>Balance</th>
             </tr>
             </thead>
             <tbody>
                 <tr>
                    <td>{this.props.account.name}</td>
                    <td>{this.props.account.age}</td>
                    <td>{this.props.account.city}</td>
                    <td>{this.props.account.balance}</td>
             </tr>
             </tbody>
         </table>
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) =>{
let id = parseInt(ownProps.match.params.account_id);
return{
    account: state.accounts.find(account => account.id === id)
     
  }
}

export default connect(mapStateToProps)(UserAcc)