let initialState = {
    stock: [], loading: false
}

const stockReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_STOCK":
            return {
                ...state,
                stock: [...state.stock],
                loading: true
            }
        case "ADD_STOCK":
            return {
                ...state, 
                stock: [...state.stock, action.name],
                loading: false
            }

        case "ADD_FETCH_STOCK":
            return {
                ...state, 
                stock: [...state.stock, action.name],
                loading: false
            }


        case "CLEAR_STOCK":
            return initialState;
        default:
            return state;
    }
}

export default stockReducer;