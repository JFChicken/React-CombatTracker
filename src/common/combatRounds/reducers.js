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
        currentFieldIdExpanded: action.payload.fieldId,
      };
    case 'CLEAR_ROUNDS':
      return { ...state, isDialogOpen: !state.isDialogOpen };
    default:
      return state;
  }
};

export default reducer;
