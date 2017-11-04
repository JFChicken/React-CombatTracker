// @flow
import type { Action } from '../../types';

export const nextCombatRound = () => ({
  type: 'NEXT_ROUND',
});
export const clearCombatRounds = () => ({
  type: 'CLEAR_ROUNDS',
});
