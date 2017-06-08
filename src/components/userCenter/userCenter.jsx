/**
 * Created by Administrator on 2017/6/8 0008.
 */
import React, {Component} from "react"

import Header from "../header/Header"
import MenuBar from "../menuBar/MenuBar";

import "./userCenter.css"

export default class UserCenter extends Component{
    render(){
        return(
            <div>
                <Header title={"个人中心"}/>
                <div className="userCenterContent">
                    <MenuBar icon={"inbox"} title={"我的任务"}/>
                    <MenuBar link={"myProcess"} icon={"link"} title={"我的流程"}/>
                    <MenuBar icon={"setting"} title={"设置"}/>
                </div>
            </div>

        )
    }
}