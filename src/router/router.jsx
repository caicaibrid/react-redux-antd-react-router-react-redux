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
const UserCenter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/userCenter/userCenter').default)
    },'UserCenter')
}
const ProjectManage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/projectManage/ProjectManage').default)
    },'ProjectManage')
}
const FundManage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/fundManage/FundManage').default)
    },'FundManage')
}
const CustomerManage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/customerManage/CustomerManage').default)
    },'CustomerManage')
}
const ReportManage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/reportManage/ReportManage').default)
    },'ReportManage')
}
const NewsList = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/chinaventure/List').default)
    },'NewsList')
}
const MyProcess = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/myProcess/MyProcess').default)
    },'MyProcess')
}
export default (
    <div>
        <Route path="/login"  getComponent={Login} />
        <Route path="/"  component={Base}>
            <IndexRoute getComponent={Index} />
            <Route path="/userCenter"  getComponent={UserCenter} />
            <Route path="/projectManage"  getComponent={ProjectManage} />
            <Route path="/fundManage"  getComponent={FundManage} />
            <Route path="/customerManage"  getComponent={CustomerManage} />
            <Route path="/reportManage"  getComponent={ReportManage} />
            <Route path="/newsList"  getComponent={NewsList} />
            <Route path="/myProcess"  getComponent={MyProcess} />
        </Route>
    </div>
);
