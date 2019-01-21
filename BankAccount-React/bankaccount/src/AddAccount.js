import React,{Component} from 'react';

class AddAcc extends Component{
    state = {
        name: null,
        age: null,
        city: null,
        balance: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmint = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmint}>   
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" onChange={this.handleChange} />
                    <label htmlFor="balance">Balance:</label>
                    <input type="text" id="balance" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddAcc