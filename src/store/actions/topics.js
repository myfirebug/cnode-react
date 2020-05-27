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

export const  getAllTopics = (params) => dispatch => {
    Ajax.getTopics(params)
        .then(res => {
            dispatch(topics({
                topics: res.datas,
                flag: params.page === 1 ? true : false
            }))
        })
}
