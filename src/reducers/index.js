import counterReducer from './testCounter';
import loggedReducer from './loginReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import { combineReducers } from 'redux';
import categoryIndexReducer from './categoryIndexReducer';
import foodReducer from './foodReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    login: loggedReducer,
    user: userReducer,
    category: categoryReducer,
    categoryIndex: categoryIndexReducer,
    food: foodReducer,
})

export default rootReducer