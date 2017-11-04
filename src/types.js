// @flow
// Core

// Models


// Reducers
// We can't use exact object type, because spread is not supported yet.
// We can't use Strict<T> = T & $Shape<T>, because it breaks autocomplete.
// TODO: Wait for Flow.

export type AppState = {

};

export type CombatRoundsState = {
  currentCombatRound: number,
};

// State

export type State = {
  app: AppState,
  combatRound: CombatRoundsState,

};

// Actions

export type Action =
    | { type: 'NEXT_ROUND' }
    | { type: 'CLEAR_ROUNDS' };
