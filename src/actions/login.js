/**
 * Created by Administrator on 2017/6/4 0004.
 */
import {LOGIN_ING,LOGIN_OUT,LOGIN_SUCCESS} from "./actionTypes"
import {getStore,removeStore,setStore} from "../utils/storage"
import { Modal } from 'antd'
import { hashHistory } from 'react-router';

export function getLoginState() {
    let username = getStore("username")
    if(username){
        return {
            type:LOGIN_SUCCESS,
            username
        }
    }else {
        Modal.error({
            title: '登录失效,请重新登录!',
            okText:"确定",
            onOk:function () {
               hashHistory.push("/login")
            }
        });
        return {
            type:LOGIN_OUT
        }
    }
}
export function login_in(obj) {
    return  dispatch=>{
                //pending  正在进行登录的状态
                dispatch({
                    type:LOGIN_ING,
                    username:obj.username
                })
                //开始发送异步请求登录
                new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        setStore('username',obj.username)
                        resolve({
                            type:LOGIN_SUCCESS,
                            username:obj.username
                        })
                    },2000)
                }).then(res=>{
                    hashHistory.push("/")
                    dispatch(res)
                })
            }
}

export function login_out() {
    //删除登录信息
    removeStore("username")
    return {
        type:LOGIN_OUT
    }
}