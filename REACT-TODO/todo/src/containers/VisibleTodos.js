import {connect} from 'react-redux';
import TodoList from '../comp/TodoList';
import rootReducer from '../reducers/rootReducer';


const mapStateToProps = (state) =>{
    return{
    todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
    toggleTodo: (id) => dispatch({
        type: 'TOGGLE_TODO',id
        })
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList,rootReducer);

export default AppContainer

// import { connect } from 'react-redux'
// import TodoList from '../components/TodoList'

// const mapStateToProps = state => ({
//     todos: state.todos
// })

// const mapDispatchToProps = dispatch => ({
//     toggleTodo: (id) => dispatch({ type: 'TOGGLE_TODO', id })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList)