/*
 * @Author: hejp
 * @Date:   13:46
 * @Last Modified by:   hejp
 * @Last Modified time: 13:46
 */
import * as types from '../actionType'
import Ajax from '../../service'

const messages = data => ({
    type: types.MESSAGES,
    data
})

/**
 * 获取消息列表
 * @returns {Function}
 */
export const getMessages = () => (dispatch, getState) => {
    const state = getState()
    const params = {
        accesstoken: state.userInfo.token
    }
    Ajax.messages(params)
        .then(res => {
            if (res.success) {
                dispatch(messages(res.data))
            }
        })
}
