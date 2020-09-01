import counterReducer from './testCounter';
import loggedReducer from './loginReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    login: loggedReducer,
    user: userReducer,
    category: categoryReducer
})

export default rootReducer