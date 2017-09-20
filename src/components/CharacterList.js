// @flow
import React from 'react'
import Character from './Character'

const CharacterList = ({ characters, onTodoClick }) => (
    <ul>
        {characters.map(character => (
            <Character key={character.id} {...character} onClick={() => onTodoClick(character.id)} />
        ))}
    </ul>
)


export default TodoList