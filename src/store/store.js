/**
 * Created by Administrator on 2017/6/3 0003.
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index'

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);