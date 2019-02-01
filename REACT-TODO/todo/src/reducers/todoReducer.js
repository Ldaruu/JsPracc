const defaultState = {
    todos:[{
        todo:'Buy Milk',
        id:99,
        completed:false
    }]
}

let id =0;

const todoReducer = (state = defaultState, action) =>{
    switch (action.type){
        case 'ADD_TODO':
        let newTodo = [...state.todos,{todo:action.todo,id:id++,completed:false}]
        return {
            ...state, 
            todos: newTodo,
            }
        
        case 'TOOGLE_TODO':
            return state.map(todo =>
            (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)

        default:
        return state;

    }
} 
export default todoReducer