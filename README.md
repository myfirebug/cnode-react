# cnode-react社区
本项目基于react+react-redux+redux-thunk+redux+logger+redux-persist+hook开发的

## demo
![cnode社区](https://myfirebug.github.io/react-cnode/images/ewm.png)

[react-cnode社区](https://myfirebug.github.io/react-cnode/index.html#/home)

## 目录结构
```
|-- cnode-react
    |-- config-overrides.js
    |-- build
    |-- public
    |-- src
        |-- assets
        |-- components
        |-- hook
        |-- page
        |-- router
        |-- service
        |-- skeleton
        |-- store
        |   |-- actionType.js
        |   |-- index.js
        |   |-- actions
        |   |-- reducers
        |-- util
            |-- index.js

```


## 下载
```javascript
  git clone https://github.com/myfirebug/cnode-react.git
  cd cnode-react
  npm install (安装依赖模块)
```
## 运行
```javascript
  npm run dev (开发版本访问：http://localhost:3000/)
  npm run dist （发布生产版本）
```

## 功能
+ 登录、退出
+ 列表下拉加载、缓存非第一页数据
+ 详情(模拟点赞、收藏功能)未登录不显示评论、收藏、点赞、回复、删除
+ 我的消息(单条标记已读)
+ 个人中心 （未登录，显示登录，否则显示退出、最新创建的话题、最近参与的话题、收藏的）
+ 查看别人资料（最新创建的话题、最近参与的话题、收藏的）

## 部分图片
![首页](https://myfirebug.github.io/react-cnode/images/home.jpg)
![登录](https://myfirebug.github.io/react-cnode/images/login.jpg)
![详情](https://myfirebug.github.io/react-cnode/images/details.jpg)
![我的](https://myfirebug.github.io/react-cnode/images/my.jpg)




