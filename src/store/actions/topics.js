/*
 * @Author: hejp
 * @Date:   16:17
 * @Last Modified by:   hejp
 * @Last Modified time: 16:17
 */
import * as types from '../actionType'
import Ajax from '../../service'

const topics = payload => ({
    type: types.TOPICS,
    payload
})

const isScroll = flag => ({
    type: types.IS_SCROLL,
    flag: flag
})

const topicsParams = params => ({
    type: types.TOPICS_PARAMS,
    params: params
})

export const  getAllTopics = () => (dispatch, getState) => {
    const state = getState();
    const params = state.topics.params;
    const length = state.topics.datas.length
    const flag = state.topics.flag
    if (length && params.page === 1) {
        dispatch(topics({
            topics: [],
            flag: true,
            params
        }))
    }
    if (flag) {
        dispatch(isScroll(false))
        Ajax.getTopics(params)
            .then(res => {
                dispatch(isScroll(true))
                dispatch(topics({
                    topics: res.data,
                    flag: params.page === 1 ? true : false
                }))
            })
    }
}

export const getTopicsParams = params => dispatch => {
    dispatch(topicsParams(params))
}
