import axios from  "axios";
import { Modal } from 'antd';

let loading=null;

axios.defaults.baseURL =(process.env.NODE_ENV === "development"?"":"http://www.baidu.com");
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
axios.interceptors.request.use(config => {
    loading = document.getElementById("loading").firstElementChild;
    loading.className = "loading active"
    return config
}, error => {
    loading.className="none"
    Modal.error({
        title: 'This is an error message',
        content: '加载超时!',
    })
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
    loading.className="none"
    return data;
}, error => {
    loading.className="none"
    Modal.error({
        title: 'This is an error message',
        content: '加载失败!',
    })
    return Promise.reject(error)
})

export default axios