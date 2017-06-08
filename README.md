## Folder Structure

After creation, your project should look like this:

```
my-app/
  config/ webpack配置
  node_modules/
  package.json
  public/
    index.html 单页模版
    favicon.ico
  scripts/ 启动脚本
  src/
    actions 页面需要触发的所有actions
    components
        base 基础页 {this.props.children}
        customerManage 客户管理
        footer 底部
        fundManage 基金管理
        header 头部
        index 我的首页
        login 登录
        logo 登录页的logo
        projectManage 项目管理
        reportManage 报告管理
        searchBar 顶部搜索栏
        userCenter 个人中心
    css 公共js(入口文件配置了)
    images 公用的图片
    lib js插件
    mock 假数据
    reducer 所有页面的reduce 更改state
    router 路由
    store 保存数据的地方
    utils 公共自定义插件
    index.js 单页入口
  
  README.md
```

**these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
