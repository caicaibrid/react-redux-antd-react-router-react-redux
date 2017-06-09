"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = require("antd/lib/modal/style/css");

var _modal = require("antd/lib/modal");

var _modal2 = _interopRequireDefault(_modal);

exports.getLoginState = getLoginState;
exports.login_in = login_in;
exports.login_out = login_out;

var _actionTypes = require("./actionTypes");

var _storage = require("../utils/storage");

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLoginState() {
    var username = (0, _storage.getStore)("username");
    if (username) {
        return {
            type: _actionTypes.LOGIN_SUCCESS,
            username: username
        };
    } else {
        _modal2.default.error({
            title: '登录失效,请重新登录!',
            okText: "确定",
            onOk: function onOk() {
                _reactRouter.hashHistory.push("/login");
            }
        });
        return {
            type: _actionTypes.LOGIN_OUT
        };
    }
} /**
   * Created by Administrator on 2017/6/4 0004.
   */
function login_in(obj) {
    return function (dispatch) {
        //pending  正在进行登录的状态
        dispatch({
            type: _actionTypes.LOGIN_ING,
            username: obj.username
        });
        //开始发送异步请求登录
        new Promise(function (resolve, reject) {
            setTimeout(function () {
                (0, _storage.setStore)('username', obj.username);
                resolve({
                    type: _actionTypes.LOGIN_SUCCESS,
                    username: obj.username
                });
            }, 2000);
        }).then(function (res) {
            _reactRouter.hashHistory.push("/");
            dispatch(res);
        });
    };
}

function login_out() {
    //删除登录信息
    (0, _storage.removeStore)("username");
    return {
        type: _actionTypes.LOGIN_OUT
    };
}

//# sourceMappingURL=login-compiled.js.map