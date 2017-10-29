// @flow
import React from 'react'
import Todo from './Todo'

type TodoListProps = {
  todos: Array<Object>,
  onTodoClick: Function,
}

const TodoList = ({todos, onTodoClick}: TodoListProps) => {

  return (<ul>
    {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
    ))}
  </ul>);
};


export default TodoList