/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React, {Component} from "react"
import {Link} from "react-router"

import { Icon } from 'antd';
/*搜索条*/
import SearchBar from "./search/Search"
/*项目管理右上角+按钮*/
import DropDown from "../dropDown/DropDown" //项目管理
import Global from "./global/Global" //报告管理
import "./searchBar.css"

export default class Header extends Component{
    render() {
        return (
            <div className="search">
                <Link to="/userCenter">
                    <Icon type="user" className="left"/>
                </Link>
                <SearchBar placeholder={"input searchBar text"} />
                {
                    this.props.rightIcon==="createInvest"?<div className="right">
                        <DropDown menu={[{"name":"新建拟投资项目","hash":"/"}]}/>
                    </div>:null
                }
                {
                    this.props.rightIcon==="global"?<div className="right">
                        <Global />
                    </div>:null
                }
            </div>
        )
    }
}