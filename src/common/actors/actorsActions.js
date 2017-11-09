// @flow
import type { Action } from '../../types';


export const setActions = (name: String, maxActions: number, initiative: number, actorType: string):Action => ({
  type: 'ADD_PLAYER',
  payload:{ name,maxActions,initiative,actorType }
});
