// @flow
let nextTodoId = 0;
export const addTodo = (text: String) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = (filter: String)  => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id: Number) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};