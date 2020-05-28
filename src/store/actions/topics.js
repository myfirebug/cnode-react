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

export const  getAllTopics = (params) => (dispatch, getState) => {
    const flag = getState().topics.flag
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
