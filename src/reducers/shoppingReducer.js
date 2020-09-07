let initialState = {
    shopping: [], loading: false
}

const shoppingReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_SHOPPING":
            return {
                ...state,
                shopping: [...state.shopping],
                loading: true
            }
        case "ADD_SHOPPING":
            return {
                ...state, 
                shopping: [...state.shopping, action.name],
                loading: false
            }

        case "ADD_FETCH_SHOPPING":
            return {
                ...state, 
                shopping: [...state.shopping, action.name],
                loading: false
            }


        case "CLEAR_SHOPPING":
            return initialState;
        default:
            return state;
    }
}

export default shoppingReducer;