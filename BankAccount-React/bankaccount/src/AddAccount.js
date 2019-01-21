import React,{Component} from 'react';

class AddAcc extends Component{
    state = {
        name: '',
        age: '',
        city: '',
        balance: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addAccount(this.state);
        this.setState({
            name: '',
            age: '',
            city: '',
            balance: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>   
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} value={this.state.age} />
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" onChange={this.handleChange} value={this.state.city} />
                    <label htmlFor="balance">Balance:</label>
                    <input type="text" id="balance" onChange={this.handleChange} value={this.state.balance} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddAcc