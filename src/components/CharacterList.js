// @flow
import { connect } from 'react-redux'
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
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleCharacterList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterList);

export default VisibleCharacterList