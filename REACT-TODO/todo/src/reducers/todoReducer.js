const defaultState = {
    todos:[],
}


const todoReducer = (state = defaultState, action) =>{
    switch (action.type){
        case 'GET_TODOS':
        return Object.assign({}, state, {
            todos: ['todo1', 'todo2', 'todo3']
        })
        default:
        return state;

    }
} 
export default todoReducer