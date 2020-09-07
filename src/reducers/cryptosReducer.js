let initialState = {
    cryptos: [], loading: false
}

const cryptosReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_CRYPTOS":
            return {
                ...state,
                cryptos: [...state.cryptos],
                loading: true
            }
        case "ADD_CRYPTOS":
            return {
                ...state, 
                cryptos: [...state.cryptos, action.name],
                loading: false
            }

        case "ADD_FETCH_CRYPTOS":
            return {
                ...state, 
                cryptos: [...state.cryptos, action.name],
                loading: false
            }


        case "CLEAR_CRYPTOS":
            return initialState;
        default:
            return state;
    }
}

export default cryptosReducer;