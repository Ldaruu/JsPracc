import React,{ Component } from 'react';


class UserAcc extends Component{
    state = {
        id: '',
        name: '',
        age: '',
        city: '',
        balance: ''
    }
    componentDidMount(){
        let id = this.props.match.params.acc_id;
        let name = this.props.match.params.name;
        let age = this.props.match.params.age;
        let city = this.props.match.params.city;
        let balance = this.props.match.params.balance;
        console.log(this.props)
        this.setState({
            id: id,
            name: name,
            age: age,
            city: city,
            balance: balance

        })
    }
render(){
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
             <td>{this.state.name}</td>
             <td>{this.state.age}</td>
             <td>{this.state.city}</td>
             <td>{this.state.balance}</td>
             </tbody>
         </table>
        </div>
    )
    }
}

export default UserAcc