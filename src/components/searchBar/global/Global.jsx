/**
 * Created by Administrator on 2017/6/8 0008.
 */
import React, {Component} from "react"
import {Link} from "react-router"
import {Icon} from "antd"

export default class Global extends Component{
    render(){
        return (
            <Link to="/newsList">
                <Icon type="global" style={{color:"#ff0000"}}/>
            </Link>
        )
    }
}