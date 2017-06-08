/**
 * Created by Administrator on 2017/6/8 0008.
 */
import React, {Component} from "react"
import SearchBar from "../searchBar/SearchBar"
import Footer from "../footer/Footer"

export default class CustomerManage extends Component{
    render(){
        return (
            <div className="container">
                <SearchBar />
                CustomerManage 内容
                <Footer active={3}/>
            </div>
        )
    }
}