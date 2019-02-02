import React from 'react';
import {connect} from 'react-redux'
import { addTodo } from '../actions/index';


const AddTodo = ({dispatch}) =>{

    return(
        <div>
            <button onClick={ () => {
                dispatch(addTodo('Do it!'))}  }>
                Add
            </button>
        </div>
    )
}


export default connect() (AddTodo)