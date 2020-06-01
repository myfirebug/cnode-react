/*
 * @Author: hejp
 * @Date:   16:30
 * @Last Modified by:   hejp
 * @Last Modified time: 16:30
 */
import {
    TOPICS,
    IS_SCROLL,
    TOPICS_PARAMS,
    SCROLLTOP
} from '../actionType'

const initialState = {
    // 列表数据
    datas: [],
    // 是否请求接口
    flag: true,
    params: {
        page: 1,
        tab: '',
        limit: 10
    },
    scrollTop: 0
}

export const topics = (state = initialState, action) => {
    switch (action.type) {
        case TOPICS:
            // 如果flag为真，意思就是currentPage=1
            if (action.payload.flag) {
                return {
                    ...state,
                    datas: action.payload.topics
                }
            }
            return {
                ...state,
                datas: [
                    ...state.datas,
                    ...action.payload.topics
                ]
            }
        case IS_SCROLL:
            return {
                ...state,
                flag: action.flag
            }
        case TOPICS_PARAMS:
            return {
                ...state,
                params: action.params
            }
        case SCROLLTOP:
            return {
                ...state,
                scrollTop: action.value
            }
        default:
            return state
    }
}
