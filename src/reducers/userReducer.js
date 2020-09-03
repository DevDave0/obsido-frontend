

function userReducer(state = {}, action){
    switch(action.type){
        case "LOGIN_USER":
            return action.user;
        case 'LOGOUT_USER':
            state = {};
            // break
        default:
            return state
    } 
}

export default userReducer;