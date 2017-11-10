// @flow
import type { Action } from '../../types';


export const addActor = (name: String, maxActions: number, initiative: number, actorType: string):Action => ({
  type: 'ADD_PLAYER',
  payload:{ name,maxActions,initiative,actorType }
});
