// @flow
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

type TodoListProps = {
    todos: Array<Object>,
    onTodoClick: Function,
}

const TodoList = ({ todos, onTodoClick }:TodoListProps) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
    </ul>
)


export default TodoList