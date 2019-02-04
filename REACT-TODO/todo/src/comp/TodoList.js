import  React  from 'react';

const TodoList = ({ listOfTodos })  => {
  return listOfTodos.map(element => (
    <p key={element}>{element}</p>
  ))
}
  
export default TodoList
