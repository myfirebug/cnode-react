/*
 * @Author: hejp
 * @Date:   15:24
 * @Last Modified by:   hejp
 * @Last Modified time: 15:24
 */
import {
    USERINFO
} from '../actionType'

export const userInfo = (state = {}, action) => {
    switch (action.type) {
        case USERINFO:
            return action.data
        default:
            return state
    }
}
