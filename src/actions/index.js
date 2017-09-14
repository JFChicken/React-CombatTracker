// @flow
let nextTodoId = 0;

export const addCharacter = (characterName: String,characterInitiative: Number,characterMaxActions: Number):Action => ({
        type: 'ADD_CHARACTER',
        payload: { characterName,characterInitiative,characterMaxActions},
});

export const addTodo = (text: String):Action => ({
        type: 'ADD_TODO',
        payload: {text, id:nextTodoId++ },
});

export const setVisibilityFilter = (filter: String):Action  => ({
        type: 'SET_VISIBILITY_FILTER',
        payload: {filter},
});

export const toggleTodo = (id: Number):Action => ({
        type: 'TOGGLE_TODO',
        payload: {id},
});

export type Action =
     { type: string };