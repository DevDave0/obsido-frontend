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

            const billsCategories = result.map(category => {
                if (category.attributes.name === "Bills"){
                    return category.attributes.id
                } else {
                    return undefined
                }
            })

            const shoppingCategories = result.map(category => {
                if (category.attributes.name === "Shopping"){
                    return category.attributes.id
                } else {
                    return undefined
                }
            })

            const miscCategories = result.map(category => {
                if (category.attributes.name === "Misc"){
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

            const answer2 = billsCategories.filter(element => {
                if (element !== undefined){
                    return element
                }
            })

            const answer3 = shoppingCategories.filter(element => {
                if (element !== undefined){
                    return element
                }
            })

            const answer4 = miscCategories.filter(element => {
                if (element !== undefined){
                    return element
                }
            })



            const invokeFoods = () =>{
                if(answer){
                    localStorage.foodCategoryId = answer[0]
                } else {
                    localStorage.foodCategoryId = '100'
                }
            }

            const invokeBills = () =>{
                if(answer2){
                    localStorage.billsCategoryId = answer2[0]
                } else {
                    localStorage.billsCategoryId = '100'
                }
            }

            const invokeShopping = () =>{
                if(answer3){
                    localStorage.shoppingCategoryId = answer3[0]
                } else {
                    localStorage.shoppingCategoryId = '100'
                }
            }

            const invokeMisc = () =>{
                if(answer4){
                    localStorage.miscCategoryId = answer4[0]
                } else {
                    localStorage.miscCategoryId = '100'
                }
            }

            invokeFoods();
            invokeBills();
            invokeShopping();
            invokeMisc();

            result.forEach(category => {
                dispatch({type: "ADD_FETCH_CATEGORY", category: category.attributes})
            })

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

export const clearBills = () => {
    return (dispatch) => {
        dispatch({type: "CLEAR_BILLS"})
    }
}

export const clearShopping = () => {
    return (dispatch) => {
        dispatch({type: "CLEAR_SHOPPING"})
    }
}

export const clearMisc = () => {
    return (dispatch) => {
        dispatch({type: "CLEAR_MISC"})
    }
}


export const addFoodName = (name) => {
    return (dispatch) => {
        dispatch({type: "ADD_FOOD_NAME", name})
    }
}

export const addBills = (name) => {
    return (dispatch) => {
        dispatch({type: "ADD_BILLS", name})
    }
}

export const addShopping = (name) => {
    return (dispatch) => {
        dispatch({type: "ADD_SHOPPING", name})
    }
}

export const addMisc = (name) => {
    return (dispatch) => {
        dispatch({type: "ADD_MISC", name})
    }
}


export const fetchFoods = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_FOODS"})
        fetch(subcategoryURL)
        .then(resp => resp.json())
        .then(subcategories => {
            
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

export const fetchBills = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_BILLS"})
        fetch(subcategoryURL)
        .then(resp => resp.json())
        .then(subcategories => {
            
            const result = subcategories.filter(subcategory => {
                if(subcategory.category_id === parseInt(localStorage.billsCategoryId)){
                    return subcategory
                }
                else 
                return null
            })
            result.forEach(subcategory => {
                dispatch({type: "ADD_FETCH_BILLS", name: subcategory})
            })
        })
    }
}

export const fetchShopping = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_SHOPPING"})
        fetch(subcategoryURL)
        .then(resp => resp.json())
        .then(subcategories => {
            
            const result = subcategories.filter(subcategory => {
                if(subcategory.category_id === parseInt(localStorage.shoppingCategoryId)){
                    return subcategory
                }
                else 
                return null
            })
            result.forEach(subcategory => {
                dispatch({type: "ADD_FETCH_SHOPPING", name: subcategory})
            })
        })
    }
}

export const fetchMisc = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_MISC"})
        fetch(subcategoryURL)
        .then(resp => resp.json())
        .then(subcategories => {
            
            const result = subcategories.filter(subcategory => {
                if(subcategory.category_id === parseInt(localStorage.miscCategoryId)){
                    return subcategory
                }
                else 
                return null
            })
            result.forEach(subcategory => {
                dispatch({type: "ADD_FETCH_MISC", name: subcategory})
            })
        })
    }
}