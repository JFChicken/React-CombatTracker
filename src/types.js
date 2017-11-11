// @flow
// Core

// Models
type ActorSettngs = {
  ActorType: String,
}
type Characteristics = {
  name: String,
  hitPoints: number,
  resistanceCapacity: number,
};

type Combat = {
  maxActions: number,
  currentActions: number,
  currentInitiative: number,
};

type Actor = {
  actorSettings: ActorSettngs,
  characteristics: Characteristics,
  combat: Combat,
}


// Reducers
// We can't use exact object type, because spread is not supported yet.
// We can't use Strict<T> = T & $Shape<T>, because it breaks autocomplete.
// TODO: Wait for Flow.

export type ActorsState = {
  all:Array<Actor>
};

export type AppState = {};

export type CombatRoundsState = {
  currentCombatRound: number,
  currentAction: number,
  maxAction: number,
};

// State

export type State = {
  app: AppState,
  combatRound: CombatRoundsState,
  actors:ActorsState,
};

// Actions

export type Action =
    | { type: 'ADD_NAME' }
    | { type: 'NEXT_ROUND' }
    | { type: 'SET_ACTIONS', payload: { maxActions: number } }
    | { type: 'ADD_ACTOR', payload: { name: String, maxActions: number, initiative: number, actorType: string } }
    | { type: 'CLEAR_ROUNDS' };
