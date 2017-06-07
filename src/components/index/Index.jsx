/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React, {Component} from "react"
import Header from "../searchBar/Header"
import Footer from "../footer/Footer"

export default class Index extends Component{
    render(){
        return (
            <div>
                <Header />
                index 内容
                <Footer/>
            </div>
        )
    }
}