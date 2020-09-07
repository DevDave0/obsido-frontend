let initialState = {
    misc: [], loading: false
}

const miscReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_MISC":
            return {
                ...state,
                misc: [...state.misc],
                loading: true
            }
        case "ADD_MISC":
            return {
                ...state, 
                misc: [...state.misc, action.name],
                loading: false
            }

        case "ADD_FETCH_MISC":
            return {
                ...state, 
                misc: [...state.misc, action.name],
                loading: false
            }


        case "CLEAR_MISC":
            return initialState;
        default:
            return state;
    }
}

export default miscReducer;