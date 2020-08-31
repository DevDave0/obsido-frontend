import counterReducer from './testCounter';
import loggedReducer from './loginReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    login: loggedReducer,
    user: userReducer
})

export default rootReducer