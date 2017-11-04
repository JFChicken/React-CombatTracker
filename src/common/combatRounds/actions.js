// @flow
import type { Action } from '../../types';

export const nextCombatRound = () => ({
  type: 'NEXT_ROUND',
});
export const clearCombatRounds = () => ({
  type: 'CLEAR_ROUNDS',
});

export const setActions = (maxActions:number):Action => ({
  type: 'SET_ACTIONS',
  payload:{ maxActions }
});

export const nextAction = () =>({type:'NEXT_ACTION'});
