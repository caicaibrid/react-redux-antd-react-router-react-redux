/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React, {Component} from "react"
import { Menu, Dropdown, Icon } from 'antd';
import {Link} from "react-router"


export default class DropDown extends Component{
    /*
    * menu 格式 [{"name":"新建拟投资项目","hash":"/"},]
    * */
    render(){
        const {menu,icon,name} = this.props
        const dropDownMenu = (
            <Menu>
                {
                    menu.map(function (obj,index,array) {
                        return (
                            <Menu.Item key={index}>
                                <Link to={obj.hash}>{obj.name}</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        );
        return (
            <Dropdown overlay={dropDownMenu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    {name}<Icon type={icon||"plus"} />
                </a>
            </Dropdown>
        )
    }
}