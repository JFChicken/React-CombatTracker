// @flow
import type { Action } from '../../types';


export const addItem = (name: String, maxActions: number, initiative: number):Action => ({
  type: 'ADD_ITEM',
  payload:{ name,maxActions,initiative}
});