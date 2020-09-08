let initialState = {
    categories: [], displayedCategories: [], loading: false
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_CATEGORIES":
            return {
                ...state,
                categories: [...state.categories],
                loading: true
            }
        case "ADD_CATEGORY":
            return {
                ...state, 
                categories: [...state.categories, action.category],
                loading: false
            }

        case "ADD_FETCH_CATEGORY":
            return {
                ...state, 
                categories: [...state.categories, action.category],
                displayedCategories: [...state.displayedCategories, action.category],
                loading: false
            }


        case "CLEAR_CATEGORY":
            return initialState;
        default:
            return state;
    }
}

export default categoryReducer;