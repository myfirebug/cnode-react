/*
 * @Author: hejp
 * @Date:   13:51
 * @Last Modified by:   hejp
 * @Last Modified time: 13:51
 */
import {
    USER_CENTER
} from '../actionType'

export const user = (state = {}, action) => {
    switch (action.type) {
        case USER_CENTER:
            return action.data
        default:
            return state

    }
}
