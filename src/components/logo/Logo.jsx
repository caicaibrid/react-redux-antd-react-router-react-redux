/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React,{Component} from "react"
import logo from "../../images/logo.jpg"

export default class Logo extends Component{
    render(){
        return (
            <img alt="logo" className="logo" src={logo}/>
        )
    }
}