// @flow
import type { Action, CombatRoundsState } from '../../types';

export const initialState = {
  currentCombatRound: 0,
};

const reducer = (state: CombatRoundsState = initialState, action: Action): CombatRoundsState => {
  switch (action.type) {
    case 'NEXT_ROUND':
      return {
        ...state,
          currentCombatRound: state.currentCombatRound + 1
      };
    case 'CLEAR_ROUNDS':
      return { ...state, currentCombatRound: 0 };
    default:
      return state;
  }
};

export default reducer;
