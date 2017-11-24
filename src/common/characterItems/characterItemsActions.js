// @flow
import type { Action } from '../../types';


export const addItem = (title: String,description:String,amount:number):Action => ({
  type: 'ADD_ITEM',
  payload:{ title,description,amount}
});

export const editItem = (id:String,title: String,amount:number,description:String):Action =>({
  type: 'EDIT_ITEM',
  payload:{ id,title,description,amount}
});