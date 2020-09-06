const baseURL = 'http://localhost:3000/'
const categoryURL = baseURL + 'categories'
const subcategoryURL = baseURL + 'sub_categories'

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

            const result = categories.data.filter(category => {
                if(parseInt(category.relationships.user.data.id) === parseInt(localStorage.userId)){
                    return category
                } else {
                    return null
                }
            })
            

            const foodCategories = result.map(category => {
                if (category.attributes.name === "Food"){
                    return category.attributes.id
                } else {
                    return undefined
                }
            })

            const answer = foodCategories.filter(element => {
                if (element !== undefined){
                    return element
                }
            })
            // const answer = foodCategories




            // console.log(result)
            // console.log(foodCategories)
            // console.log(answer[0])

            const invoke = () =>{
                if(answer){
                    localStorage.foodCategoryId = answer[0]
                } else {
                    localStorage.foodCategoryId = '100'
                }
            }

            invoke();
            // localStorage.foodCategoryId = answer

            // console.log(foodIds)
            // const firstFoodId = result.map(category => {
            //     if(category.attributes.name === 'Food'){
            //         return category.attributes.id
            //     }
            // })

            // console.log(firstFoodId)


            result.forEach(category => {
                dispatch({type: "ADD_FETCH_CATEGORY", category: category.attributes})
            })
            // console.log(result)
        })
    }
}

export const logCategoryIndex = (index) => {
    return (dispatch) => {
        dispatch({type: "LOG_CATEGORY_INDEX", index})
    }
}

export const clearCategoryIndex = () => {
    return (dispatch) => {
        dispatch({type: "CLEAR_CATEGORY_INDEX"})
    }
}


export const clearFood = () => {
    return (dispatch) => {
        dispatch({type: "CLEAR_FOOD"})
    }
}

export const addFoodName = (name) => {
    return (dispatch) => {
        dispatch({type: "ADD_FOOD_NAME", name})
    }
}



export const fetchFoods = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_FOODS"})
        fetch(subcategoryURL)
        .then(resp => resp.json())
        .then(subcategories => {
            // console.log(subcategories)
            
            const result = subcategories.filter(subcategory => {
                if(subcategory.category_id === parseInt(localStorage.foodCategoryId)){
                    return subcategory
                }
                else 
                return null
            })
            result.forEach(subcategory => {
                dispatch({type: "ADD_FETCH_FOOD", name: subcategory})
            })
        })
    }
}