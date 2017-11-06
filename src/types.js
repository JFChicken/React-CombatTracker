// @flow
// Core

// Models
type Charistics = {
  name:String,
      HitPoints:number,
      ResistanceCapacity:number,
};

type Combat = {
  maxActions:number,
      currentActions:number,
      bonuses:{
    initiative:number,
  },
};


// Reducers
// We can't use exact object type, because spread is not supported yet.
// We can't use Strict<T> = T & $Shape<T>, because it breaks autocomplete.
// TODO: Wait for Flow.

export type Player = {
  charistics:Charistics,
  combat:Combat,
};

export type AppState = {

};

export type CombatRoundsState = {
  currentCombatRound: number,
  currentAction: number,
  maxAction: number,
};

// State

export type State = {
  app: AppState,
  combatRound: CombatRoundsState,

};

// Actions

export type Action =
    | { type: 'ADD_NAME' }
    | { type: 'NEXT_ROUND' }
    | { type: 'SET_ACTIONS', payload:{ maxActions:number } }
    | { type: 'CLEAR_ROUNDS' };
