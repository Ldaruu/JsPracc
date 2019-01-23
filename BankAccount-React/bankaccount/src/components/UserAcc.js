import React,{ Component } from 'react';

class UserAcc extends Component{
    state = {
        id: null
    }
    componentDidMount(){
        let id = this.props.match.params.acc_id;
        this.setState({
            id: id
        })
    }
render(){
    return(
        <div>
            <h4>User Account</h4>
            {this.state.id}
        </div>
    )
    }
}

export default UserAcc