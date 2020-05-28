/*
 * @Author: hejp
 * @Date:   15:24
 * @Last Modified by:   hejp
 * @Last Modified time: 15:24
 */
import {
    DETAILS
} from '../actionType'

export const details = (state = {}, action) => {
    switch (action.type) {
        case DETAILS:
            return action.data
        default:
            return state
    }
}
