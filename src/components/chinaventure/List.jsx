/**
 * Created by Administrator on 2017/6/8 0008.
 */
import React, {Component} from "react"
import Header from "../header/Header";

export default class List extends Component{
    render(){
        return(
            <div>
                <Header title={"投中消息"}/>
                <div>
                    新闻列表
                </div>
            </div>
        )
    }
}