import counterReducer from './testCounter';
import loggedReducer from './loginReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import { combineReducers } from 'redux';
import categoryIndexReducer from './categoryIndexReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    login: loggedReducer,
    user: userReducer,
    category: categoryReducer,
    categoryIndex: categoryIndexReducer,
})

export default rootReducer