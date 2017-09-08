// @flow
const initialState:string = 'SHOW_ALL';

const visibilityFilter = (state:string = initialState, action:Object) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter