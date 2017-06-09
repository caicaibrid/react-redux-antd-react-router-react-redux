import React, {Component} from "react"
import PropTypes from "prop-types"
import {getLoginState} from "../../actions/login"


export default class Base extends Component {
    componentWillMount(){
        const {store} = this.context;
        store.dispatch(getLoginState());
    }
    render() {
        return (
            <div id="app">
                {this.props.children}
            </div>
        );
    }
}
Base.contextTypes = {
    store: PropTypes.object
};