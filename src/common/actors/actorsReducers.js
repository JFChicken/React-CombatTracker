// @flow
import type {Action, ActorsState} from '../../types';

export const initialState = {
  all:[],
};

const actorsReducer = (state: ActorsState = initialState, action: Action): ActorsState => {
  switch (action.type) {
    case 'ADD_PLAYER':

      return Object.assign({}, state, {
        all : state.all.concat({
          actorSettings:{
            ActorType: action.payload.actorType,
          },
          characteristics: {
            name: action.payload.name,
            hitPoints: 0,
            resistanceCapacity: 0,
          },
          combat: {
            maxActions: action.payload.maxActions,
            currentActions: action.payload.maxActions,
            currentInitiative: action.payload.initiative,
          },
        })
      });

    default:
      return state;
  }
};

export default actorsReducer;
