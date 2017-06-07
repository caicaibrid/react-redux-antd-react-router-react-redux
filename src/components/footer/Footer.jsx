import React, {Component} from "react"

import "./footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li className="active"><a href="/">我的首页</a></li>
                    <li><a href="/">项目管理</a></li>
                    <li><a href="/">基金管理</a></li>
                    <li><a href="/">客户管理</a></li>
                    <li><a href="/">报告管理</a></li>
                </ul>
            </div>
        );
    }
}



