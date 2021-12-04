# React劲爆新特性Hooks+TS重构cnode社区
本项目基于react+react-redux+redux-thunk+redux+logger+redux-persist+hook+typescript开发的

## demo
![cnode社区](https://myfirebug.github.io/react-cnode-ts/images/ewm.png)

[react-cnode社区](https://myfirebug.github.io/react-cnode-ts/index.html#/home)

## 目录结构
```
cnode
├── config-overrides.js
├── package-lock.json
├── package.json
├── paths.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── assets
│   │   ├── images
│   │   │   ├── error.png
│   │   │   ├── loading.png
│   │   │   ├── logo.png
│   │   │   ├── logo.svg
│   │   │   ├── success.png
│   │   │   └── warning.png
│   │   └── scss
│   │       ├── base
│   │       │   ├── animation.scss
│   │       │   ├── _font.scss
│   │       │   ├── _layout.scss
│   │       │   └── _setting.scss
│   │       ├── index.scss
│   │       ├── mixin
│   │       │   ├── config.scss
│   │       │   ├── function.scss
│   │       │   ├── mixins.scss
│   │       │   ├── _basic.scss
│   │       │   └── _border.scss
│   │       └── theme
│   │           └── default.scss
│   ├── components
│   │   ├── footer
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── loadableComponents
│   │   │   ├── index.scss
│   │   │   ├── index.tsx
│   │   │   └── skeleton.ts
│   │   ├── loading
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── privateRoute
│   │   │   └── index.tsx
│   │   └── scrollLoad
│   │       ├── index.scss
│   │       └── index.tsx
│   ├── hook
│   │   └── useURLLoader.tsx
│   ├── index.scss
│   ├── index.tsx
│   ├── logo.svg
│   ├── packages
│   │   ├── actionSheet
│   │   │   ├── index.tsx
│   │   │   └── style
│   │   │       └── index.scss
│   │   ├── button
│   │   │   ├── index.tsx
│   │   │   └── style
│   │   │       ├── index.scss
│   │   │       └── mixin.scss
│   │   ├── index.tsx
│   │   ├── infiniteScroll
│   │   │   ├── infiniteScroll.tsx
│   │   │   └── style
│   │   │       └── infiniteScroll.scss
│   │   ├── input
│   │   │   ├── index.tsx
│   │   │   └── style
│   │   │       ├── index.scss
│   │   │       └── mixin.scss
│   │   ├── list
│   │   │   ├── index.tsx
│   │   │   ├── listItem.tsx
│   │   │   └── style
│   │   │       ├── index.scss
│   │   │       ├── listItem.scss
│   │   │       └── mixin.scss
│   │   ├── popUp
│   │   │   ├── index.tsx
│   │   │   └── style
│   │   │       └── index.scss
│   │   ├── pullToRefresh
│   │   │   ├── pullToRefresh.tsx
│   │   │   └── style
│   │   │       └── pullToRefresh.scss
│   │   ├── radio
│   │   │   ├── index.tsx
│   │   │   ├── radioGroup.tsx
│   │   │   └── style
│   │   │       └── index.scss
│   │   ├── skeleton
│   │   │   ├── skeleton.tsx
│   │   │   └── stype
│   │   │       └── skeleton.scss
│   │   └── toast
│   │       ├── index.tsx
│   │       └── style
│   │           ├── index.scss
│   │           └── mixin.scss
│   ├── page
│   │   ├── counter
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── details
│   │   │   ├── components
│   │   │   │   └── reply
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── home
│   │   │   ├── components
│   │   │   │   ├── tab
│   │   │   │   └── topicsItem
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── login
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── message
│   │   │   ├── components
│   │   │   │   └── messageItem
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   └── my
│   │       ├── components
│   │       │   └── theme
│   │       ├── index.scss
│   │       └── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── router
│   │   └── index.tsx
│   ├── service
│   │   ├── config.ts
│   │   ├── fetch.ts
│   │   └── index.ts
│   ├── setupTests.ts
│   ├── store
│   │   ├── actions
│   │   │   ├── counter.ts
│   │   │   ├── theme.ts
│   │   │   └── userInfo.ts
│   │   ├── index.ts
│   │   ├── reducers
│   │   │   ├── counter.ts
│   │   │   ├── index.ts
│   │   │   ├── theme.ts
│   │   │   └── userInfo.ts
│   │   └── type.ts
│   ├── theme
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   └── util
│       ├── sm4.js
│       └── tools.ts
├── tree.md
└── tsconfig.json

```
## git地址
[https://github.com/myfirebug/cnode-react.git](https://github.com/myfirebug/cnode-react.git) ts分支

## 下载
```javascript
  git clone https://github.com/myfirebug/cnode-react.git
  cd cnode-react
  git checkout ts
  npm install (安装依赖模块)
```
## 运行
```javascript
  npm run start (开发版本访问：http://localhost:3000/)
  npm run build （发布生产版本）
```

## 功能
+ 登录、退出
+ 列表下拉加载、上拉刷新
+ 详情
+ 我的消息
+ 个人中心 （未登录，显示登录，否则显示退出、最新创建的话题、最近参与的话题、收藏的）
+ 查看别人资料（最新创建的话题、最近参与的话题、收藏的）



