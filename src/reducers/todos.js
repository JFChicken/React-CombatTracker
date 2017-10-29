// @flow
import type {Action, TodosState} from '../types';

export const initialState = [];

const todos = (state: TodosState = initialState, action: Action): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
          (todo.id === action.payload.id)
              ? {...todo, completed: !todo.completed}
              : todo
      );
    default:
      return state
  }
};

export default todos