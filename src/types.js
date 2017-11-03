// @flow
// Core

// Models


// Reducers
// We can't use exact object type, because spread is not supported yet.
// We can't use Strict<T> = T & $Shape<T>, because it breaks autocomplete.
// TODO: Wait for Flow.

export type AppState = {

};



// State

export type State = {
  app: AppState,
};

// Actions

export type Action =
    | { type: 'CLEAR_APP' };
