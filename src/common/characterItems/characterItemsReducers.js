// @flow
import type { Action, CharacterItemsState } from '../../types';
// Helper functions
import shortId from 'shortid';
// storage local functions
import { setLocalStorage, getLocalStorage } from '../utilities';


export const initialState = {
  equipment: [
    {
      id: shortId.generate(),
      title: "Credits",
      amount: 0,
      description: "Money that is accepted anywhere digital money is accepted at."
    },
    {
      id: shortId.generate(),
      title: "Black Market Goods",
      amount: 0,
      description: "From bottle caps to fine minerals; all the stuff ill repute people will accept. "
    }
  ],
};

const characterItemsReducer = ( state: CharacterItemsState = initialState, action: Action ): CharacterItemsState => {
  let newState = {};
  let currentEquipment = {};
  switch (action.type) {
    case 'ADD_ITEM':
      // Create a new state with the new item
      newState = Object.assign({}, state, {
        equipment: state.equipment.concat({
          id: shortId.generate(),
          title: action.payload.title,
          amount: action.payload.amount,
          description: action.payload.description,
        })
      });
      return (newState);

    case 'EDIT_ITEM':
      currentEquipment = state.equipment;
      newState = currentEquipment.map(item => {
            if (item.id === action.payload.id) {
              item.title = action.payload.title;
              item.amount = action.payload.amount;
              item.description = action.payload.description;
            }
            return item;
          }
      );

      return ({ ...state, equipment: newState });

    case 'STORE_LOCAL':
      currentEquipment = state.equipment;
      setLocalStorage('equipment', currentEquipment);

      return (state);

    case 'GET_LOCAL':
      const localEquipment = getLocalStorage('equipment');
      newState = Object.assign({}, state,{equipment:localEquipment});

      return (newState);

    default:
      return state;
  }
};

export default characterItemsReducer;
