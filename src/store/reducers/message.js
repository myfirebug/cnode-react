/*
 * @Author: hejp
 * @Date:   16:44
 * @Last Modified by:   hejp
 * @Last Modified time: 16:44
 */
import {
    MESSAGES
} from '../actionType'

export const messages = (state = {}, action) => {
    switch (action.type) {
        case MESSAGES:
            return action.data
        default:
            return state

    }
}
