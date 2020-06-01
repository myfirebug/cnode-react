/*
 * @Author: hejp
 * @Date:   16:12
 * @Last Modified by:   hejp
 * @Last Modified time: 16:12
 */
import * as types from "../actionType";
import Ajax from "../../service";

const setCollect = flag => ({
    type: types.SET_COLLECT,
    flag
})
const collectList = data => ({
    type: types.COLLECT_LIST,
    data
})


/**
 * 收藏和取消收藏
 * @param {*} id
 */
export const setOrCancelCollect = params => (dispatch, getState) => {
    const state = getState();
    if (state.details.is_collect) {
        Ajax.de_collect(params)
            .then(() => {
                dispatch(setCollect(false))
            })
    } else {
        Ajax.collect(params)
            .then(() => {
                dispatch(setCollect(true))
            })
    }
}

/**
 * 我的收藏列表
 * @param {*} id
 */
export const getUserCollects = username => dispatch => {
    Ajax.myCollect(username)
        .then(res => {
            if (res.success) {
                dispatch(collectList(res.data))
            }
        })
}
