import React, {Component} from "react"
import {Link} from "react-router"

import "./footer.css"
export default class Footer extends Component {
    render() {
        const {active} = this.props
        return (
            <div className="footer">
                <ul>
                    <li className={active===0?"active":""}><Link to="/">我的首页</Link></li>
                    <li className={active===1?"active":""}><Link to="/projectManage">项目管理</Link></li>
                    <li className={active===2?"active":""}><Link to="/fundManage">基金管理</Link></li>
                    <li className={active===3?"active":""}><Link to="/customerManage">客户管理</Link></li>
                    <li className={active===4?"active":""}><Link to="/reportManage">报告管理</Link></li>
                </ul>
            </div>
        );
    }
}



