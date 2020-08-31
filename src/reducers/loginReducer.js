const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_LOGIN":
            return !state
        default:
            return state;
    }
}

export default loggedReducer;