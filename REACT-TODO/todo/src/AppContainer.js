import { connect } from 'react-redux';
import App from './App';
import getTodos from './getTodos';

const mapStateToProps = state =>  state.todoReducer;


const mapDispatchToProps = dispatch => ({
    getTodos: () => dispatch(getTodos()),
  });
  

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;