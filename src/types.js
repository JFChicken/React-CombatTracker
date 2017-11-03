// @flow
// Models

export type Todo = {|
  id: string,
  title: string,
|};


// Reducers
// We can't use exact object type, because spread is not supported yet.
// We can't use Strict<T> = T & $Shape<T>, because it breaks autocomplete.
// TODO: Wait for Flow.

export type AppState = {
  combat:{
    round:number,
    currentInt:number,
  }
};


export type TodosState = {
  all: { [id: string]: Todo },
};

// State

export type State = {
  app: AppState,
  todos: TodosState,
};

// Actions

export type Action =
    | { type: 'ADD_TODO', payload: { todos: Array<Todo> } }
    | { type: 'TOGGLE_TODO', payload: { todos: Array<Todo> } }
    | { type: 'SET_VISIBILITY_FILTER', payload: { todos: Array<Todo> } }
    | { type: 'ADD_CHARACTER', payload: { todos: Array<Todo> } };
