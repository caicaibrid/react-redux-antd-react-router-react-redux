/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React, {Component} from "react"

import { Icon } from 'antd';
/*搜索条*/
import SearchBar from "./search/Search"
/*项目管理右上角+按钮*/
import CreateInvest from "./createInvest/createInvest"
import "./head.css"

export default class Header extends Component{
    render() {
        return (
            <div className="header">
                <Icon type="user" className="userCenter"/>
                <SearchBar placeholder={"input searchBar text"} />
                <div className="createInvest">
                    <CreateInvest />
                </div>
            </div>
        )
    }
}