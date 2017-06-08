/**
 * Created by Administrator on 2017/6/8 0008.
 */
import React, {Component} from "react"
import Header from "../header/Header";

export default class myProcess extends Component{
    render() {
        return (
            <div className="myProcess">
                <Header title={"我的流程"} process={"process"}/>
                我的流程
            </div>
        )
    }
}