// @flow
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';

import combatRoundsReducer  from './combatRounds/reducers';
import actorsReducer from './actors/actorsReducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  combatRound: combatRoundsReducer,
  actors: actorsReducer,
});

export default rootReducer