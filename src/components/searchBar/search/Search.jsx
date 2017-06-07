/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React, {Component} from "react"
import { Input } from 'antd';
const Search = Input.Search;
import "./search.css"

export default class SearchBar extends Component{
    render(){
        return (
            <Search
                className="searchBar"
                placeholder={this.props.placeholder}
                onSearch={value => console.log(value)}
            />
        )
    }
}