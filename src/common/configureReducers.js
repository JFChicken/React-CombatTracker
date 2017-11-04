// @flow
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';

import combatRoundsReducer  from './combatRounds/reducers';


const rootReducer = combineReducers({
  routing: routerReducer,
  combatRound: combatRoundsReducer,
});

export default rootReducer