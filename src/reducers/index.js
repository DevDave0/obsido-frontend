import counterReducer from './testCounter';
import loggedReducer from './loginReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import { combineReducers } from 'redux';
import categoryIndexReducer from './categoryIndexReducer';
import foodReducer from './foodReducer';
import billsReducer from './billsReducer';
import shoppingReducer from './shoppingReducer';
import miscReducer from './miscReducer';
import cryptosReducer from './cryptosReducer';
import stockReducer from './stockReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    login: loggedReducer,
    user: userReducer,
    category: categoryReducer,
    categoryIndex: categoryIndexReducer,
    food: foodReducer,
    bills: billsReducer,
    shopping: shoppingReducer,
    misc: miscReducer,
    cryptos: cryptosReducer,
    stock: stockReducer,
})

export default rootReducer