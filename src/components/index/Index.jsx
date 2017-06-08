/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React, {Component} from "react"
import PropTypes from "prop-types"
import SearchBar from "../searchBar/SearchBar"
import Footer from "../footer/Footer"

export default class Index extends Component{
    render(){
        const {store} = this.context;
        console.log(store.getState())
        return (
            <div className="container">
                <SearchBar />
                index 内容
                <Footer active={0}/>
            </div>
        )
    }
}
Index.contextTypes = {
    store: PropTypes.object
}