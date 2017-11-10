// @flow
import type {Action, ActorsState} from '../../types';

export const initialState = {
  all:[],
};

const actorsReducer = (state: ActorsState = initialState, action: Action): ActorsState => {
  switch (action.type) {
    case 'ADD_PLAYER':
      const newActor = {
        actorSettings:{
          ActorType: action.payload.actorType,
        },
        characteristics: {
          name: action.payload.name,
          HitPoints: 0,
          ResistanceCapacity: 0,
        },
        combat: {
          maxActions: 0,
          currentActions: 0,
          currentInitiative: action.payload.initiative,
        },
      };
      let allActors = state.all;
      allActors.push(newActor);
      return {
        ...state,
        all: allActors,

      };
    default:
      return state;
  }
};

export default actorsReducer;
