/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React, {Component} from "react"
import { Menu, Dropdown, Icon } from 'antd';


const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">新建拟投资项目</a>
        </Menu.Item>
    </Menu>
);

export default class CreateInvest extends Component{
    render(){
        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    <Icon type="plus" />
                </a>
            </Dropdown>
        )
    }
}