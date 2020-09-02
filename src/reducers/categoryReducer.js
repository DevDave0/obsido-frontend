const categoryReducer = (state = {
    categories: [],
}, action) => {
    switch(action.type) {
        case "ADD_CATEGORY":
            return {...state, categories: [...state.categories, action.category]}
        case "CLEAR_CATEGORY":
            return [];
        default:
            return state;
    }
}

export default categoryReducer;