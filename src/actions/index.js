const baseURL = 'http://localhost:3000/'
const categoryURL = baseURL + 'categories'

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

export const logoutUser = (user) => {
    return (dispatch) => {
        dispatch({type: "LOGOUT_USER", user})
    }
}


export const loggedIn = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGGED_IN'})
    }
}

export const loggedOut = () => {
    return (dispatch) => {
        dispatch({ type: 'LOG_OUT'})
    }
}

export const addCategory = (category) => {
    return (dispatch) => {
        dispatch({type: "ADD_CATEGORY", category})
    }
}
export const clearCategory = (category) => {
    return (dispatch) => {
        dispatch({type: "CLEAR_CATEGORY", category})
    }
}


export const fetchCategories = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_CATEGORIES"})
        fetch(categoryURL)
        .then(resp => resp.json())
        .then(categories => {
            const result = categories.filter(category => {
                if(category.user_id === parseInt(localStorage.userId)){
                    return category
                }
                else 
                    return null
            })
            dispatch({type: "ADD_CATEGORY", category: result})
        })
    }
}