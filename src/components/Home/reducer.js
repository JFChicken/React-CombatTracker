// @flow
import type {Action, AppState} from '../../types';

export const initialState = {
  combat:{
    round:0,
    currentInt:20,
  }
};

const appState = (state: AppState = initialState, action: Action): AppState => {
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
    default:
      return state
  }
};

export default appState