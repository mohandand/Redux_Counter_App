import counterReducer from "./counter";
import loggedinreducer from "./isLoggedIn";
import { combineReducers} from 'redux';

//creating a main reducers for all reducers by cobinning them.

const allReducers = combineReducer({
    counter : counterReducer, //so there counterReducer give value from reducer function . and counter will be our state.
    isLogged : loggedinreducer
});

export default allReducers;