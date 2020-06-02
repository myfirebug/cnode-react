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

const markOne = id => ({
    type: types.MARK_ONE,
    id
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

export const getMarkOne = id => (dispatch, getState) => {
    const state = getState()
    const token = state.userInfo.token
    if (!token) return
    Ajax.markOne(id, {
        accesstoken: token
    })
        .then(res => {
            if (res.success) {
                dispatch(markOne(id))
            }
        })
}
