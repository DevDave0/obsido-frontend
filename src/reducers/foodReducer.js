let initialState = {
    foods: [], loading: false
}

const foodReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_FOODS":
            return {
                ...state,
                foods: [...state.foods],
                loading: true
            }
        case "ADD_FOOD_NAME":
            return {
                ...state, 
                foods: [...state.foods, action.name],
                loading: false
            }

        case "ADD_FETCH_FOOD":
            return {
                ...state, 
                foods: [...state.foods, action.name],
                loading: false
            }


        case "CLEAR_FOOD":
            return initialState;
        default:
            return state;
    }
}

export default foodReducer;