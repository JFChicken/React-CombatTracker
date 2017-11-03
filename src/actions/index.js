// @flow
import type {Action,Deps, Todo} from '../types';

export const addTodo = (title: string) =>
    ({ getUid, now }: Deps): Action => ({
        type: 'ADD_TODO',
        payload: {
            todo: {
                completed: false,
                createdAt: now(),
                id: getUid(),
                title: title.trim(),
            },
        },
    });

export const setVisibilityFilter = (filter: String): Action => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {filter},
});

export const toggleTodo = (id: Number): Action => ({
  type: 'TOGGLE_TODO',
  payload: {id},
});

let nextCharacterId = 0;

export const addCharacter = (name: String, initiate: Number): Action => ({
  type: 'ADD_CHARACTER',
  payload: {name, initiate, id: nextCharacterId++},
});
