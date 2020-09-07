let initialState = {
    bills: [], loading: false
}

const billsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_BILLS":
            return {
                ...state,
                bills: [...state.bills],
                loading: true
            }
        case "ADD_BILLS":
            return {
                ...state, 
                bills: [...state.bills, action.name],
                loading: false
            }

        case "ADD_FETCH_BILLS":
            return {
                ...state, 
                bills: [...state.bills, action.name],
                loading: false
            }


        case "CLEAR_BILLS":
            return initialState;
        default:
            return state;
    }
}

export default billsReducer;