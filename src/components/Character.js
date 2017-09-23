// @flow
import React from 'react'

type CharacterProps ={
    onClick: Function,
    completed: Boolean,
    text: String,
}

const Character = ({ onClick, completed, text }):CharacterProps => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)


export default Character