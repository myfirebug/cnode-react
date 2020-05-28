/*
 * @description: 模块描述
 * @Author: yany
 * @Date: 2019-09-04 10:38:11
 * @LastEditors: yany
 * @LastEditTime: 2019-09-04 10:38:11
 */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
    render() {
        const { isLogin, component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                    isLogin ? (
                        <Component {...rest} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: this.props.location.pathname }
                            }}
                        />
                    )
                }
            ></Route>
        );
    }
}

const userInfo = state => ({
    isLogin: !!state.userInfo.token
})

export default connect(
    userInfo
)(PrivateRoute)
