// @flow
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import character from './character';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    character,
});

export default todoApp