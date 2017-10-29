// @flow
import type {Action, TodosState} from '../types';

export const initialState = [];


const todos = (state: TodosState = initialState, action: Action): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
        const { todo } = action.payload;
      return [
        ...state,
        {
          id: todo.id,
          text: todo.text,
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