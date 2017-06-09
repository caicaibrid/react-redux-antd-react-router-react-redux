/**
 * Created by Administrator on 2017/6/8 0008.
 */
import React, {Component} from "react"
import { Icon } from 'antd';
import { hashHistory } from 'react-router';

import Check from "./check/Check"
import "./header.css"
import DropDown from "../dropDown/DropDown";

export default class Header extends Component{
    goBack(){
        hashHistory.go(-1)
    }
    render(){
        return(
            <div className="header">
                <a onClick={this.goBack.bind(this)}>
                    <Icon type="left" className="back"/>
                </a>
                <div className="title">
                    {this.props.title}
                </div>
                {
                    this.props.createInvest?<div className="right">
                        <Check />
                    </div>:null
                }
                {
                    this.props.process?<div className="right">
                        <DropDown menu={[{hash:"/",name:"发起项目审批"}]}/>
                    </div>:null
                }
            </div>
        )
    }
}