import {connect} from 'react-redux';
import todoList from '../comp/TodoList';

const mapStateToProps = state =>({
    todos: state.todos
    })

const mapDispatchToProps = (dispatch) =>{
    return{
    toggleTodo: (id) => dispatch({
        type: 'TOGGLE_TODO',id
        })
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(todoList);

export default AppContainer