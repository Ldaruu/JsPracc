import React from 'react';
import {connect} from 'react-redux'
import { addTodo } from '../actions/index';


const AddTodo = ({dispatch}) =>{
let input;
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value))
                input.value ='' }}>
                <input ref={node => input = node} />
                <button type="submit">ADD TODO</button>
                </form>
            {/* <button onClick={ () => {
                dispatch(addTodo('Do it!'))}  }>
                Add
            </button> */}
        </div>
    )
}


export default connect() (AddTodo)