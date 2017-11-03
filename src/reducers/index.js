// @flow
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import appState from '../components/Home/reducer'


const rootReducer = combineReducers({
  appState,
  todos,
  visibilityFilter,
  routing: routerReducer
});

export default rootReducer