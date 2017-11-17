// @flow
import type { Action, ActorsState } from '../../types';
// Helper functions
import { orderBy } from 'lodash'

export const initialState = {
  all: [],
};

const actorsReducer = ( state: ActorsState = initialState, action: Action ): ActorsState => {
  switch (action.type) {
    case 'ADD_PLAYER':
      // Create a new state with the new actor
      let newState = Object.assign({}, state, {
        all: state.all.concat({
          actorSettings: {
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
      // return the new state with the actors sorted by initiative
        newState.all = orderBy(newState.all, ( o ) => {
          return o.combat.currentInitiative
        }, [ 'desc' ]);
      return (newState);

    default:
      return state;
  }
};

export default actorsReducer;
