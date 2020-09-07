import counterReducer from './testCounter';
import loggedReducer from './loginReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import { combineReducers } from 'redux';
import categoryIndexReducer from './categoryIndexReducer';
import foodReducer from './foodReducer';
import billsReducer from './billsReducer';
import shoppingReducer from './shoppingReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    login: loggedReducer,
    user: userReducer,
    category: categoryReducer,
    categoryIndex: categoryIndexReducer,
    food: foodReducer,
    bills: billsReducer,
    shopping: shoppingReducer,
})

export default rootReducer