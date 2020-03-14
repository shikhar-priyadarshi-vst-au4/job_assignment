import { createStore , applyMiddleware } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import {rootReducer} from '../Redux/index';

export const configStore = () => {
    return createStore( rootReducer, applyMiddleware(thunkMiddleware));
}