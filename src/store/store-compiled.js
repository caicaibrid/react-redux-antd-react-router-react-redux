'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('../reducer/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

const middlewares = [thunk]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState){
    return createStoreWithMiddleware(rootReducer,initialState)
}*/

var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose; /**
                      * Created by Administrator on 2017/6/3 0003.
                      */

var enhancer = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default));
exports.default = (0, _redux.createStore)(_index2.default, enhancer);

//# sourceMappingURL=store-compiled.js.map