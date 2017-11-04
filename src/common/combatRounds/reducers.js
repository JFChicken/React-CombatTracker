// @flow
import type {Action, CombatRoundsState} from '../../types';

export const initialState = {
  currentCombatRound: 1,
  currentAction: 1,
  maxAction: 4,
};

const combatRoundsReducer = (state: CombatRoundsState = initialState, action: Action): CombatRoundsState => {
  switch (action.type) {
    case 'SET_ACTIONS':
      return {
        ...state,
        maxAction: action.payload.maxActions
      };
    case 'NEXT_ROUND':
      return {
        ...state,
        currentCombatRound: state.currentCombatRound + 1
      };
    case 'NEXT_ACTION':

      const {currentCombatRound, currentAction, maxAction} = state;
      const nextAction = currentAction + 1;
      if(nextAction > maxAction){
        // we are moving to the next round up the combat round and set the current action to 1
        const nextCombatRound = state.currentCombatRound + 1;
        return{
            ...state,
          currentCombatRound: nextCombatRound,
          currentAction: 1,

        }
      }
      if(nextAction <= maxAction){
        // we are still good to go with the current combat round
        return{
          ...state,
          currentAction: nextAction,

        }
      }
      // if we did something wonky we will just keep what we have
      return state;
    case 'CLEAR_ROUNDS':
      return {...state, currentCombatRound: 1,currentAction: 1,};
    default:
      return state;
  }
};

export default combatRoundsReducer;
