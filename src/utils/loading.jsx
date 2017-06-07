/**
 * Created by Administrator on 2017/6/7 0007.
 */
import React, {Component} from "react"
import { Spin } from 'antd';

export default class Loading extends Component{
    render() {
        const {active,tip="Loading"} = this.props;
        return (
            <div  className={active?"loading active":"none"}>
                <Spin  tip={tip}/>
            </div>
        )
    }
}