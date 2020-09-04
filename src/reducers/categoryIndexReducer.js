let initialState = 7

// index of 7 will be the toggle back to the top category graph

const categoryIndexReducer = (state = initialState, action) => {
    switch(action.type) {

        case "LOG_CATEGORY_INDEX":
            return action.index

        case "MAIN_INDEX":
            return initialState;
        default:
            return state;
    }
}

export default categoryIndexReducer;