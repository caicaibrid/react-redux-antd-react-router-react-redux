/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React, {Component} from "react"
import SearchBar from "../searchBar/SearchBar"
import Footer from "../footer/Footer"

export default class Index extends Component{
    render(){
        return (
            <div className="container">
                <SearchBar />
                index 内容
                <Footer active={0}/>
            </div>
        )
    }
}