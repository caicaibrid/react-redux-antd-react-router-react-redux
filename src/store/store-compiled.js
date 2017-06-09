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

var dev = process.env.NODE_ENV; /**
                                 * Created by Administrator on 2017/6/3 0003.
                                 */


var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : _redux.compose;
var enhancer = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default));
exports.default = (0, _redux.createStore)(_index2.default, dev === "development" ? enhancer : (0, _redux.applyMiddleware)(_reduxThunk2.default));

//# sourceMappingURL=store-compiled.js.map