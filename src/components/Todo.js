// @flow
import React from 'react'
import PropTypes from 'prop-types'

type TodoProps = {
    onClick: Function,
    completed: Boolean,
    text: String,
}

const Todo = ({ onClick, completed, text }:TodoProps) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)


export default Todo