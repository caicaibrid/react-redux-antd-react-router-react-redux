/**
 * Created by Administrator on 2017/6/3 0003.
 */
import {createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index'

/*

const middlewares = [thunk]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState){
    return createStoreWithMiddleware(rootReducer,initialState)
}*/

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
export default createStore(
    rootReducer,
    enhancer//applyMiddleware(thunk)
);