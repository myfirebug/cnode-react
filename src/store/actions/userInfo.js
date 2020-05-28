/*
 * @Author: hejp
 * @Date:   17:28
 * @Last Modified by:   hejp
 * @Last Modified time: 17:28
 */
import * as types from '../actionType'
import Ajax from '../../service'
import {createHashHistory} from 'history';

const userInfo = data => ({
    type: types.USERINFO,
    data
})

export const getUserInfo = (token, pathname) => (dispatch) => {
    Ajax.login({
        accesstoken: token
    })
        .then(res => {
            if (res.success === true) {
                dispatch(userInfo({
                    avatar_url: res.avatar_url,
                    loginname: res.loginname,
                    token: token
                }))
                createHashHistory().push({
                    pathname: pathname
                })
            }
        })
}
