/**
 * Created by Administrator on 2017/6/8 0008.
 */
import React, {Component} from "react"
import { Icon } from 'antd';


import Check from "./check/Check"
import "./header.css"
import DropDown from "../dropDown/DropDown";

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <a href="javascript:history.go(-1)">
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