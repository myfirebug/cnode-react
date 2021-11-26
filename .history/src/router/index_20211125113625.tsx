/*
 * @Author: hejp
 * @Date:   17:33
 * @Last Modified by:   hejp
 * @Last Modified time: 17:33
 */
import React from "react";
import { HashRouter, Switch, Redirect, withRouter } from "react-router-dom";
import MdLoadableComponent from "@components/loadableComponents";
// 私有路由组件
import MdPrivateRoute from "@components/privateRoute";

/**
 * component  路由组件
 * pathname   路由
 * title     页面标题
 * private   是否需要登录才能访问的页面，true: 是，false: 不是
 * @type {*[]}
 */
const routerList = [
    {
        component: MdLoadableComponent(
            () => import(/*webpackChunkName:"home"*/ "@page/home")
        ),
        pathname: "/home",
        title: "首页",
        private: false,
    },
    {
        component: MdLoadableComponent(
            () => import(/*webpackChunkName:"login"*/ "@page/login")
        ),
        pathname: "/login",
        title: "登录",
        private: false,
    },
    {
        component: MdLoadableComponent(
            () => import(/*webpackChunkName:"details"*/ "@page/details")
        ),
        pathname: "/details",
        title: "详情",
        private: false,
    },
    {
        component: MdLoadableComponent(
            () => import(/*webpackChunkName:"my"*/ "@page/my")
        ),
        pathname: "/my",
        title: "个人中心",
        private: false,
    },
    {
        component: MdLoadableComponent(
            () => import(/*webpackChunkName:"message"*/ "@page/message")
        ),
        pathname: "/message",
        title: "消息中心",
        private: false,
    }
];

const RouteModule = () => {
  return (
    <Switch>
      {routerList.map((router) => (
        <MdPrivateRoute
          key={router.pathname}
          path={router.pathname}
          title={router.title}
          isPrivate={router.private}
          component={router.component}
        />
      ))}
      <Redirect to={routerList[0].pathname} />
    </Switch>
  );
};

const RoutersComponents = () => {
  const Routes = withRouter(RouteModule);
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};
export default RoutersComponents;
