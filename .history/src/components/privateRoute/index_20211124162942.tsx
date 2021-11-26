/*
 * @description: 模块描述
 * @Author: yany
 * @Date: 2019-09-04 10:38:11
 * @LastEditors: hejp
 * @LastEditTime: 2021-11-24 16:29:42
 */
import React, { memo, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { lockMaskScroll } from "@util/tools";
import { ALL_STATE } from "@store/type";

interface IPrivateRoute {
  token: boolean;
  Component: any;
  title: string;
  isPrivate: boolean;
  [propName: string]: any;
}
const PrivateRoute = memo(
  ({
    token,
    component: Component,
    title,
    isPrivate,
    ...rest
  }: IPrivateRoute) => {
    console.log(token, 'isLoginisLoginisLogin')
    // 初始化浏览器title
    useEffect(() => {
      if (title) {
        document.title = title;
      }
      lockMaskScroll["beforeClose"]();
    }, [title]);
    return (
      <Route
        {...rest}
        render={() => {
          if (isPrivate) {
            return token ? (
              <Component {...rest} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  search: `redirect=${window.location.hash.split('#')[1].replace('?', '____')}`
                }}
              />
            );
          } else {
            return <Component {...rest} />;
          }
        }}
      />
    );
  }
);

const mapStateToProps = (state: ALL_STATE) => ({
  token: state.userInfo.token,
});

export default connect(mapStateToProps)(PrivateRoute);
