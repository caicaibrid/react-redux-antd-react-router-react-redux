/**
 * Created by Administrator on 2017/6/8 0008.
 */
import React, {Component} from "react"
import SearchBar from "../searchBar/SearchBar"
import Footer from "../footer/Footer"

export default class ProjectManage extends Component{
    render(){
        return (
            <div className="container">
                <SearchBar  rightIcon={"createInvest"}/>
                ProjectManage 内容
                <Footer active={1}/>
            </div>
        )
    }
}