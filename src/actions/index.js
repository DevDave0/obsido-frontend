export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const loginUser = (user) => {
    return (dispatch) => {
        dispatch({type: "LOGIN_USER", user})
    }
}


export const toggleLogin = () => {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_LOGIN'})
    }
}