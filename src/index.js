import React from "react";
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes  from './router/router';
import store from './store/store.js';
import Loading from "./utils/loading"
import "./utils/axios"

/*加载根节点的字体大小*/
/*import "./utils/fontSize"*/


/*全局样式*/
import "./css/base.css";
import "./css/animate.css";

store.subscribe(function () {
    console.log("页面所以的state",store.getState())
})
const route = (
    <Provider store={store} key="provider">
        <Router history={hashHistory} routes={routes} />
    </Provider>
)
render(route, document.getElementById('root'))
render(<Loading />, document.getElementById('loading'))
