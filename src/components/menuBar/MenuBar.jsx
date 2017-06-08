/**
 * Created by Administrator on 2017/6/8 0008.
 */
import React, {Component} from "react"
import {Link} from "react-router"
import {Icon} from "antd"

import "./menuBar.css"

export default class MenuBar extends Component{
    render(){
        const {icon,title,direction,link} = this.props
        return(
            <Link to={link}>
                <div className="menuBar">
                    <div className="icon">
                        <Icon type={icon || "file"}/>
                    </div>
                    <div className="title">
                        {title}
                    </div>
                    <div className="direction">
                        <Icon type={ direction || "right" } />
                    </div>
                </div>
            </Link>
        )
    }
}