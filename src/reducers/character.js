// @flow

const initialState:Array<Object>= [];

const character = (state:Array<Object> = initialState, action:Object) => {
    switch (action.type) {
        case 'ADD_CHARACTER':
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    initiate: action.payload.initiate,
                }
            ];
        default:
            return state
    }
};

export default character
