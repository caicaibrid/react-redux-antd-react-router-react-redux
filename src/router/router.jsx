import React from "react";
import {Route,IndexRoute} from "react-router";


import Base from "../components/base/Base";


const Login = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/login/Login').default)
    },'Login')
}
const Index = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/index/Index').default)
    },'Index')
}



export default (
    <div>
        <Route path="/login"  getComponent={Login} />
        <Route path="/"  component={Base}>
            <IndexRoute getComponent={Index} />
        </Route>
    </div>
);
