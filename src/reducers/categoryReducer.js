const categoryReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_CATEGORY":
            return true

        default:
            return state;
    }
}

export default categoryReducer;