// @flow
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';

import reducer  from './combatRounds/reducers';


const rootReducer = combineReducers({
  routing: routerReducer,
  combatRound: reducer,
});

export default rootReducer