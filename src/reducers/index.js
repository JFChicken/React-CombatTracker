// @flow
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import characterList from './characterList'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    characterList
});

export default todoApp