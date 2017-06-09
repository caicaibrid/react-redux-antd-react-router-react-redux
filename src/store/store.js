/**
 * Created by Administrator on 2017/6/3 0003.
 */
import {createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index'

let dev = process.env.NODE_ENV;

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
export default createStore(
    rootReducer,
    dev==="development"?enhancer:applyMiddleware(thunk)
);