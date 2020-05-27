/*
 * @Author: hejp
 * @Date:   16:30
 * @Last Modified by:   hejp
 * @Last Modified time: 16:30
 */
import {
    TOPICS
} from '../actionType'

export const topics = (state = [], action) => {
    switch (action.type) {
        case TOPICS:
            // 如果flag为真，意思就是currentPage=1
            if (action.flag) {
                return {
                    ...action.topics
                }
            }
            return {
                ...state,
                ...action.topics
            }
        default:
            return state
    }
}
