/*
 * @description: 模块描述
 * @Author: yany
 * @Date: 2019-09-04 10:38:11
 * @LastEditors: hejp
 * @LastEditTime: 2021-10-28 15:06:20
 */
import React, {
  memo,
  ReactComponentElement,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { lockMaskScroll } from "@util/tools";

interface IPrivateRoute {
  isLogin: boolean;
  component: ReactComponentElement;
  title: string;
  isPrivate: boolean;
  [propName: string]: any;
}
const PrivateRoute = memo(
  ({
    isLogin,
    component: Component,
    title,
    isPrivate,
    ...rest
  }: IPrivateRoute) => {
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
            return isLogin ? (
              <Component {...rest} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
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

const userInfo = (state) => ({
  isLogin: !!state.platform.token,
});

export default connect(userInfo)(PrivateRoute);
