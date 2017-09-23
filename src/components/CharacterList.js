// @flow
import React from 'react'
import Character from './Character'

type CharacterListProps = {
    characters: Object,
    onTodoClick: Function,

}
const CharacterList = ({ characters, onTodoClick }):CharacterListProps => (
    <ul>
        {characters.map(character => (
            <Character key={character.id} {...character} onClick={() => onTodoClick(character.id)} />
        ))}
    </ul>
)


export default CharacterList