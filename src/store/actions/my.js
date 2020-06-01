/*
 * @Author: hejp
 * @Date:   13:46
 * @Last Modified by:   hejp
 * @Last Modified time: 13:46
 */
import * as types from '../actionType'
import Ajax from '../../service'

const userCenter = data => ({
    type: types.USER_CENTER,
    data
})

export const getUserCenterInfo = username => dispatch => {
    Ajax.user(username)
        .then(res => {
            if (res.success) {
                console.log(res.data)
                dispatch(userCenter(res.data))
            }
        })
}
